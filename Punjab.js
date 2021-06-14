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

var questions = ["What was the total population of Punjab in the year 2011?", "Which one is the largest city of Punjab?", "What is the total population density of Punjab?", "What is the area of Punjab?", "When was Akal Takht built?", "What is the greek name of river Jhelum?", "Whose bani is included in Shri Guru Granth Sahib?", "Who is propounder of Miri and Piri?", "Chitta Lahu is written by?", "What is the script in which Dasam granth is written?", "In old Punjab, Sun-Temple was situated at?", "Jhoomar dance belongs to?", "Punjab leads in the production of which citrus fruit?", "What is operation flood related to?", "What was Sindh hilly terrain called in the Puranic Period?", "Where are the masterpieces of Gandhar style preserved?", "Where is Chhatbir zoological Park?", "What are the fodder crops of Punjab?", "Which river flows through Malwa regions?", "Sirhind Canal is connected with river ______.", "In which districts are the chos situated?", "Which type of soil is predominant in Doab regions in Punjab?", "What is the net sown area of Punjab?", "Bhakra Dam is situated at which river?", "The Confluence of Satluj and Beas is at?", "Bachitra Natak is autobiography of which of the following guru?", "Town of Taran Tarn was founded by?", "Which guru is known as Hind di Chader", "Which guru wrote Adi Granth", "Who laid the foundation of Bhangi Misl?", "In which fair are donkeys worshipped?", "Which dance is only performed by females?", "The Child hood name of Guru Ram Das was?", "Who wrote Dilli Diyan Galiyan?"];
var optAs = ["27,704,236", "Amritsar", "482/sq Km", "50,632 km²", "1606", "Hydaspes", "Shah Hussain", "Guru Hargobind ji", "Gurbax Singh", "Devnagri", "Hoshiarpur", "Lahore", "Orange", "Fish production", "Vahlik", "Chandigarh", "Patiala", "Barley and gram", "Chenab", "Satluj", "Hoshiarpur", "Laterite soil", "80%", "Beas", "Nangal", "Guru Hargobind Singh ji", "Guru Amar Das ji", "Guru Teg Bahadur ji", "Guru Hargobind ji", "Jai Singh", "Kurali da mela", "Julli", "Lehna", "Amrita Pritam"];
var optBs = ["19,871,392", "Ferozepur", "550/sq Km", "50,840 km²", "1609", "Hydroatis", "Pilu", "Guru Nanak Dev ji", "Khuswant Singh", "Urdu", "Amritsar", "Amritsar", "Lemon", "Flood control", "Gandhar", "Ferozepur", "Sangrur", "Bajra and jowar", "Sutlej", "Beas", "Moga", "Red Soil", "93%", "Saltuj", "Roopnagar", "Guru Angad Dev ji", "Guru Arjun Dev ji", "Guru Nanak dev ji", "Guru Gobind Singh ji", "Hari Singh", "Jagraon di roshini", "Jhumar", "Jetha", "Puran Singh"];
var optCs = ["22,412,782", "Ludhiana", "503/sq Km", "50,840 km²", "1607", "Hyphasis", "Bhagat Chajju", "Guru Teg Bahadurji", "Shiv kumar Batalavi", "Gurmukhi", "Peshawar", "Sandalbar", "Grapes", "Milk Production", "Vahika", "Jalandhar", "Mohali", "Maize and Jowar", "Ghaggar", "Ghaggar", "Gurdaspur", "Alluvial Soil", "83%", "Ravi", "Sirhind", "Guru Gobind Singh ji", "Guru Ram Das Ji", "Guru Hargodind ji", "Guru Angad dev ji", "Phoola Singh", "Jarag da mel", "Sammi", "Hari Das", "Nanak Singh"];
var optDs = ["30,967,352", "Jalandhar", "450/sq Km", "42,480 Km²", "1608", "Hesidros", "Bhagat Kabir", "Guru Gobind Singh ji", "Nanak Singh", "Persian", "Multan", "Mintgumri", "Kinnow", "Kinnow production", "Panch Nad", "Ludhiana", "Roopnagar", "None of the above", "Ravi", "Ravi", "Pathankot", "Black Soil", "90%", "Chenab", "Harika Patan", "Guru Nanak Dev ji", "Guru Angad dev ji", "Guru Arjan dev ji", "Guru Arjan dev ji", "Kapoor Singh", "Chappar da mela", "Luddi", "Suraj mal", "Dalip Kaur Tiwana"];
console.log(questions.length);
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
    if(questionNo == 3 || questionNo == 11 || questionNo == 13 || questionNo == 15 || questionNo == 18 || questionNo == 23 || questionNo == 24 || questionNo == 27 || questionNo == 32 || questionNo == 33){
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
    if(questionNo == 4 || questionNo == 6 || questionNo == 16 || questionNo == 19 || questionNo == 20 || questionNo == 25 || questionNo == 28 || questionNo == 31 || questionNo == 34){
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
    if(questionNo == 8 || questionNo == 10 || questionNo == 12 || questionNo == 14 || questionNo == 26 || questionNo == 30){
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
    if(questionNo == 0 || questionNo == 2 || questionNo == 5 || questionNo == 7 || questionNo == 9 || questionNo == 17 || questionNo == 21 || questionNo == 22 || questionNo == 29 || questionNo == 35){
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