var username = sessionStorage.getItem("username");
var userLevels;
var percentage = document.getElementById("percentage");
var resultBox = document.getElementById("result");
var sne = document.getElementById("sne");
var retry = document.getElementById("retry")
var incorrectNo = document.getElementById("incorrect-no");
var correctNo = document.getElementById("correct-no");
var correct = 0;
var incorrect = 0;

function draw2(){
    if(username == null || username == "default"){
        all2.style.display = "block";
        all1.style.display = "none";   
        document.body.style.backgroundColor = "#C54545";
        document.body.style.display = "flex";
        document.body.style.justifyContent = "center";
        document.body.style.alignItems = "center";
    }
    else{
        all2.style.display = "none";
    }
}

async function getLevels(){
    var passwordRef = await database.ref("Users/" + username +"/levels");
    await passwordRef.on("value", (data)=>{
        userLevels = data.val();
    })
}

async function updateLevels(level){
    await database.ref(`Users/${username}/`).update({
        'levels': level
    })
};