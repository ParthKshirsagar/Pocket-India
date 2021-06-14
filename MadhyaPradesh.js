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

var questions = ["The marble rock is situated near the city of?", "Kumbha mela in Ujjain held on the bank of which river?", "Which one is the largest national park in Madhya Pradesh?", "Which one is the largest districts by population in Madhya Pradesh?", 'Who was the first Chief Minister of Madhya Pradesh?', "The Chachai Falls is created by which river?", "The Sanchi Stupa was build by which Emperor?", "When Bhopal become the capital of Madhya Pradesh?", "In which year the Bhopal gas tragedy occur?", "Which gas caused the Bhopal gas tragedy incident?", "Raja Bhoj belongs to which dynasty?", "Which one is the most populated city in Madhya Pradesh?", "By areawise Madhya Pradesh is the _______ largest state in India.", "In which year Kanha is declared as the Tiger Reserve?", "What is the total number of distrcts in Madhya Pradesh?", "Which one is recognised as State Flower of Madhya Pradesh?", "What is the total number of National Parks in Madhya Pradesh?", "The Bandhavgarh National Park is located in which district?", "What is the total number of seats in Madhya Pradesh State Legislative Assembly?", "Who was the first Governor of Madhya Pradesh?", "Madhya Pradesh is the largest reservers of _____________ in India.", "In which year Khajuraho Group of Monuments decalred as World Heritage Sites by UNESCO?", "What is the total number of scheduled tribes in Madhya Pradesh?", "Which one is the most populated tribe in Madhya Pradesh?", "Which one is the longest river in Madhya Pradesh?", "Where is the All India Classical Dance Festival organised every year in MP?", "In which district of MP is railway sleeper manufacturing factory situated?", "Who was the first woman Chief Minister of Madhya Pradesh?", "Which one of the following is the smallest district of Madhya Pradesh by population?", "Every year The Akhil Bhartiya Kalidas Samaroh is organised in which city?", "The Madhya Pradesh Laghu Udyog Nigam was established in which year?", "Where is Gold Export Promotion Park situated?", "According to Census 2011, the district of maximum population in Madhya Pradesh is?", "Sandhya Agarwal is associated with which of the following sports?", "The Aishbagh Stadium is located in which city?", "The Dhupgarh peak is situated in?", "The State Museum of Madhya Pradesh, Bhopal was earlier known as?", "Which one of the following places of Madhya Pradesh is on or nearest to 80 degree east longitude?", "Which one is the highest peak in Madhya Pradesh?", "Which of the following rivers is not a tributaries of Chambal River?", "Who is the writer of 'Bikhare Moti'?", "Where is the Currency Printing Press in Madhya Pradesh?", "From which field Ganesh Shankar Vidyarthi award is related to?", "Shree Singaji Thermal Power Project is located in?", "Sant Singaji belongs to which region of Madhya Pradesh?", "Which famous personality of Madhya Pradesh is also known as 'Guruji'?", "Rani Durgavati ruled which region of Madhya Pradesh?", "How many neighbouring states share its border with Madhya Pradesh?", "Captain Roop Singh Cricket Stadium is related to?"];
var optAs = ["Khajuraho", "Narmada", "Madhav National Park", "Jabalpur", "Ravishankar Shukla", "Narmada river", "Chandragupta Maurya", "1947", "1973", "Isoamyl acetate", "Rashtrakuta Dynasty", "Bhopal", "1st", "1955", "25", "Lotus", "8", "Umaria District", "180", "Hari Vinayak Pataskar", "Copper", "1983", "25", "Bharia", "Tapti", "Pachmarhi", "Sehore", "Vimla Sharma", "Sheopur", "Ujjain", "1958", "Indore", "Jabalpur", "Hockey", "Indore", "Satpura Range", "King George Museum", "Jabalpur", "Churdhar Peak", "Kshipra", "Muktibodh", "Dewas", "Sports", "Mundi", "Bundelkhand", "Makhanlal Chaturvedi", "Gondwana", "3", "Footaball"];
var optBs = ["Jabalpur", "Betwa", "Satpura National Park", "Bhopal", "Kailash Nath Katju", "Bihad river", "Ashoka", "1952", "1978", "Propionic acid", "Paramara Dynasty", "Rewa", "2nd", "1968", "27", "White lily", "10", "Sheopur District", "201", "K. Chengalaraya Reddy", "Coal", "1986", "32", "Gond", "Shipra", "Khajuraho", "Bhopal", "Vijaya Raje Scindia", "Raisen", "Gwalior", "1961", "Pithampur", "Sagar", "Cricket", "Gwalior", "Maikal Range", "Edward Museum", "Rewa", "Chauragarh Peak", "Kali Sindh", "Agyeya", "Neemuch", "Social Service", "Satna", "Baghelkhand", "Vishnu Chinchalkar", "Mahakaushal", "4", "Cricket"];
var optCs = ["Dewas", "Chambal", "Bandhavgarh National Park", "Indore", "Dwarka Prasad Mishra", "Son", "Samudragupta", "1956", "1981", "Methyl trichloride", "Satavahana Dynasty", "Indore", "3rd", "1973", "37", "Rose", "11", "Anuppur District", "230", "Dr. Pattabhi Sitaramayya", "Manganese", "1989", "40", "Bhil", "Narmada", "Gwalior", "Hoshangabad", "Nirmala Yadav", "Datia", 'Raigarh', "1964", "Bina", "Indore", "Chess", "Bhopal", "Vindhya Range", "Wakankar Museum", "Panna", "Dhupgarh Peak", "Betwa", "Subhadra Kumari Chauhan", "Guna", "Music", "Rewa", "Malwa", "Ramkumar Verma", "Vindhya Pradesh", "5", "Basketball"];
var optDs = ["Gwalior", "Kshipra", "Kanha National Park", "Dhar", "Bhagwantrao Mandloi", "Mahanadi", "Chandragupta II", "1962", "1984", "Methyl isocyanate", "Maurya Dynasty", 'Jabalpur', "5th", "1979", "51", "Marigold", "13", "Katni District", "255", "S. N. Sinha", "Dolomite", "1990", "46", "Korku", "Mahanadi", "Orachha", "Betul", "Uma Bharti", "Harda", "Indore", "1967", "Mandideep", "Bhopal", "Table Tennis", "Jabalpur", "None of these", "Bhandarkar Museum", "Katni", "Mahendragiri Peak", "Parvati", "Dinker Sonwalker", "Jabalpur", "Journalism", "Mandu", "Nimar", "Nathuram Premi", "Gwalior", "6", "Lawn tennis"];
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
    if(questionNo == 5 || questionNo == 9 || questionNo == 13 || questionNo == 15 || questionNo == 18 || questionNo == 20 || questionNo == 21 || questionNo == 26 || questionNo == 34 || questionNo == 36 || questionNo == 40 || questionNo == 41 || questionNo == 42 || questionNo == 49){
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
    if(questionNo == 2 || questionNo == 7 || questionNo == 8 || questionNo == 12 || questionNo == 14 || questionNo == 17 || questionNo == 23 || questionNo == 25 || questionNo == 27 || questionNo == 32 || questionNo == 35 || questionNo == 38 || questionNo == 47 || questionNo == 50){
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
    if(questionNo == 3 || questionNo == 4 || questionNo == 10 || questionNo == 11 || questionNo == 16 || questionNo == 29 || questionNo == 24 || questionNo == 30 || questionNo == 39 || questionNo == 44 || questionNo == 46){
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
    if(questionNo == 0 || questionNo == 6 || questionNo == 19 || questionNo == 22 || questionNo == 28 || questionNo == 31 || questionNo == 33 || questionNo == 37 || questionNo == 43 || questionNo == 45 || questionNo == 48){
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