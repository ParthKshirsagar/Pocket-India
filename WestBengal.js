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

var questions = ["Which Country is comparable with the size of West Bengal?", "When was West Bengal established as a Separate Indian State?", "Since when was Mamata Banerjee appointed as the Chief Minister of West Bengal?", "Who was the first Chief Minister of West Bengal after West Bengal was formed as an Indian State?", "What is the Official Language of West Bengal?", "What is the State Flower of West Bengal?", "What Rank does West Bengal holds in the list of Largest State by Area in India?", 'What is the area of West Bengal?', "How many Countries do West Bengal shares its border with?", "How many states do West Bengal shares its border with?", "What is the Pin Code of Murshidabad?", "When did the Battle of Plassey take place?", "Which Country was known as East Bengal?", "What is the State Tree of West Bengal?", "What is the Capital of West Bengal?", "What is the IATA of Netaji Subhas Chandra Bose International Airport?", "Who was the first Governor of West Bengal?", "Who is the Longest Serving Chief Minister of West Bengal?", "Who is the Shortest Serving Chief Minister of West Bengal?", "Which town is located near the eastern bank of Hoogly River?", "When was the First President’s Rule imposed in West Bengal?", "How many times President’s Rule was imposed in West Bengal?", "How many seats are in the Legislature of West Bengal?", "Which Political Party is in Power in West Bengal?", "How many Lok Sabha Seats are in West Bengal?", "How many Rajya Sabha Seats are in West Bengal?", "When was the Calcutta High Court established?", "What is the State Fish of West Bengal?", "What is the State Bird of West Bengal?", "What is the State Mammal of West Bengal?", "When did the “West Bengal Legislative Assembly” pass a resolution to change the name of West Bengal to “Bengal” in English and “Bangla” in Bengali?", "When was the Treaty between the “East India Company” and the “Mughal Emperor” signed?", "Which Governor took Office from 2019 in West Bengal?", "When did the Battle of Buxar take place?", "When did the Great Bengal Famine take place?", "When was “East Bengal” renamed as “East Pakistan”?", "Which is the Highest Peak in West Bengal?", "Which river flows under the Howrah Bridge?", "Which River is known as the “Sorrow of Bengal”?"];
var optAs = ["Honduras", "26 January 1948", "2012", "Prafulla Chandra Ghosh", "Bengali", "Night-blooming Jasmine", "14th", "90,752 km²", "1 Country", "5 States", "741251", "1737", "Bangladesh", "Agar Tree", "Burdwan", "CCU", "Dharma Vira", "Buddhadeb Bhattacharya", "Siddhartha Shankar Ray", "Khili", "20 February 1977", "2 Times", "42 Seats", "CPI-M", "18 Seats", "28 Seats", "1 July 1962", "Catla", "Bastar Hill Myna", "Wild Water Buffalo", "August 2016", "August 12, 1735", "Keshari Nath Tripathi", "1764", "1769 – 1773", "1947", "Falut", "Teesta River", "Teesta River"];
var optBs = ["Hungary", "26 January 1949", "2011", "Bidhan Chandra Roy", "English", "Night-flowering Jasmine", "12th", "88,752 km²", "4 Countries", "4 States", "742142", "1747", "Pakistan", "Chatim Tree", "Howrah", "ICAO", "Kailash Nath Katju", "Jyoti Basu", "Prafulla Chandra Ghosh", "Itor", "20 February 1970", "4 Times", "294 Seats", "BJP", "16 Seats", "14 Seats", "1 July 1862", "Kajuli", "Great Hornbill", "Fishing Cat", "August 2015", "August 12, 1745", "M.K. Narayanan", "1774", "1769 – 1771", "1956", "Rachela Danda", "Horah River", "Damodar River"];
var optCs = ["Serbia", "26 January 1950", "2013", "Ajoy Kumar Mukherjee", "Bengali & English", "Frangipani", "8th", "85,752 km²", "2 Countries", "2 States", "742149", "1757", "Nepal", "Banyan Tree", "Siliguri", "CAL", "Chakravarthi Rajagopalachari", "Bidhan Chandra Roy", "Ajoy Kumar Mukherjee", "Murshidabad", "20 February 1969", "3 Times", "216 Seats", "INC", "42 Seats", "16 Seats", "1 July 1942", "Ilish", "White-throated kingfisher", "Blackbuck", "August 2014", "August 12, 1765", "Jagdeep Dhankhar", "1784", "1769 – 1770", "1955", "Sabargram", "Hooghly River", "Hooghly River"];
var optDs = ["Scotland", "26 January 1952", "2010", "Prafulla Chandra Sen", "Bengali & Hindi", "Bougainvillea", "10th", "83,752 km²", "3 Countries", "3 States", "743145", "1767", "China", "Ashoka Tree", "Kolkata", "KOL", "Saiyid Nurul Hasan", "Siddhartha Shankar Ray", "Bidhan Chandra Roy", "Nagara", "20 February 1968", "None", "46 Seats", "AITC", "46 Seats", "18 Seats", "1 July 1842", "Rohu", "Asian Koel", "Nilgiri Tahr", "August 2017", "August 12, 1755", "Gopalkrishna Gandhi", "1794", "1767 – 1771", "1971", "Sandakphu", "Damodar River", "Mahananda River"];
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
    if(questionNo == 2 || questionNo == 3 || questionNo == 6 || questionNo == 12 || questionNo == 13 || questionNo == 18 || questionNo == 21 || questionNo == 26 || questionNo == 27 || questionNo == 29 || questionNo == 30 || questionNo == 33 || questionNo == 34 || questionNo == 37 || questionNo == 39){
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
    if(questionNo == 4 || questionNo == 5 || questionNo == 7 || questionNo == 9 || questionNo == 15 || questionNo == 19 || questionNo == 20 || questionNo == 23 || questionNo == 24 || questionNo == 28 || questionNo == 31 || questionNo == 36 || questionNo == 40){
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
    if(questionNo == 10 || questionNo == 16 || questionNo == 22 || questionNo == 25 || questionNo == 38){
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
    if(questionNo == 0 || questionNo == 8 || questionNo == 11 || questionNo == 14 || questionNo == 17 || questionNo == 32 || questionNo == 35){
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