var database = firebase.database();
var username = sessionStorage.getItem("username");
console.log(username);
var userPassword;
function setup(){
    getPassword();
}
function draw(){
    console.log(userPassword);
}

async function getPassword(){
    var passwordRef = await database.ref("Users/" + username +"/password");
    await passwordRef.on("value", (data)=>{
        userPassword = data.val();
    })
}