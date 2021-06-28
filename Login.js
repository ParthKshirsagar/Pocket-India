var state1 = false;
var state2 = false;
var allUsers = [];
var database;
var username = document.getElementById("username");
var password = document.getElementById("password1");
var hyperlink = document.getElementById("Login");
var error = document.getElementById("error");
var error2 = document.getElementById("error2");
var names;

function setup(){
    database = firebase.database();
    getAllUsers();
}

function draw(){
    if(hyperlink != null){
        hyperlink.onclick = function(){
            sessionStorage.setItem("username", username.value);
        }
    }
    if(allUsers != []){
        for(var i in allUsers){
            if(allUsers[i].name == username.value && allUsers[i].password == password.value){
                error2.style.display = "none";
                error.style.display = "none";
                hyperlink.setAttribute("href", "Main.html");
                break;
            }
            else if(allUsers[i].name == username.value){
                error.style.display = "none";
            }
            else if(allUsers[i].name != username.value || allUsers[i].password != password.value){
                hyperlink.removeAttribute("href");
            }
        }
    }
    names = username.value;
}

async function getAllUsers(){
    var allUsersRef = await database.ref('Users').once("value");
    if(allUsersRef.exists()){
        allUsers = await allUsersRef.val();
    }
}

function check(){
    for(var i in allUsers){
        if(allUsers[i].name == username.value && allUsers[i].password == password.value){
            sessionStorage.setItem("username", username.value);
            console.log("hi");
            break;
        }
        if(allUsers[i].name != username.value){
            error.style.display = "block";
        }
        if(allUsers[i].name == username.value && allUsers[i].password != password.value){
            error2.style.display = "block";
            break;
        }
    }
}

function toggle1(){
    if(state1 == false){
        document.getElementById("open1").style.display = "block";
        document.getElementById("closed1").style.display = "none";
        document.getElementById("password1").setAttribute("type", "text");

        state1 = true;

    }
    else{
        document.getElementById("closed1").style.display = "block";
        document.getElementById("open1").style.display = "none";
        document.getElementById("password1").setAttribute("type", "password");

        state1 = false;
    }
}