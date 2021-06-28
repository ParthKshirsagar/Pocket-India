var database = firebase.database();
var state = 0;
var questionNo = 1;

var questionNumber = document.getElementById("question-no");
var question = document.getElementById("question");
var optA = document.getElementById("opt-A");
var optB = document.getElementById("opt-B");
var optC = document.getElementById("opt-C");
var optD = document.getElementById("opt-D"); 
var next = document.getElementById("next");
var all1 = document.getElementById("all");
var all2 = document.getElementById("all2");
var level = 1;

function setup(){
    getLevels();
    console.log(username);
}

function draw(){
    draw2();
    if(correct != 0 && userLevels == 1){
        sne.onclick = function(){
            updateLevels(2);
            setTimeout(function(){
                window.location.href = "Main.html";
            }, 1000);
        }
    }
    if(userLevels > 1 && correct != null){
        sne.onclick = function(){
            setTimeout(function(){
                window.location.href = "Main.html";
            }, 1000);
        }
    }
    if(correct == 0){
        sne.onclick = function(){
            alert("Your correct score has to be at least one to move on to the next level.");
        }
    }
    if(questionNo == 1 || questionNo == 8 || questionNo == 11 || questionNo == 16){
        optA.onclick = function(){
            optA.onclick = null;
            optB.onclick = null;
            optC.onclick = null;
            optD.onclick = null;
            questionNo = null;
            optA.style.border = "3px solid #CC9E88";
            optA.style.background = "#CC9E88";
            optB.style.background = "#CC9E88";
            optB.style.border = "3px solid #CC9E88";
            optC.style.border = "3px solid #5ecc26";
            optC.style.background = "#5ecc26";
            optD.style.border = "3px solid #CC9E88";
            optD.style.background = "#CC9E88";
            state = 1;
            next.style.display = "flex";
            incorrect++;
            wrong.play();
        }
        optB.onclick = function(){
            optA.onclick = null;
            optB.onclick = null;
            optC.onclick = null;
            optD.onclick = null;
            questionNo = null;
            optA.style.border = "3px solid #CC9E88";
            optA.style.background = "#CC9E88";
            optB.style.background = "#CC9E88";
            optB.style.border = "3px solid #CC9E88";
            optC.style.border = "3px solid #5ecc26";
            optC.style.background = "#5ecc26";
            optD.style.border = "3px solid #CC9E88";
            optD.style.background = "#CC9E88";
            state = 1;
            next.style.display = "flex";
            incorrect++;
            wrong.play();
        }
        optC.onclick = function(){
            optA.onclick = null;
            optB.onclick = null;
            optC.onclick = null;
            optD.onclick = null;
            questionNo = null;
            optA.style.border = "3px solid #CC9E88";
            optA.style.background = "#CC9E88";
            optB.style.background = "#CC9E88";
            optB.style.border = "3px solid #CC9E88";
            optC.style.border = "3px solid #5ecc26";
            optC.style.background = "#5ecc26";
            optD.style.border = "3px solid #CC9E88";
            optD.style.background = "#CC9E88";
            state = 1;
            next.style.display = "flex";
            correct++;
            correctAudio.play();
        }
        optD.onclick = function(){
            optA.onclick = null;
            optB.onclick = null;
            optC.onclick = null;
            optD.onclick = null;
            questionNo = null;
            optA.style.border = "3px solid #CC9E88";
            optA.style.background = "#CC9E88";
            optB.style.background = "#CC9E88";
            optB.style.border = "3px solid #CC9E88";
            optC.style.border = "3px solid #5ecc26";
            optC.style.background = "#5ecc26";
            optD.style.border = "3px solid #CC9E88";
            optD.style.background = "#CC9E88";
            state = 1;
            next.style.display = "flex";
            incorrect++;
            wrong.play();
        }
    }
    if(questionNo == 2 || questionNo == 5 || questionNo == 9 || questionNo == 13 || questionNo == 17){
        optA.onclick = function(){
            optA.onclick = null;
            optB.onclick = null;
            optC.onclick = null;
            optD.onclick = null;
            questionNo = null;
            optC.style.border = "3px solid #CC9E88";
            optC.style.background = "#CC9E88";
            optB.style.background = "#CC9E88";
            optB.style.border = "3px solid #CC9E88";
            optA.style.border = "3px solid #5ecc26";
            optA.style.background = "#5ecc26";
            optD.style.border = "3px solid #CC9E88";
            optD.style.background = "#CC9E88";
            state = 1;
            next.style.display = "flex";
            correct++;
            correctAudio.play();
        }
        optC.onclick = function(){
            optA.onclick = null;
            optB.onclick = null;
            optC.onclick = null;
            optD.onclick = null;
            questionNo = null;
            optC.style.border = "3px solid #CC9E88";
            optC.style.background = "#CC9E88";
            optB.style.background = "#CC9E88";
            optB.style.border = "3px solid #CC9E88";
            optA.style.border = "3px solid #5ecc26";
            optA.style.background = "#5ecc26";
            optD.style.border = "3px solid #CC9E88";
            optD.style.background = "#CC9E88";
            state = 1;
            next.style.display = "flex";
            incorrect++;
            wrong.play();
        }
        optB.onclick = function(){
            optA.onclick = null;
            optB.onclick = null;
            optC.onclick = null;
            optD.onclick = null;
            questionNo = null;
            optC.style.border = "3px solid #CC9E88";
            optC.style.background = "#CC9E88";
            optB.style.background = "#CC9E88";
            optB.style.border = "3px solid #CC9E88";
            optA.style.border = "3px solid #5ecc26";
            optA.style.background = "#5ecc26";
            optD.style.border = "3px solid #CC9E88";
            optD.style.background = "#CC9E88";
            state = 1;
            next.style.display = "flex";
            incorrect++;
            wrong.play();
        }
        optD.onclick = function(){
            optA.onclick = null;
            optB.onclick = null;
            optC.onclick = null;
            optD.onclick = null;
            questionNo = null;
            optC.style.border = "3px solid #CC9E88";
            optC.style.background = "#CC9E88";
            optB.style.background = "#CC9E88";
            optB.style.border = "3px solid #CC9E88";
            optA.style.border = "3px solid #5ecc26";
            optA.style.background = "#5ecc26";
            optD.style.border = "3px solid #CC9E88";
            optD.style.background = "#CC9E88";
            state = 1;
            next.style.display = "flex";
            incorrect++;
            wrong.play();
        }
    }
    if(questionNo == 3 || questionNo == 4 || questionNo == 6 || questionNo == 12 || questionNo == 15 || questionNo == 19){
        optA.onclick = function(){
            optA.onclick = null;
            optB.onclick = null;
            optC.onclick = null;
            optD.onclick = null;
            questionNo = null;
            optC.style.border = "3px solid #CC9E88";
            optC.style.background = "#CC9E88";
            optA.style.background = "#CC9E88";
            optA.style.border = "3px solid #CC9E88";
            optB.style.border = "3px solid #5ecc26";
            optB.style.background = "#5ecc26";
            optD.style.border = "3px solid #CC9E88";
            optD.style.background = "#CC9E88";
            state = 1;
            next.style.display = "flex";
            incorrect++;
            wrong.play();
        }
        optB.onclick = function(){
            optA.onclick = null;
            optB.onclick = null;
            optC.onclick = null;
            optD.onclick = null;
            questionNo = null;
            optC.style.border = "3px solid #CC9E88";
            optC.style.background = "#CC9E88";
            optA.style.background = "#CC9E88";
            optA.style.border = "3px solid #CC9E88";
            optB.style.border = "3px solid #5ecc26";
            optB.style.background = "#5ecc26";
            optD.style.border = "3px solid #CC9E88";
            optD.style.background = "#CC9E88";
            state = 1;
            next.style.display = "flex";
            correct++;
            correctAudio.play();
        }
        optC.onclick = function(){
            optA.onclick = null;
            optB.onclick = null;
            optC.onclick = null;
            optD.onclick = null;
            questionNo = null;
            optC.style.border = "3px solid #CC9E88";
            optC.style.background = "#CC9E88";
            optA.style.background = "#CC9E88";
            optA.style.border = "3px solid #CC9E88";
            optB.style.border = "3px solid #5ecc26";
            optB.style.background = "#5ecc26";
            optD.style.border = "3px solid #CC9E88";
            optD.style.background = "#CC9E88";
            state = 1;
            next.style.display = "flex";
            incorrect++;
            wrong.play();
        }
        optD.onclick = function(){
            optA.onclick = null;
            optB.onclick = null;
            optC.onclick = null;
            optD.onclick = null;
            questionNo = null;
            optC.style.border = "3px solid #CC9E88";
            optC.style.background = "#CC9E88";
            optA.style.background = "#CC9E88";
            optA.style.border = "3px solid #CC9E88";
            optB.style.border = "3px solid #5ecc26";
            optB.style.background = "#5ecc26";
            optD.style.border = "3px solid #CC9E88";
            optD.style.background = "#CC9E88";
            state = 1;
            next.style.display = "flex";
            incorrect++;
            wrong.play();
        }
    }
    if(questionNo == 7 || questionNo == 10 || questionNo == 14 || questionNo == 18){
        optA.onclick = function(){
            optA.onclick = null;
            optB.onclick = null;
            optC.onclick = null;
            optD.onclick = null;
            questionNo = null;
            optC.style.border = "3px solid #CC9E88";
            optC.style.background = "#CC9E88";
            optA.style.background = "#CC9E88";
            optA.style.border = "3px solid #CC9E88";
            optD.style.border = "3px solid #5ecc26";
            optD.style.background = "#5ecc26";
            optB.style.border = "3px solid #CC9E88";
            optB.style.background = "#CC9E88";
            state = 1;
            next.style.display = "flex";
            incorrect++;
            wrong.play();
        }
        optB.onclick = function(){
            optA.onclick = null;
            optB.onclick = null;
            optC.onclick = null;
            optD.onclick = null;
            questionNo = null;
            optC.style.border = "3px solid #CC9E88";
            optC.style.background = "#CC9E88";
            optA.style.background = "#CC9E88";
            optA.style.border = "3px solid #CC9E88";
            optD.style.border = "3px solid #5ecc26";
            optD.style.background = "#5ecc26";
            optB.style.border = "3px solid #CC9E88";
            optB.style.background = "#CC9E88";
            state = 1;
            next.style.display = "flex";
            incorrect++;
            wrong.play();
        }
        optC.onclick = function(){
            optA.onclick = null;
            optB.onclick = null;
            optC.onclick = null;
            optD.onclick = null;
            questionNo = null;
            optC.style.border = "3px solid #CC9E88";
            optC.style.background = "#CC9E88";
            optA.style.background = "#CC9E88";
            optA.style.border = "3px solid #CC9E88";
            optD.style.border = "3px solid #5ecc26";
            optD.style.background = "#5ecc26";
            optB.style.border = "3px solid #CC9E88";
            optB.style.background = "#CC9E88";
            state = 1;
            next.style.display = "flex";
            incorrect++;
            wrong.play();
        }
        optD.onclick = function(){
            optA.onclick = null;
            optB.onclick = null;
            optC.onclick = null;
            optD.onclick = null;
            questionNo = null;
            optC.style.border = "3px solid #CC9E88";
            optC.style.background = "#CC9E88";
            optA.style.background = "#CC9E88";
            optA.style.border = "3px solid #CC9E88";
            optD.style.border = "3px solid #5ecc26";
            optD.style.background = "#5ecc26";
            optB.style.border = "3px solid #CC9E88";
            optB.style.background = "#CC9E88";
            state = 1;
            next.style.display = "flex";
            correct++;
            correctAudio.play();
        }
    }
    if(questionNo == 20){
        optA.onclick = function(){
            optA.onclick = null;
            optB.onclick = null;
            optC.onclick = null;
            optD.onclick = null;
            questionNo = null;
            optC.style.border = "3px solid #CC9E88";
            optC.style.background = "#CC9E88";
            optA.style.background = "#CC9E88";
            optA.style.border = "3px solid #CC9E88";
            optD.style.border = "3px solid #5ecc26";
            optD.style.background = "#5ecc26";
            optB.style.border = "3px solid #CC9E88";
            optB.style.background = "#CC9E88";
            state = 1;
            next.innerHTML = "Finish";
            next.style.display = "flex";
            incorrect++;
            wrong.play();
        }
        optB.onclick = function(){
            optA.onclick = null;
            optB.onclick = null;
            optC.onclick = null;
            optD.onclick = null;
            questionNo = null;
            optC.style.border = "3px solid #CC9E88";
            optC.style.background = "#CC9E88";
            optA.style.background = "#CC9E88";
            optA.style.border = "3px solid #CC9E88";
            optD.style.border = "3px solid #5ecc26";
            optD.style.background = "#5ecc26";
            optB.style.border = "3px solid #CC9E88";
            optB.style.background = "#CC9E88";
            state = 1;
            next.innerHTML = "Finish";
            next.style.display = "flex";
            incorrect++;
            wrong.play();
        }
        optC.onclick = function(){
            optA.onclick = null;
            optB.onclick = null;
            optC.onclick = null;
            optD.onclick = null;
            questionNo = null;
            optC.style.border = "3px solid #CC9E88";
            optC.style.background = "#CC9E88";
            optA.style.background = "#CC9E88";
            optA.style.border = "3px solid #CC9E88";
            optD.style.border = "3px solid #5ecc26";
            optD.style.background = "#5ecc26";
            optB.style.border = "3px solid #CC9E88";
            optB.style.background = "#CC9E88";
            state = 1;
            next.innerHTML = "Finish";
            next.style.display = "flex";
            incorrect++;
            wrong.play();
        }
        optD.onclick = function(){
            optA.onclick = null;
            optB.onclick = null;
            optC.onclick = null;
            optD.onclick = null;
            questionNo = null;
            optC.style.border = "3px solid #CC9E88";
            optC.style.background = "#CC9E88";
            optA.style.background = "#CC9E88";
            optA.style.border = "3px solid #CC9E88";
            optD.style.border = "3px solid #5ecc26";
            optD.style.background = "#5ecc26";
            optB.style.border = "3px solid #CC9E88";
            optB.style.background = "#CC9E88";
            state = 1;
            next.innerHTML = "Finish";
            next.style.display = "flex";
            correct++;
            correctAudio.play();
        }
        next.onclick = function(){
            all1.style.display = "none";
            incorrectNo.innerHTML = incorrect;
            correctNo.innerHTML = correct;
            resultBox.style.display = "block";
            percentage.innerHTML = `${Math.round((correct/20)*100)}%`;
        }
    }
    if(questionNo == 1){
        next.onclick = function(){
            questionNo = 2;
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
            questionNumber.innerHTML = "Question 2"
            question.innerHTML = "Lakshadweep comes under the jurisdiction of which state's High Court?";
            optA.innerHTML = "Kerala";
            optB.innerHTML = "Goa";
            optC.innerHTML = "Tamil Nadu";
            optD.innerHTML = "Maharastra";
        }
    }
    if(questionNo == 2){
        next.onclick = function(){
            questionNo = 3;
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
            questionNumber.innerHTML = "Question 3";
            question.innerHTML = "What is the total number of sub-divisions in Lakshadweep?";
            optA.innerHTML = "8";
            optB.innerHTML = "10";
            optC.innerHTML = "12";
            optD.innerHTML = "13";
        }
    }
    if(questionNo == 3){
        next.onclick = function(){
            questionNo = 4;
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
            questionNumber.innerHTML = "Question 4";
            question.innerHTML = "What is the total number of islands under Lakshadweep territory?";
            optA.innerHTML = "28";
            optB.innerHTML = "32";
            optC.innerHTML = "36";
            optD.innerHTML = "38";
        }
    }
    if(questionNo == 4){
        next.onclick = function(){
            questionNo = 5;
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
            questionNumber.innerHTML = "Question 5";
            question.innerHTML = "Lakshadweep was formerly known as?";
            optA.innerHTML = "Laccadive";
            optB.innerHTML = "Lacoadive";
            optC.innerHTML = "Loccodive";
            optD.innerHTML = "Lokadive";
        }   
    }
    if(questionNo == 5){
        next.onclick = function(){
            questionNo = 6;
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
            questionNumber.innerHTML = "Question 6";
            question.innerHTML = "The islands form the _______ Union territory of India.";
            optA.innerHTML = "Largest";
            optB.innerHTML = "Smallest";
            optC.innerHTML = "2nd Smallest";
            optD.innerHTML = "None of the above";
        }
    }
    if(questionNo == 6){
        next.onclick = function(){
            questionNo = 7;
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
            questionNumber.innerHTML = "Question 7";
            question.innerHTML = "The lagoon area of Lakshadweep cover about?";
            optA.innerHTML = "3,900 km²";
            optB.innerHTML = "4,500 km²";
            optC.innerHTML = "4,800 km²";
            optD.innerHTML = "4,200 km²";
        }
    }
    if(questionNo == 7){
        next.onclick = function(){
            questionNo = 8;
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
            questionNumber.innerHTML = "Question 8";
            question.innerHTML = "The Territorial Waters area of Lakshadweep covers about?";
            optA.innerHTML = "25,000 km²";
            optB.innerHTML = "15,000 km²";
            optC.innerHTML = "20,000 km²";
            optD.innerHTML = "30,000 km²";
        }
    }
    if(questionNo == 8){
        next.onclick = function(){
            questionNo = 9;
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
            questionNumber.innerHTML = "Question 9"
            question.innerHTML = "The Exclusive Economic Zone area of Lakshadweep covers about?";
            optA.innerHTML = "4,00,000 km²";
            optB.innerHTML = "3,50,000 km²";
            optC.innerHTML = "4,50,000 km²";
            optD.innerHTML = "3,00,000 km²";
        }
    }
    if(questionNo == 9){
        next.onclick = function(){
            questionNo = 10;
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
            questionNumber.innerHTML = "Question 10";
            question.innerHTML = "Lakshadweep forms a single Indian district with _______ sub-divisions.";
            optA.innerHTML = "8";
            optB.innerHTML = "14";
            optC.innerHTML = "17";
            optD.innerHTML = "10";
        }
    }
    if(questionNo == 10){
        next.onclick = function(){
            questionNo = 11;
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
            questionNumber.innerHTML = "Question 11";
            question.innerHTML = "Archaeological evidence supports the existence of human settlement on Lakshadweep around ________ BC.";
            optA.innerHTML = "1400";
            optB.innerHTML = "1700";
            optC.innerHTML = "1500";
            optD.innerHTML = "1600";
        }   
    }
    if(questionNo == 11){
        next.onclick = function(){
            questionNo = 12;
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
            questionNumber.innerHTML = "Question 12";
            question.innerHTML = "The Muslim missionaries arrived lakshadweep around ______ century.";
            optA.innerHTML = "9ᵗʰ";
            optB.innerHTML = "7ᵗʰ";
            optC.innerHTML = "5ᵗʰ";
            optD.innerHTML = "4ᵗʰ";
        }
    }
    if(questionNo == 12){
        next.onclick = function(){
            questionNo = 13;
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
            questionNumber.innerHTML = "Question 13";
            question.innerHTML = "The Portuguese arrived around Lakshadweep around ______.";
            optA.innerHTML = "1498";
            optB.innerHTML = "1484";
            optC.innerHTML = "1521";
            optD.innerHTML = "1509";
        }
    }
    if(questionNo == 13){
        next.onclick = function(){
            questionNo = 14;
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
            questionNumber.innerHTML = "Question 14";
            question.innerHTML = "The Portuguese were upstaged by ______ in Lakshadweep.";
            optA.innerHTML = "1490";
            optB.innerHTML = "1520";
            optC.innerHTML = "1514";
            optD.innerHTML = "1545";
        }
    }
    if(questionNo == 14){
        next.onclick = function(){
            questionNo = 15;
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
            questionNumber.innerHTML = "Question 15";
            question.innerHTML = "Lakshadweep was formed on which year?";
            optA.innerHTML = "1947";
            optB.innerHTML = "1956";
            optC.innerHTML = "1962";
            optD.innerHTML = "1968";
        }
    }
    if(questionNo == 15){
        next.onclick = function(){
            questionNo = 16;
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
            questionNumber.innerHTML = "Question 16";
            question.innerHTML = "________ of the islands of Lakshadweep are inhabited.";
            optA.innerHTML = "Eight";
            optB.innerHTML = "Five";
            optC.innerHTML = "Ten";
            optD.innerHTML = "Six";
        }
    }
    if(questionNo == 16){
        next.onclick = function(){
            questionNo = 17;
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
            questionNumber.innerHTML = "Question 17";
            question.innerHTML = "At the 2011 Indian census, the population of the Union territory was?";
            optA.innerHTML = "64,473";
            optB.innerHTML = "67,251";
            optC.innerHTML = "60,342";
            optD.innerHTML = "61,986";
        }
    }
    if(questionNo == 17){
        next.onclick = function(){
            questionNo = 18;
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
            questionNumber.innerHTML = "Question 18";
            question.innerHTML = "According to the 2011 census, Lakshadweep has a Area rank of?";
            optA.innerHTML = "30ᵗʰ";
            optB.innerHTML = "28ᵗʰ";
            optC.innerHTML = "34ᵗʰ";
            optD.innerHTML = "36ᵗʰ";
        }
    }
    if(questionNo == 18){
        next.onclick = function(){
            questionNo = 19;
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
            questionNumber.innerHTML = "Question 19";
            question.innerHTML = "According to the 2011 census, Lakshadweep has a population density of?";
            optA.innerHTML = "2,500/km²";
            optB.innerHTML = "2,000/km²";
            optC.innerHTML = "1,000/km²";
            optD.innerHTML = "1,500/km²";
        }
    }
    if(questionNo == 19){
        next.onclick = function(){
            questionNo = 20;
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
            questionNumber.innerHTML = "Question 20";
            question.innerHTML = "Archaeological evidence suggests that Buddhism prevailed in Lakshadweep during ______ century AD.";
            optA.innerHTML = "Eight";
            optB.innerHTML = "Fourth";
            optC.innerHTML = "Fifth";
            optD.innerHTML = "Sixth";
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