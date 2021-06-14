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

var questions = ["In which year the Madras State was renamed as Tamil Nadu?", "Who was the first Chief Minister after it was renamed as Tamil Nadu?", "Which one is recognized as state fruit in Tamil Nadu?", "Which one is the longest ruling dynasties in Tamil Nadu?", "How many UNESCO World Heritage Sites are located in Tamil Nadu?", "What is the total number of district in Tamil Nadu?", " Which one is the largest district by population in Tamil Nadu?", "Which one is the largest district by area wise in Tamil Nadu?", "Meenakshi Amman Temple is located in the bank of which river?", "On which day of the Pongal, the Jallikattu bull fight was played?", "Which temple has the longest corridor in India?", "Which one is the first regular newspaper in Tamil language?", "The Hindu newspaper was founded in the year?", "The first silent Tamil movie Keechaka Vadham was released in which year?", "The St. George Fort was built in which year?", "Tamil Nadu is a major producer of?", "Which one is the state bird of Tamil Nadu?", "V. O. Chidambaram founded the Swadeshi Steam Navigation Company to operate between Tuticorin and ______.", "In which district the Toda tribes found in?", "In which hill is the Killyur waterfall located?", "In which year was the Namakkal District formulated?", "Tirupur Kumaran died in which year?", "Kanchipuram Kailasanatha temple was built during the reign of?", "The Chola dynasty was an ancient Tamil Kingdom along the banks of which river?", "Udayagiri Fort is located in?", "Santhanur Dam is constructed across which river?", "How many major harbours are there in Tamil Nadu?", "The 'Madura Mission' was established in which year?", "Which place is known as the egg basket of Tamil Nadu?", "Who built the Sittanavasal Cave temple", "When was tamil used as a instructional language in Tamil Nadu's colleges?", "Which of the following was called as 'Dandi of Tamil Nadu'?", "Who first translated Mahabharata into Tamil", "The earliest and greatest Tamil epic 'Silappatikaram' was written by?", "Which of the following is the author of Tamil Ramayana?", "For which one of the following items, Tirupur is well-known as a huge exporter to many parts of the world?", "The Madras Native Association was established in which year?", "The author of the book 'TAMIL NADU : The Land of Vedas' is?", "Tamil Isai Sangam was established at Madras by?"];
var optAs = ["1956", "M. Karunanidhi", "Jackfruit", "Pandyan Dynasty", "5", "28", "Salem", "Viluppuram", "Kaveri River", "Bhogi", "Ramanathaswamy Temple", "The Hindu", "1872", "1914", "1644", "Sunflower", "Peacock", "Sri Lanka", "Coimbatore", "Shervaroy", "1990", "1928", "Mahendravarman", "Kaveri", "Ramnad", "Krishna River", "2", "1592", "Virudhunagar", "Pallavas", "1956", "Thirunelveli", "Perundevanar", "Tiruvalluvara", "Pampa", "Knitted garments", "1835", "R. Nagaswamy", "Sir R.K. Shanmugam Chettiar"];
var optBs = ["1961", "C. N. Annadurai", "Mango", "Chola Dynasty", "6", "32", "Vellore", "Tiruvannamalai", "Cheyyar River", "Thai Pongal", "Meenakshi Sundareswarar", "Bharat Devi", "1878", "1915", "1665", "Onion", "Emerland Dove", "Singapore", "Erode", "Niligiris", "1997", "1930", "Ranga Pataka", "Krishna", "Tirunelveli", "Kaveri River", "3", "1600", "Salem", "Cholas", "1962", "Vedaranyam", "Kamban", "Sattanar", "Ponna", "Leather goods", "1849", "R. Krishnamoorthy", "Sir Annamalai Chettiar"];
var optCs = ["1966", "M. G. Ramachandran", "Banana", "Chera Dynasty", "8", "34", "Tiruvannamalai", "Tirupur", "Bhavani River", "Maatu Pongal", "Brihadeeswarar Temple", "Swadesamitran", "1884", "1918", "1692", "Cotton", "Parrot", "Mauritius", "The Nilgiris", "Kodaikanal", "2000", "1931", "Narasimha I", "Godavari", "Kanniyakumari", "Pennaiyar River", "4", "1601", "Erode", "Pandyas", "1968", "Mahabalipuram", "Sundaramurthi", "Kapilar", "Ranna", "Gems and jewellery", "1862", "R. Nagarajan", "Sir M.A. Muthaiah Chettiar"];
var optDs = ["1969", "Janaki Ramachandran", "Orange", "Satavahana Dynasty", "11", "38", "Chennai", "Pudukkottai", "Vaigai River", "Kaanum Pongal", "Kapaleeshwarar Temple", "Dina Thanthi", "1890", "1921", "1713", "Sugarcane", "Kuyil", "Malaysia", "Kanyakumari", "Agathiyar", "2002", "1932", "Rajasimha", "Mahanadi", "Sivaganga", "Vaigai River", "5", "1606", "Namakkal", "Cheras", "1976", "Cuddalore", "Bharavi", "Ilango Adigal", "Kamban", "Handicrafts", "1866", "R. Naganathan", "L.P. Ramanathan Chettiar"];
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
    if(questionNo == 6 || questionNo == 11 || questionNo == 13 || questionNo == 15 || questionNo == 20 || questionNo == 26 || questionNo == 27 || questionNo == 32){
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
    if(questionNo == 3 || questionNo == 5 || questionNo == 7 || questionNo == 14 || questionNo == 18 || questionNo == 22 || questionNo == 28 || questionNo == 33 || questionNo == 38 || questionNo == 40){
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
    if(questionNo == 0 || questionNo == 2 || questionNo == 8 || questionNo == 10 || questionNo == 17 || questionNo == 23 || questionNo == 24 || questionNo == 30 || questionNo == 29 || questionNo == 35 || questionNo == 36){
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
    if(questionNo == 4 || questionNo == 9 || questionNo == 12 || questionNo == 16 || questionNo == 19 || questionNo == 21 || questionNo == 25 || questionNo == 31 || questionNo == 34 || questionNo == 37 || questionNo == 39){
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