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

var questions = ["Which country is comparable to the size of Meghalaya?", "What is the capital of Meghalaya?", "What was the capital of Assam before Dispur?", "When was Meghalaya separated from Assam?", "How many Districts are in Meghalaya?", "How many Divisions is in Meghalaya?", "Which is the largest district of Meghalaya?", "What is the Sanskrit meaning of Meghalaya?", "Which two district of Assam was carved out to form the state of Meghalaya?", "What is the length-to-breadth ratio of Meghalaya?", "Which is the only country that borders Meghalaya?", "Which is the only Indian state that borders Meghalaya?", "Which Bangladeshi division borders Meghalaya to the southern side?", "Which Bangladeshi division borders Meghalaya to the western side?", "What nickname did the British imperial authorities give to Shillong during the British rule of India?", "What is the official language of Meghalaya?", "Which system is followed in Meghalaya?", "Which is the wettest state of India?", "Which is the wettest region in Meghalaya?", "What is the length of national highways in Meghalaya?", "Which is the tallest plunge waterfall in India?", "Which is the smallest district of Meghalaya?", "What is the Area rank of Meghalaya amongst the Northeastern state?", "What is the State code of Meghalaya?", "What is the State Motto of Meghalaya?", "What is the State Animal of Meghalaya?", "What is the State Bird of Meghalaya?", "What is the State Flower of Meghalaya?", "What is the State Tree of Meghalaya?", "Who was the first Chief Minister of Meghalaya?", "Who is the longest-serving chief minister of Meghalaya?", "Who was the first Indian National Congress Chief Minister of Meghalaya?", "Which political party did Donkupar Roy, the 10th Chief Minister of Meghalaya belong to", "Who became the 12th Chief Minsiter of Meghalaya?"];
var optAs = ["El Salvador", "Imphal", "Shillong", "21 January 1972", "10 Districts", "1 Division", "East Khasi Hills", "Rain Forest", "Khasi Hills and Garo Hills", "1:1", "China", "Assam", "Khulna Division and Rajshahi Division", "Dhaka Division", "Gateway To Bangladesh", "English", "Zamindar System", "Meghalaya", "Debundscha", "3,170 km", "Dudhsagar Falls", "East Khasi Hills", "3rd", "MLA", "Unity", "Sambar Deer", "Nongin", "Glorosa Lily", "Alder", "Williamson A. Sangma", "B. B. Lyngdoh", "Williamson A. Sangma", "All Party Hill Leaders Conference", "Mukul Sangma"];
var optBs = ["Bhutan", "Shillong", "Guwahati", "21 January 1971", "9 Districts", "4 Divisions", "West Garo Hills", "Abode of Mountains", "United Khasi Hills & Jaintia Hills, and Garo Hills", "2:1", "Bangladesh", "Tripura", "Mymensingh Division and Sylhet Division", "Rangpur Division", "Land Of Warriors", "English and Hindi", "Ryotwari System", "Ladakh", "Lloró", "2,170 km", "Mawsmai Falls", "South West Garo Hills", "4th", "ML", "The Dragon Lord", "Clouded Leopard", "Emerald Dove", "Lady’s Slipper Orchid", "Gamhar", "B. B. Lyngdoh", "Mukul Sangma", "P. A. Sangma", "Indian National Congress", "Conrad Sangma"];
var optCs = ["Belize", "Cherrapunji", "Jorhat", "21 January 1969", "11 Districts", "2 Divisions", "Ri Bhoi", "Abode of Clouds", "United Khasi Hills & Ri-Bhoi and Garo Hills", "4:1", "Nepal", "Manipur", "Rajshahi Division and Chittagong Division", "Khulna Division", "Scotland of the East", "Garo", "Matrilineal System", "Kerala", "Mawsynram", "1,170 km", "Kunchikal Falls", "North Garo Hills", "5th", "MG", "Satyameva Jayate", "Himalayan Serow", "Blyth’s Tragopan", "Tangidi Puvvu", "Agarwood", "P. A. Sangma", "D. D. Lapang", "S. C. Marak", "United Democratic Party", "D. D. Lapang"];
var optDs = ["Austria", "Mawsynram", "Kaziranga", "21 January 1973", "12 Districts", "3 Divisions", "West Khasi Hills", "Wettest Place", "Khasi Hills and Ri-Bhoi", "3:1", "Myanmar", "Mizoram", "Rangpur Division and Dhaka Division", "Chittagong Division", "Manchester of the East", "Khasi", "Patrilineal System", "Himachal Pradesh", "Quibdo", "4,170 km", "Nohkalikai Falls", "West Garo Hills", "7th", "MGL", "May None Suffer Any Pain", "Mithun", "Hill Myna", "Indian Rose Chestnut", "Uningthou", "Darwin Diengdoh Pugh", "S. C. Marak", "J. D. Rymbai", "Hill People’s Union", "Donkupar Roy"];
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
    if(questionNo == 0 || questionNo == 2 || questionNo == 6 || questionNo == 9 || questionNo == 16 || questionNo == 18 || questionNo == 20 || questionNo == 21 || questionNo == 26 || questionNo == 34){
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
    if(questionNo == 3 || questionNo == 10 || questionNo == 12 || questionNo == 14 || questionNo == 15 || questionNo == 23 || questionNo == 25 || questionNo == 27 || questionNo == 29 || questionNo == 30 || questionNo == 32 || questionNo == 35){
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
    if(questionNo == 7 || questionNo == 8 || questionNo == 11 || questionNo == 22 || questionNo == 28){
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
    if(questionNo == 4 || questionNo == 5 || questionNo == 13 || questionNo == 17 || questionNo == 19 || questionNo == 24 || questionNo == 31 || questionNo == 33){
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