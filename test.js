var questionNo = 0;
var state = 0;
var i = 0;

var question = document.getElementById("question");
var questionNumber = document.getElementById("question-no");
var optA = document.getElementById("opt-A");
var optB = document.getElementById("opt-B");
var optC = document.getElementById("opt-C");
var optD = document.getElementById("opt-D");
var next = document.getElementById("next");

var questionMaharastra = ["What is the capital of maharastra?", "What are the number of districts in Maharastra?", "lkjdf"];
var optAMaharastra = ["mumbai", "31", "lkjdf"];
var optBMaharastra = ["Nagpur", "24", "lkajdf"];
var optCMaharastra = ["kharghar", "32", "jrhgf"];
var optDMaharastra = ["vashi", "21", "lkajdf"];
optA.onclick = function(){
    next.style.display = "flex";
}

next.style.display = "flex";
function draw(){
    if(i == questionMaharastra.length){
        next.innerHTML = "Finish";
        next.onclick = function(){
            console.log("congrats");
        }
    }
    if(i<questionMaharastra.length){
    next.onclick = function(){
            questionNo = i+2;
            next.style.display = "none";
            optA.style.border = "3px solid #2b9fe6";
            optA.style.background = "#021a2a";
            optB.style.border = "3px solid #2b9fe6";
            optB.style.background = "#021a2a";
            optC.style.border = "3px solid #2b9fe6";
            optC.style.background = "#021a2a";
            optD.style.border = "3px solid #2b9fe6";
            optD.style.background = "#021a2a";
            state = 0;
            questionNumber.innerHTML = "Question " + questionNo;
            question.innerHTML = questionMaharastra[i];
            optA.innerHTML = optAMaharastra[i];
            optB.innerHTML = optBMaharastra[i];
            optC.innerHTML = optCMaharastra[i];
            optD.innerHTML = optDMaharastra[i];
            i++;
    }
    }
}
function reset1(){
    if(state == 0){
        optA.style.background = "#2b9fe6";
    }
}
function down1(){
    if(state == 0){
        optA.style.background = "#021a2a";
    }
}
function reset2(){
    if(state == 0){
        optB.style.background = "#2b9fe6";
    }
}
function down2(){
    if(state == 0){
        optB.style.background = "#021a2a";
    }
}
function reset3(){
    if(state == 0){
        optC.style.background = "#2b9fe6";
    }
}
function down3(){
    if(state == 0){
        optC.style.background = "#021a2a";
    }
}
function reset4(){
    if(state == 0){
        optD.style.background = "#2b9fe6";
    }
}
function down4(){
    if(state == 0){
        optD.style.background = "#021a2a";
    }
}
function nextChange(){
    next.style.background = "#2b9fe6";
}
function NextChange(){
    next.style.background = "#021a2a";
}
