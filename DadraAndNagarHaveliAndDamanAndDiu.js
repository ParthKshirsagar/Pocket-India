var database = firebase.database();
var state = 0;
var questionNo = 0;
var i = 0;

var questionNumber = document.getElementById("question-no");
var question = document.getElementById("question");
var optA = document.getElementById("opt-A");
var optB = document.getElementById("opt-B");
var optC = document.getElementById("opt-C");
var optD = document.getElementById("opt-D"); 
var next = document.getElementById("next");
var all1 = document.getElementById("all");
var all2 = document.getElementById("all2");
var level = 4;

var questions = ["Nagar Haveli is wedged between Maharastra and?", "Dadra is ____ km north-west to the Nagar Haveli.", "What is the capital of Dadra and Nagar Haveli?", "Dadra and Nagar Haveli was established in which year?", "The area of Dadra and Nagar Haveli and Daman and diu is spread over?", "Dadra and Nagar Haveli comprises _____ separate geographical units.", "The towns of Dadra and Silvassa lie on the _____ bank of the Daman Ganga river.", "Dadra and Nagar Haveli ranks _____ in area among the Union Territories.", "Dadra and Nagar Haveli ranks _____ in area including states.", "______ is a small enclave village belonging to Gujrat that is located within Nagar Haveli.", "Vapi railway station is the nearest, _____ km north-west of Silvassa.", "Bombay is approximately _____ km from Silvassa.", "Surat city is about _____ km away from Silvassa.", "The river DamanGanga has _____ tributaries.", "About ____ % of the land of Dadra & Nagar Haveli is under forest cover.", "The reserved forest cohis territory constitutes about ____ % of the total geographical area of Dadra & Nagar Haveli.", "The protected forests constitute ____ % of the total land area.", "According to the satellite data taken in 2008, Dadra & Nagar Haveli has roughly about ____ km² of moderately dense forest.", "Which country ruled over Dadra and Nagar Haveli before it was handed over to India?", "Karaikal Ammaiyar Temple is located in which state?", "The Diu fort was build by?", "Which is one of the official languages of Daman and Diu", "Who is the Lieutenant Governor & Andministrator of Dadra and Nagar Haveli and Daman and Diu?", "The battle of Diu was fought in which year?", "What is the literacy rate of Silvassa?", "What is the approx population of Dadra and Nagar Haveli and Daman and Diu?", "When was Dadra and Nagar Haveli and Daman and Diu merged?", "Which one of the following is the judiciary of Dadra and Nagar Haveli and Daman and Diu?", "In which year, Portuguese were allowed to collect revenue in Dadra and Nagar Haveli as a friendship treaty with Marathas?"];
var optAs = ["Gujrat", "4", "Silvassa", "1953", "603 km²", "5", "West", "4th", "36th", "Suchi", "26", "180", "149", "Four", "47%", "45%", "2.45%", "123", "England", "Puducherry", "Portuguese", "Malayalam", "Shri Anil Baijal", "1508", "70%", "5,86,000", "2017", "Bombay High court", "1750"];
var optBs = ["Odisha", "1", "Amli", "1948", "491 km²", "1", "North", "6th", "29th", "Maghval", "14", "174", "140", "One", "38%", "30%", "3.12%", "114", "France", "Tamil Nadu", "Mughal", "Tamil", "Shri Praful Patel", "1689", "84%", "4,87,000", "2018", "Gujrat High court", "1800"];
var optCs = ["West Bengal", "6", "Vapi", "1958", "475 km²", "2", "South", "2nd", "30th", "Thane", "18", "186", "137", "Two", "43%", "40%", "1.61%", "108", "Portugal", "Kerala", "British", "Gujrati", "Shri Radha Krishna Mathur", "1765", "91%", "5,22,000", "2021", "Madhya Pradesh High court", "1779"];
var optDs = ["Rajasthan", "3", "Dadra", "1962", "482 km²", "3", "East", "5th", "32nd", "Ramnagar", "22", "170", "135", "Three", "40%", "35%", "4.57%", "120", "Spain", "Karnataka", "Sultan of Delhi", "Telugu", "Shri Manoj Sinha", "1509", "98%", "4,95,000", "2020", "None of the above", "1815"];

function setup(){
    getLevels();
    console.log(username);
}

function draw(){
    draw2();
    if(correct != 0 && userLevels == 4){
        sne.onclick = function(){
            updateLevels(5);
            setTimeout(function(){
                window.location.href = "Main.html";
            }, 1000);
        }
    }
    if(userLevels > 4 && correct != null){
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
    if(i == questions.length){
        next.innerHTML = "Finish";
        next.onclick = function(){
            all1.style.display = "none";
            incorrectNo.innerHTML = incorrect;
            correctNo.innerHTML = correct;
            resultBox.style.display = "block";
            percentage.innerHTML = `${Math.round((correct/30)*100)}%`;
        }
    }
    if(i<questions.length){
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
                question.innerHTML = questions[i];
                optA.innerHTML = optAs[i];
                optB.innerHTML = optBs[i];
                optC.innerHTML = optCs[i];
                optD.innerHTML = optDs[i];
                i++;
        }
    }
    if(questionNo == 0 || questionNo == 7 || questionNo == 12 || questionNo == 16 || questionNo == 17 || questionNo == 20 || questionNo == 23 || questionNo == 26 || questionNo == 30){
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
    if(questionNo == 2 || questionNo == 4 || questionNo == 6 || questionNo == 9 || questionNo == 13 || questionNo == 18 || questionNo == 21 || questionNo == 22 || questionNo == 27 || questionNo == 29){
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
    if(questionNo == 3 || questionNo == 8 || questionNo == 11 || questionNo == 14 || questionNo == 19 || questionNo == 24){
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
    if(questionNo == 5 || questionNo == 10 || questionNo == 15 || questionNo == 25 || questionNo == 28){
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