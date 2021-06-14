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

var questions = ["What is the total area of Rajasthan?", "Which country is comparable to the size of Rajasthan?", "Which is the largest state in India?", "What is the Official Language of Rajasthan?", "Which desert is located in Rajasthan?", "Which direction is the desert located in Rajasthan?", "Which Province of Pakistan is located on the West of Rajasthan?", "Which Province of Pakistan is located in the North-West of Rajasthan?", "What is the other Popular name of Thar Desert?", "How many Indian States does Rajasthan shares its border?", "Which latitude passes through Rajasthan?", "Which ruins of Civilisation are located at Kalibangan and Balathal?", "Which is the only hill station of Rajasthan?", "Between Which States is the Mouth Abu located?", "What is the State Heritage Animal of Rajasthan?", "What is the State Tree of Rajasthan?", "What is the State Flower of Rajasthan?", "What is the State Bird of Rajasthan?", "What is the State Dance of Rajasthan?", "How many world heritage sites are in Rajasthan?", "How many National Tiger Reserves are in Rajasthan?", "What is the Capital of Rajasthan?", "When was Jaipur State formed?", "Which is the largest city of Rajasthan?", "How many Divisions are in Rajasthan?", "How many Districts are in Rajasthan?", "Which is the Largest District of Rajasthan?", "Which is the Smallest District of Rajasthan?", "Which is the most Populated District of Rajasthan?", "Which is the least Populated District of Rajasthan?", "Who was the first Chief Minister of Rajasthan?", "Who was the first Female Chief Minister of Rajasthan?", "Who is the shortest-serving Chief Minister of Rajasthan?", "Who is the longest-serving Chief Minister of Rajasthan?", "Which political party did Heera Lal Shastri belong to?", "When did the first Chief Minister of Rajasthan serve the office?", "How many Chief Ministers of Rajasthan were elected until 2021?", "Which Chief Minister of Rajasthan went on to serve as the 11th Vice President of India?", "Who was the first Non-Congress Chief Minister of Rajasthan?", "How many seats are in Rajasthan Legislative Assembly?", "How many seats does Rajasthan have in the Rajya Sabha?", "How many seats does Rajasthan have in the Lok Sabha?", "Which Chief Minister was elected on 17 December 2018 (third tenure)?", "Who is the present Governor of Rajasthan as of 2021?", "Who was the first Governor of Rajasthan?", "Who is the Speaker of the Rajasthan Legislative Assembly (2021)?", "Who was the first speaker of the Rajasthan Legislative Assembly?", "Out of 200 Seats, How many seats are occupied by the Indian National Congress in the 15th Assembly?", "How many constituencies are in Rajasthan?"];
var optAs = ["242,239 km²", "Oman", "Rajasthan", "Hindi", "Gobi Desert", "North", "Gilgistan", "Punjab", 'Calm Desert', "5 States", "The Equator", "Harappan Civilization", "Jogimatti", "Rajasthan & Gujarat", "Chinkara", "Jammi Chettu", "Indian Roller", "Emerald Dove", "Mundari", "4 Sites", "Three", "Jodhpur", "30 March 1948", "Udaipur", "7 Divisions", "33 Districts", "Jaipur District", "Rajsamand District", "Udaipur District", "Tonk District", "Jai Narayan Vyas", "Vasundhara Joshi", "Barkatullah Khan", "Vasundhara Raje", "Indian National Congress", "7 April 1947", "13 Chief Ministers", "Hari Dev Joshi", "Jagannath Pahadia", "156", "15 Seats", "25 Seats", "Hari Dev Joshi", "Ram Naik", "Maharaj Man Singh II", "Sumitra Singh", "Niranjan Nath Acharya", "104 Seats", "196 Constituencies"];
var optBs = ["342,239 km²", "Italy", "Andhra Pradesh", "Rajasthani", "Thar Desert", "West", "Baltistan", "Baltistan", "Great Indian Desert", "4 States", "The Tropic of Cancer", "Incan Civilization", "Paithal Mala", "Rajasthan & Madhya Pradesh", "Musk Deer", "Palm Tree", "Imperial Pigeon", "Indian Roller", "Ghoomar", "6 Sites", "Two", "Jaipur", "30 March 1949", "Jodhpur", "9 Divisions", "27 Districts", "Bikaner District", "Dholpur District", "Alwar District", "Pratapgarh District", "Tika Ram Paliwal", "Vasundhara Raje", "Jagannath Pahadia", "Mohan Lal Sukhadia", "Janata Party", "7 April 1948", "14 Chief Ministers", "Bhairon Singh Shekhawat", "Barkatullah Khan", "125", "10 Seats", "20 Seats", "Bhairon Singh Shekhawat", "Kalraj Mishra", "Sardar Hukam Singh", "C. P. Joshi", "Ram Niwas Mirdha", "105 Seats", "156 Constituencies"];
var optCs = ["442,239 km²", "Syria", "Uttar Pradesh", "English", "Sahara Desert", "South", "Sindh", "Balochistan", "Silk Desert", "7 States", "The Tropic of Capricorn", "Mesopotamia", "Mount Abu", "Rajasthan & Punjab", "Camel", "Khejri", "Sarus Crane", "Godawan", "Bhangra", "8 Sites", "Four", "Ajmer", "30 March 1951", "Jaipur", "11 Divisions", "30 Districts", "Jaisalmer District", "Dungarpur District", "Barmer District", "Jaisalmer District", "Heera Lal Shastri", "Vasundhara Vyas", "C. S. Venkatachari", "Shiv Charan Mathur", "Bharatiya Janata Party", "7 April 1949", "15 Chief Ministers", "Jagannath Pahadia", "Shiv Charan Mathur", "196", "07 Seats", "15 Seats", "Vasundhara Raje", "Prabha Rau", "Gurumukh Nihal Singh", "Deependra Singh Shekhawat", "Narottam Lal Joshi", "107 Seats", "104 Constituencies"];
var optDs = ["542,239 km²", "Germany", "Madhya Pradesh", "Marwari", "Kalahari Desert", "East", "Balochistan", "Gilgistan", "Death Valley", "3 States", "The Arctic Circle", "Indus Valley Civilization", "Wilson Hills", "Rajasthan & Haryana", "Spotted Deer", "Rhododendron", "Rohida", "Blood Pheasant", "Powada", "3 Sites", "One", "Kota", "30 March 1952", "Bikaner", "6 Divisions", "35 Districts", "Nagaur District", "Kota District", "Jaipur District", "Bundi District", "C. S. Venkatachari", "Vasundhara Shastri", "Hira Lal Devpura", "Bhairon Singh Shekhawat", "Nationalist Congress Party", "7 April 1950", "16 Chief Ministers", "Ashok Gehlot", "Bhairon Singh Shekhawat", "200", "03 Seats", "17 Seats", "Ashok Gehlot", "Kalyan Singh", "Sardar Jogendra Singh", "Kailash Chandra Meghwal", "Ram Kishore Vyas", "102 Seats", "200 Constituencies"];
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
    if(questionNo == 8 || questionNo == 32 || questionNo == 14 || questionNo == 16 || questionNo == 17 || questionNo == 19 || questionNo == 25 || questionNo == 28 || questionNo == 31 || questionNo == 37 || questionNo == 48){
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
    if(questionNo == 2 || questionNo == 6 || questionNo == 7 || questionNo == 10 || questionNo == 12 || questionNo == 20 || questionNo == 23 || questionNo == 24 || questionNo == 29 || questionNo == 33 || questionNo == 35 || questionNo == 39 || questionNo == 42 || questionNo == 45 || questionNo == 47){
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
    if(questionNo == 3 || questionNo == 13 || questionNo == 34 || questionNo == 18 || questionNo == 30 || questionNo == 40 || questionNo == 41 || questionNo == 44 || questionNo == 50){
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
    if(questionNo == 0 || questionNo == 4 || questionNo == 5 || questionNo == 9 || questionNo == 11 || questionNo == 15 || questionNo == 21 || questionNo == 22 || questionNo == 26 || questionNo == 27 || questionNo == 36 || questionNo == 38 || questionNo == 43 || questionNo == 46 || questionNo == 49){
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