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

var questions = ["Which game was introduced by Manipur to the Europeans?", "Who was the last King of Manipur?", "In which year Manipur was established as separate state?", "What is the total number of districts in Manipur?", "Which one is the classical dance of Manipur?", "In which year, was the Manipur University established?", "In which year the Anglo-Manipur War was fought between British and Bir Tikendrajit?", "What is the total number of National Parks in Manipur?", "In which year, National Games were held in Manipur?", "Manipuri language was included in eighth schedule of Indian constitution in the year?", "Who was the commander of 1944 war in Manipur?", "Manipur State was created by which act of the Parliament?", "Which King signed the Treaty of Accession for merging Manipur into India?", "Which one is the largest district by area wise in Manipur", "Who is the first person from Manipur to received the Padma Shri Award?", "According to the 2011 census, the tribal population in Manipur is comprised of?", "When was Manipur unified with India?", "In which year, Manipur entered into a subsidiary alliance with the British Empire?", "In which city the the Maharaja of Manipur Bodhchandra signed the agreement for accession to merge Manipur with India?", "What is the total area of Manipur?", "Which one is recognised as the State bird of Manipur?", "Which one is recognised as the State animal of Manipur?", "What is the population density of Manipur in per Sq Km?", "Who was the first elected Chief Minister of Manipur?", "Who is the longest serving Chief Minister of Manipur?", "Which one is the highest peak in Manipur?", "What is the total number of elected members in Manipur Assembly?", "How many seats are reserved for Scheduled Tribes in the Manipur State Assembly?", "Which National Highway connects Manipur with the rest of the country?"];
var optAs = ["Cricket", "Raja Surchandra", "1972", "6", "Ras Lila", "1975", "1884", "1", "1992", "1991", "General Slim", "22nd Amendment Act", "Maharaja Nara Singh", "Churachandpur", "Maisnam Amubi Singh", "35%", "10th August 1947", "1816", "Delhi", "20,234 km²", "Surit", "Bharal", "82", "Mohammed Alimuddin", "Okram Ibobi Singh", "Mount Koubru", "53", "15", "NH-36"];
var optBs = ["Football", "Bodhchandra Singh", "1974", "7", "Bihu", "1977", "1891", "2", "1995", "1992", "General Ahmed", "23rd Amendment Act", "Churachandra Singh", "Ukhrul", "Ralengnao Khathing", "38%", "30th August 1947", "1820", "Guwahati", "22,327 km²", "Nongyeen", "Rucervus", "87", "Yangmasho Shaiza", "Radhabinod Koijam", "Shirui Kashong", "55", "16", "NH-38"];
var optCs = ["Polo", "Churachandra Singh", "1974", "11", "Jhumur Dance", "1980", "1901", "3", "1997", "1995", "General Karim", "25th Amendment Act", "Maharaja Budhachandra", "Tamenglong", "K. Binodini Devi", "41%", "15th January 1948", "1824", "Imphal", "23,987 km²", "Meitunga", "Sangai", "93", "Longjam Thambou Singh", "Raj Kumar Ranbir Singh", "Mount Tempü", "60", "18", "NH-39"];
var optDs = ["Rugby", "Kulachandra Singh", "1980", "16", "Sattriya dance", "1982", "1905", "5", "2000", "1997", "General Iqbal", "27th Amendment Act", "Kulachandra Singh", "Chandel", "Ratan Thiyam", "45%", "15th October 1949", "1826", "Shillong", "25,223 km²", "Langmeidong", "Lion", "102", "Mairembam Koireng Singh", "Rishang Keishing", "Cheirao Ching Peak", "62", "19", "NH-40"];
console.log(questions.length + 1);
console.log(optAs.length, optBs.length, optCs.length, optDs.length);

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
    if(questionNo == 2 || questionNo == 7 || questionNo == 10 || questionNo == 14 || questionNo == 17 || questionNo == 19 || questionNo == 23 || questionNo == 27 || questionNo == 28 || questionNo == 30){
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
    if(questionNo == 3 || questionNo == 8 || questionNo == 11 || questionNo == 16 || questionNo == 21 || questionNo == 22){
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
    if(questionNo == 0 || questionNo == 5 || questionNo == 13 || questionNo == 18 || questionNo == 20 || questionNo == 25 || questionNo == 29){
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
    if(questionNo == 4 || questionNo == 6 || questionNo == 9 || questionNo == 12 || questionNo == 15 || questionNo == 24 || questionNo == 26){
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