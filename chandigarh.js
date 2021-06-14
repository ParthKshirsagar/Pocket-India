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

function setup(){
    console.log(username);
    sne.onclick = function(){ 
        updateLevels(3);
        setTimeout(function(){
            window.location.href = "Main.html";
        }, 1000);
    }
}

function draw(){
    draw2()
    if(questionNo == 1 || questionNo == 4 || questionNo == 8 || questionNo == 9 || questionNo == 14 || questionNo == 22 || questionNo == 23){
        optA.onclick = function(){
            questionNo = null;
            optA.onclick = function(){};
            optB.onclick = function(){};
            optC.onclick = function(){};
            optD.onclick = function(){};
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
        }
        optB.onclick = function(){
            questionNo = null;
            optB.onclick = function(){};
            optA.onclick = function(){};
            optA.onclick = function(){};
            optA.onclick = function(){};
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
        }
        optC.onclick = function(){
            questionNo = null;
            optC.onclick = function(){};
            optA.onclick = function(){};
            optA.onclick = function(){};
            optA.onclick = function(){};
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
        }
        optD.onclick = function(){
            questionNo = null;
            optD.onclick = function(){};
            optA.onclick = function(){};
            optA.onclick = function(){};
            optA.onclick = function(){};
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
        }
    }
    if(questionNo == 2 || questionNo == 5 || questionNo == 10 || questionNo == 13 || questionNo == 16 || questionNo == 17){
        optA.onclick = function(){
            questionNo = null;
            optA.onclick = function(){};
            optA.onclick = function(){};
            optA.onclick = function(){};
            optA.onclick = function(){};
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
        }
        optB.onclick = function(){
            questionNo = null;
            optB.onclick = function(){};
            optA.onclick = function(){};
            optA.onclick = function(){};
            optA.onclick = function(){};
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
        }
        optC.onclick = function(){
            questionNo = null;
            optC.onclick = function(){};
            optA.onclick = function(){};
            optA.onclick = function(){};
            optA.onclick = function(){};
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
            correct++
        }
        optD.onclick = function(){
            questionNo = null;
            optD.onclick = function(){};
            optA.onclick = function(){};
            optA.onclick = function(){};
            optA.onclick = function(){};
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
        }
    }
    if(questionNo == 3 || questionNo == 6 || questionNo == 11 || questionNo == 12 || questionNo == 18 || questionNo == 21 || questionNo == 24){
        optA.onclick = function(){
            questionNo = null;
            optA.onclick = function(){};
            optA.onclick = function(){};
            optA.onclick = function(){};
            optA.onclick = function(){};
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
        }
        optC.onclick = function(){
            questionNo = null;
            optC.onclick = function(){};
            optA.onclick = function(){};
            optA.onclick = function(){};
            optA.onclick = function(){};
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
        }
        optB.onclick = function(){
            questionNo = null;
            optB.onclick = function(){};
            optA.onclick = function(){};
            optA.onclick = function(){};
            optA.onclick = function(){};
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
        }
        optD.onclick = function(){
            questionNo = null;
            optD.onclick = function(){};
            optA.onclick = function(){};
            optA.onclick = function(){};
            optA.onclick = function(){};
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
        }
    }
    if(questionNo == 7 || questionNo == 15 || questionNo == 19 || questionNo == 20){
        optA.onclick = function(){
            questionNo = null;
            optA.onclick = function(){};
            optA.onclick = function(){};
            optA.onclick = function(){};
            optA.onclick = function(){};
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
        }
        optB.onclick = function(){
            questionNo = null;
            optB.onclick = function(){};
            optA.onclick = function(){};
            optA.onclick = function(){};
            optA.onclick = function(){};
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
        }
        optC.onclick = function(){
            questionNo = null;
            optC.onclick = function(){};
            optA.onclick = function(){};
            optA.onclick = function(){};
            optA.onclick = function(){};
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
        }
        optD.onclick = function(){
            questionNo = null;
            optD.onclick = function(){};
            optA.onclick = function(){};
            optA.onclick = function(){};
            optA.onclick = function(){};
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
        }
    }
    if(questionNo == 25){
        optA.onclick = function(){
            questionNo = null;
            optA.onclick = function(){};
            optA.onclick = function(){};
            optA.onclick = function(){};
            optA.onclick = function(){};
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
        }
        optB.onclick = function(){
            questionNo = null;
            optB.onclick = function(){};
            optA.onclick = function(){};
            optA.onclick = function(){};
            optA.onclick = function(){};
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
        }
        optC.onclick = function(){
            questionNo = null;
            optC.onclick = function(){};
            optA.onclick = function(){};
            optA.onclick = function(){};
            optA.onclick = function(){};
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
        }
        optD.onclick = function(){
            questionNo = null;
            optD.onclick = function(){};
            optA.onclick = function(){};
            optA.onclick = function(){};
            optA.onclick = function(){};
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
        }
        next.innerHTML = "Finish";
        next.onclick = function(){
            all1.style.display = "none";
            incorrectNo.innerHTML = incorrect;
            correctNo.innerHTML = correct;
            resultBox.style.display = "block";
            if(correct == 7){
                percentage.innerHTML = "28%";
            }
            else{
                percentage.innerHTML = `${(correct/25)*100}%`;
            }
            
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
            question.innerHTML = "In which year, Chandigarh was declared as Union Territory?";
            optA.innerHTML = "1961";
            optB.innerHTML = "1964";
            optC.innerHTML = "1966";
            optD.innerHTML = "1970";
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
            questionNumber.innerHTML = "Question 3"
            question.innerHTML = "Which one is the official language of Chandigarh?";
            optA.innerHTML = "English";
            optB.innerHTML = "Hindi";
            optC.innerHTML = "Punjabi";
            optD.innerHTML = "Haryanvi";
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
            questionNumber.innerHTML = "Question 4"
            question.innerHTML = "In which year, Chandigarh was declared as the first smoke-free city of India?";
            optA.innerHTML = "2005";
            optB.innerHTML = "2007";
            optC.innerHTML = "2009";
            optD.innerHTML = "2010";
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
            questionNumber.innerHTML = "Question 5"
            question.innerHTML = "Chandigarh is bordered by the state of Punjab to the?";
            optA.innerHTML = "West";
            optB.innerHTML = "South";
            optC.innerHTML = "North";
            optD.innerHTML = "East";
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
            questionNumber.innerHTML = "Question 6"
            question.innerHTML = "Chandigarh is bordered by the state of Haryana to the?";
            optA.innerHTML = "East";
            optB.innerHTML = "North";
            optC.innerHTML = "South";
            optD.innerHTML = "West";
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
            questionNumber.innerHTML = "Question 7"
            question.innerHTML = "Chandigarh is located ______ km north of New Delhi.";
            optA.innerHTML = "253";
            optB.innerHTML = "248";
            optC.innerHTML = "245";
            optD.innerHTML = "260";
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
            questionNumber.innerHTML = "Question 8"
            question.innerHTML = "Chandigarh is located ______ km south-east of Amritsar.";
            optA.innerHTML = "236";
            optB.innerHTML = "229";
            optC.innerHTML = "214";
            optD.innerHTML = "220";
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
            question.innerHTML = "Chandigarh is located ______ km south-west of Shimla.";
            optA.innerHTML = "128";
            optB.innerHTML = "116";
            optC.innerHTML = "110";
            optD.innerHTML = "120";
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
            questionNumber.innerHTML = "Question 10"
            question.innerHTML = "The master plan of Chandigarh transformed from earlier plans created by the Polish architect named?";
            optA.innerHTML = "Albert Mayer";
            optB.innerHTML = "Le Corbusier";
            optC.innerHTML = "Maciej Nowicki";
            optD.innerHTML = "Maxwell Fry";
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
            questionNumber.innerHTML = "Question 11"
            question.innerHTML = "In ______, an article published by BBC named Chandigarh as one of the perfect cities of the world in terms of architecture, cultural growth and modernization.";
            optA.innerHTML = "2015";
            optB.innerHTML = "2013";
            optC.innerHTML = "2012";
            optD.innerHTML = "2014";
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
            questionNumber.innerHTML = "Question 12"
            question.innerHTML = "Chandigarh's Capitol Complex was in July ______ declared by UNESCO as World Heritage at the 40th session of World Heritage Conference held in Istanbul.";
            optA.innerHTML = "2016";
            optB.innerHTML = "2014";
            optC.innerHTML = "2013";
            optD.innerHTML = "2012";
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
            questionNumber.innerHTML = "Question 13"
            question.innerHTML = "In ______, a survey by LG Electronics, ranked Chandigarh as the happiest city in India over the happiness index.";
            optA.innerHTML = "2014";
            optB.innerHTML = "2012";
            optC.innerHTML = "2015";
            optD.innerHTML = "2013";
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
            questionNumber.innerHTML = "Question 14"
            question.innerHTML = "The Metropolitan of Chandigarh-Mohali-Panchakula collectively forms a Tri-city, with a combined population of over _____ million.";
            optA.innerHTML = "3";
            optB.innerHTML = "2";
            optC.innerHTML = "1";
            optD.innerHTML = "4";
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
            questionNumber.innerHTML = "Question 15"
            question.innerHTML = "Chandigarh Capitol Complex, located in the ________ of Chandigarh city in India.";
            optA.innerHTML = "Sector 3";
            optB.innerHTML = "Sector 5";
            optC.innerHTML = "Sector 2";
            optD.innerHTML = "Sector 1";
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
            questionNumber.innerHTML = "Question 16"
            question.innerHTML = "Chandigarh Capitol Complex is spread over an area of around ______ acres.";
            optA.innerHTML = "170";
            optB.innerHTML = "130";
            optC.innerHTML = "100";
            optD.innerHTML = "150";
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
            questionNumber.innerHTML = "Question 17"
            question.innerHTML = "Chandigarh Capitol Complex comprises of _____ buildings.";
            optA.innerHTML = "5";
            optB.innerHTML = "2";
            optC.innerHTML = "3";
            optD.innerHTML = "4";
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
            questionNumber.innerHTML = "Question 18"
            question.innerHTML = "Chandigarh Capitol Complex comprises of _____ monuments.";
            optA.innerHTML = "3";
            optB.innerHTML = "1";
            optC.innerHTML = "5";
            optD.innerHTML = "2";
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
            questionNumber.innerHTML = "Question 19"
            question.innerHTML = "Palace of Assembly is a legislative assembly build around?";
            optA.innerHTML = "1940";
            optB.innerHTML = "1935";
            optC.innerHTML = "1945";
            optD.innerHTML = "1950";
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
            questionNumber.innerHTML = "Question 20"
            question.innerHTML = "Chandigarh Palace of Assembly building was designated as a UNESCO World Heritage Site in which year?";
            optA.innerHTML = "2015";
            optB.innerHTML = "2013";
            optC.innerHTML = "2014";
            optD.innerHTML = "2016";
        }
    }
    if(questionNo == 20){
        next.onclick = function(){
            questionNo = 21;
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
            questionNumber.innerHTML = "Question 21"
            question.innerHTML = "In ______, chairs from the Chandigarh assembly building were auctioned in London.";
            optA.innerHTML = "2010";
            optB.innerHTML = "2013";
            optC.innerHTML = "2012";
            optD.innerHTML = "2011";
        }
    }
    if(questionNo == 21){
        next.onclick = function(){
            questionNo = 22;
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
            questionNumber.innerHTML = "Question 22"
            question.innerHTML = "Nek Chand started Rock Garden secretly in his spare time in?";
            optA.innerHTML = "1957";
            optB.innerHTML = "1950";
            optC.innerHTML = "1962";
            optD.innerHTML = "1965";
        }
    }
    if(questionNo == 22){
        next.onclick = function(){
            questionNo = 23;
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
            questionNumber.innerHTML = "Question 23"
            question.innerHTML = "The Rock Garden of Chandigarh is spread over an area of ______ acres.";
            optA.innerHTML = "45";
            optB.innerHTML = "40";
            optC.innerHTML = "30";
            optD.innerHTML = "35";
        }
    }
    if(questionNo == 23){
        next.onclick = function(){
            questionNo = 24;
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
            questionNumber.innerHTML = "Question 24"
            question.innerHTML = "The hidden Rock Garden was discovered by the authorities in?";
            optA.innerHTML = "1975";
            optB.innerHTML = "1970";
            optC.innerHTML = "1979";
            optD.innerHTML = "1977";
        }
    }
    if(questionNo == 24){
        next.onclick = function(){
            questionNo = 25;
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
            questionNumber.innerHTML = "Question 25"
            question.innerHTML = "In ______ the Rock Garden was inaugurated as a public space.";
            optA.innerHTML = "1971";
            optB.innerHTML = "1780";
            optC.innerHTML = "1974";
            optD.innerHTML = "1976";
        }
    }
    if(questionNo == 25){
        next.innerHTML ="Finish";
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