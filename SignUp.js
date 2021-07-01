var state1 = false;
var state2 = false;

var username = document.getElementById("username");
var password = document.getElementById("password1");
var password2 = document.getElementById("password2");
var hre = document.getElementById("submitA");
var database = firebase.database();
var user;
var warning1 = document.getElementById("warning1");
var warning2 = document.getElementById("warning2");
var open1 = document.getElementById("open1");
var open2 = document.getElementById("open2");
var closed1 = document.getElementById("closed1");
var closed2 = document.getElementById("closed2");
var submit = document.getElementById("submit");
var special = document.getElementById("special");
var names;
var nameArr;
var alerts = document.getElementById("alert");
var userCount;
var allUsers = [];
var alert2 = document.getElementById("alert2");

function setup(){
    getUserCount();
    getAllUsers();
}

function draw(){
    names = username.value;
    if(hre!=null){
        hre.onclick = function(){
            if(username.value == 0){
                document.getElementById("exclamation").style.display = "block";
            }
            if(password.value == 0){
                warning1.style.display = "block";
            }
            if(password2.value != password.value && password2.value != null && password.value != 0){
                warning2.style.display = "block";
            }
            for(var i in allUsers){
                if(allUsers[i].name != username.value && alert2.style.display == "none" && password2.value == password.value && password2.value != 0 && password.value != 0 && username.value != 0){
                    var index = "Users/" + username.value;
                    database.ref(index).update({
                        'name': names,
                        'password': password1.value,
                        'levels': 1
                    });
                    userCount += 1;
                    updateUserCount(userCount);
                    break;
                }   
            }
        }
    }
    nameArr = names.split("");
    if(allUsers!=[]){
    for(var i in allUsers){
        if(allUsers[i].name == username.value){
            alert2.style.display = "block";
            break;
        }
        else{
            alert2.style.display = "none";
            if(alert2.style.display == "none" && password2.value == password.value && password2.value != 0 && password.value != 0 && username.value != 0){
                hre.setAttribute("href", "Login.html");
            }
        }
    }
}
    for(var i in nameArr){
        if(nameArr[i] == " " || nameArr[i] == "!" || nameArr[i] == "@" || nameArr[i] == "#" || nameArr[i] == "$" || nameArr[i] == "%" || nameArr[i] == "^" || nameArr[i] == "&" || nameArr[i] == "*" || nameArr[i] == "(" || nameArr[i] == ")" || nameArr[i] == "-" || nameArr[i] == "+" || nameArr[i] == "=" || nameArr[i] == "|" || nameArr[i] == "/" || nameArr[i] == "{" || nameArr[i] == "[" || nameArr[i] == "]" || nameArr[i] == "}" || nameArr[i] == ";" || nameArr[i] == ":" || nameArr[i] == "'" || nameArr[i] == "`" || nameArr[i] == "," || nameArr[i] == "<" || nameArr[i] == "." || nameArr[i] == ">" || nameArr[i] == "?" || nameArr[i] == "~"){
            special.style.display = "block";
            break;
        }
        else if(username.value == 0 || nameArr[i] !== "!" || nameArr[i] !== "@" || nameArr[i] !== "#" || nameArr[i] !== "$" || nameArr[i] !== "%" || nameArr[i] !== "^" || nameArr[i] !== "&" || nameArr[i] !== "*" || nameArr[i] !== "(" || nameArr[i] !== ")" || nameArr[i] !== "-" || nameArr[i] !== "_" || nameArr[i] !== "+" || nameArr[i] !== "=" || nameArr[i] !== "|" || nameArr[i] !== "/" || nameArr[i] !== "{" || nameArr[i] !== "[" || nameArr[i] !== "]" || nameArr[i] !== "}" || nameArr[i] !== ";" || nameArr[i] !== ":" || nameArr[i] !== "'" || nameArr[i] !== "`" || nameArr[i] !== "," || nameArr[i] !== "<" || nameArr[i] !== "." || nameArr[i] !== ">" || nameArr[i] !== "?" || nameArr[i] !== "~"){
            special.style.display = "none";
        }
    }
    if(username.value != 0){
        document.getElementById("exclamation").style.display = "none";
    }
    if(password2.value != password.value || alert2.style.display == "block"){
        hre.removeAttribute("href");
    }
    if(password2.value == password.value && password2.value != 0 && password.value != 0){
        warning2.style.display = "none";
    }
    if(password.value!=0){
        warning1.style.display = "none";
    }
}

function updateInfo(){
    if(username.value == 0){
        document.getElementById("exclamation").style.display = "block";
    }
    if(password.value == 0){
        warning1.style.display = "block";
    }
    if(password2.value != password.value && password2.value != null && password.value != 0){
        warning2.style.display = "block";
    }
    for(var i in allUsers){
        if(allUsers[i].name != username.value && alert2.style.display == "none" && password2.value == password.value && password2.value != 0 && password.value != 0 && username.value != 0){
            var index = "Users/" + username.value;
            database.ref(index).update({
                'name': names,
                'password': password1.value,
                'levels': 1
            });
            userCount += 1;
            updateUserCount(userCount);
            break;
        }   
    }
}   

async function getAllUsers(){
    var allUsersRef = await database.ref('Users').once("value");
    if(allUsersRef.exists()){
        allUsers = await allUsersRef.val();
    }
}

function getUserCount(){
    var userCountRef = database.ref('userCount');
    userCountRef.on("value", (data)=>{
        userCount = data.val();
    })
}

function updateUserCount(count){
    database.ref('/').update({
        'userCount': count
    })
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
function toggle2(){
    if(state2 == false){
        document.getElementById("open2").style.display = "block";
        document.getElementById("closed2").style.display = "none";
        document.getElementById("password2").setAttribute("type", "text");

        state2 = true;

    }
    else{
        document.getElementById("closed2").style.display = "block";
        document.getElementById("open2").style.display = "none";
        document.getElementById("password2").setAttribute("type", "password");

        state2 = false;
    }
}