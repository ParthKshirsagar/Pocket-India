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

var questions = ["Which is the largest Union Territory in India", "Which one is a cold desert of India?", "Which one is the summer capital of Ladakh?", "Which one is the winter capital of Ladakh?", "What is the name of the most important river in Ladakh?", "What are the official languages of Ladakh?", "Which range surround Ladakh in the North?", "Which range surround Ladakh in the South?", "Which is the highest mountain in Ladakh?", "Which is the Highest motorable road in the World?", "Which is the Second Highest motorable road in the World?", "How many districts are there in Ladakh?", "What is the area of Ladakh?", "Which is the highest inhabited region in Ladakh?", "What is the name of the largest lake in Ladakh?", "What is the lenght of Pangong Lake?", "What is the name of High Court of Ladakh?", "Which is the largest town in Ladakh?", "Which is the highest town in Ladakh?", "When did Ladakh became a union territory?", "Which is the largest circulated newspaper of Ladakh", "Which is the domestic airport of Ladakh?", "What is the name of the first University of Ladakh?", "Who is the first governor of Ladakh?", "When were Elections held for the first time in Ladakh?", "How many seats does Ladakh have in Legislative Assembly?", "Which is the World's highest salt water lake?", "Which chemical element was found in Ladakh?", "Which Article is related to the making of Ladakh a Union Territory?", "Which country surrounds Ladakh?", "What was Ladakh before Union Territory?", "Which river is called the backbone of Ladakh?", "What is the elevation of Likir Monastery?", "Which lake in Ladakh shares border with China?"];
var optAs = ["Ladakh", "Atacama Desert", "Kargil", "Leh", "Indus River", "Kashmiri,English", "Himalayas", "Aravali Range", "Stok Kangri", "Shyok - DBO", "Namika La", "10", "57,384 km²", "Kargil", "Pangong Lake", "124 km", "Punjab High Court", "Leh", "Kargil", "2020", "Times of India", "Jammu Airport", "University of Ladakh", "Shri Praful Patel", "2000", "10", "Pangong Lake", "Arsenic", "Article 324", "China", "Part of China", "Tso Kar", "3,000 m", "Pangong Tso Lake"];
var optBs = ["Chandigarh", "Ladakh", "Markha Valley", "Kargil", "Shyok River", "Kashmiri,Hindi", "Aravali Range", "Zanskar Range", "Ghent Kangri", "Sasoma - Saseria", "Fotu La", "5", "59,146 km²", "Leh", "Tso Moriri", "132 km", "Jammu & Kashmir High Court", "Kargil", "Stok", "2019", "The India Express", "Kargil Airport", "Central University of Jammu", "Shri Anil Baijal", "2003", "4", "Tso Moriri", "Barium", "Article 243", "Nepal", "Part of Nepal", "Pangong Lake", "4,000 m", "Kyagar Tso"];
var optCs = ["Puducherry", "Gobi Desert", "Leh", "Nubra Valley", "Zanskar River", "Hindi,English", "Zanskar Range", "Karakoram Range", "Nun", "Khardung La", "Lungalacha La", "2", "52,738 km²", "Nubra Valley", "Tso Kar", "143 km", "Uttarakhand High Court", "Karzok", "Karzok", "2017", "Hindustan Times", "Kushok Bakula Rimpochhe Airport", "Baba Ghulam Shah Badhah University", "Shri Manoj Sinha", "1995", "11", "Bangong Co", "Americium", "Article 240", "Pakistan", "Part of Jammu & Kashmir", "Tso Moriri", "2,500 m", "Mirpal Tso"];
var optDs = ["Jammu & Kashmir", "Great Basin", "Nubra Valley", "Markha Valley", "Suru River", "Marathi,Gujrati", "Karakoram Range", "Pir Panjal Range", "K12", "Harong - Chushul", "Taglang La", "8", "61,284 km²", "Rangdum", "Kyagar Tso", "134 km", "Sikkim High Court", "Stok", "Kargil", "2015", "Daily Excelsior", "Srinagar Airport", "The Cluster University of Jammu", "Shir Radha Krishna Mathur", "2007", "9", "Tso Kar", "Uranium", "Article 364", "Afghanistan", "Parth of Pakistan", "Chagar Tso", "3,700 m", "Tso Kar"];

function draw(){
    draw2()
    if(i == questions.length){
        next.innerHTML = "Finish";
        next.onclick = function(){
            console.log("congrats");
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
    if(questionNo == 4 || questionNo == 7 || questionNo == 11 || questionNo == 13 || questionNo == 20 || questionNo == 23 || questionNo == 26 || questionNo == 30 || questionNo == 32){
        optA.onclick = function(){
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
        }
        optB.onclick = function(){
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
        }
        optC.onclick = function(){
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
        }
        optD.onclick = function(){
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
        }
    }
    if(questionNo == 2 || questionNo == 6 || questionNo == 10 || questionNo == 16 || questionNo == 19 || questionNo == 24 || questionNo == 28 || questionNo == 31 || questionNo == 35){
        optA.onclick = function(){
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
        }
        optC.onclick = function(){
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
        }
        optB.onclick = function(){
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
        }
        optD.onclick = function(){
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
        }
    }
    if(questionNo == 3 || questionNo == 5 || questionNo == 9 || questionNo == 14 || questionNo == 18 || questionNo == 21 || questionNo == 27 || questionNo == 33){
        optA.onclick = function(){
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
        }
        optB.onclick = function(){
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
        }
        optC.onclick = function(){
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
        }
        optD.onclick = function(){
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
        }
    }
    if(questionNo == 0 || questionNo == 8 || questionNo == 12 || questionNo == 15 || questionNo == 17 || questionNo == 22 || questionNo == 25 || questionNo == 29 || questionNo == 34){
        optA.onclick = function(){
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
        }
        optB.onclick = function(){
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
        }
        optC.onclick = function(){
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
        }
        optD.onclick = function(){
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