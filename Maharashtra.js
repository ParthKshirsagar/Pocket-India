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
var level = 34;

var questions = ["What is the total area of Maharashtra?", "When is Maharashtra Day celebrated?", "Which is the Summer Capital of Maharashtra?", "Which is the Winter Capital of Maharashtra?", "What kind of Legislature is practiced in Maharashtra?", "How many seats does Maharashtra have in the Rajya Sabha?", "How many seats does Maharashtra have in the Lok Sabha?", "What is the Demonym for the people of Maharashtra?", "What is the State Code of Maharashtra?", "What is the official language of Maharashtra?", "What is the State Song of Maharashtra?", "What is the State Mammal of Maharashtra?", "What is the State Bird of Maharashtra?", "What is the State Insect of Maharashtra?", "What is the State Flower of Maharashtra?", "What is the State Tree of Maharashtra?", "The state of Bombay was split into which two states by the Bombay Reorganisation Act 1960?", "Who was the first Prime Minister of Bombay before Independence?", "Who was the first Chief Minister of Bombay after Independence?", "Who was the first Chief Minister of Maharashtra?", "Who is the longest-serving Chief Minister of Maharashtra?", "Who is the shortest-serving Chief Minister of Maharashtra?", "Which chief Minister was elected on 28th November 2019?", "Which party does Uddhav Thackeray belong to?", "Who was the first governor of Maharashtra?", "Who is serving as the Governor of Maharashtra while Uddhav Bal Thackeray is the Chief Minister?", "Who is serving as the Deputy Chief Minister of Maharastra since 2010?", "Who was the first Deputy Chief Minister of Maharashtra?", "How many seats are in the Maharashtra Legislative Assembly?", "When did the first Assembly election take place in Maharashtra?", "When did the 14th Assembly election take place in Maharashtra?", "How many seats are in the Maharashtra Legislative Council?", "How many members of the Maharashtra Legislative Council shall be elected by the members of the Legislative Assembly?", "How many members of the Maharashtra Legislative Council are elected from amongst Graduates and Teachers from 7 divisions of Maharashtra?", "Which plateau is located in Maharashtra?", "What rank does Maharashtra hold in the most populous country subdivision in the world?", "Which is the second-longest Indian river after the Ganga?", "How many states do River Godavari covers?", "Where does River Godavari empty its basin?", "What is the rank of Maharashtra in India in terms of Area?", "How many states do Maharashtra shares its border?", "How many international Airports are in Maharashtra?", "What is the IATA of Chhatrapati Shivaji Maharaj International Airport?", "What is the IATA of Pune International Airport?", "How many Zonal Railway Headquarters are in Maharashtra?", "Where is the Bombay High Court located?", "How many UNESCO World Heritage Sites are located in Maharashtra?", "What is the nickname of Pune?", "What is the nickname of Khamgaon?"];
var optAs = ["300,713 km²", "1st May", "Nagpur", "Nagpur", "Unicameralism", "09 Seats", "28 Seats", "Marathis", "MA", "English", "Maharashtra Devabhumi Matribhumi", "Mithun", "Yellow-Footed Green Pigeon", "Blue Mormon", "Jarul", "Mango", "Maharashtra and Karnataka", "Balasaheb Gangadhar Kher", "Balasaheb Gangadhar Kher", "Vasantrao Banduji Patil", "Devendra Gangadharrao Fadnavis", "Marotrao Shambshio Kannamwar", "Uddhav Bal Thackeray", "INC", "Dr. P. Subbarayan", "S.C. Jamir", "Prithviraj Chavan", "Nasikrao Tirpude", "288 Seats", "1960", "2016", "68 Seats", "20 Members", "7 Members", "Deccan Plateau", "1st", "Narmada River", "5 States", "Arabian Sea", "2nd", "7 States", "One Airport", "SMI", "PUNI", "Three Headquarters", "Nagpur", "Three Sites", "City Of Wrestlers", "City Of Lakes"];
var optBs = ["307,713 km²", "1st July", "Pune", "Pune", "Bicameralism", "12 Seats", "48 Seats", "Punekars", "MH", "Hindi", "Sana Leibak Maharashtra", "Barasingha", "Indian Paradise Flycatcher", "Yeoman", "Rohida", "Gamhar", "Maharashtra and Telangana", "Morarji Ranchhodji Desai", "Morarji Ranchhodji Desai", "Shankarrao Bhavrao Chavan", "Vilasrao Dagodajirao Deshmukh", "P. K. Sawant", "Devendra Gangadharrao Fadnavis", "Shiv Sena", "Raja Sir Maharaj Singh", "Kateekal Sankaranarayanan", "R. R. Patil", "Sundarrao Solanke", "168 Seats", "1962", "2017", "78 Seats", "24 Members", "12 Members", "Malwa Plateau", "2nd", "Godavari River", "7 States", "Bay of Bengal", "3rd", "6 States", "Two Airports", "CSMI", "PIA", "Two Headquarters", "Lonavala", "Four Sites", "Oxford Of The West", "Silver City"];
var optCs = ["317,713 km²", "1st August", "Mumbai", 'Mumbai', "Tricameralism", "16 Seats", "58 Seats", "Maharashtrian", "MHA", "Urdu", "Jai Jai Maharashtra Maza", "Indian giant squirrel", "Black Francolin", "Southern Birdwing", "Indian Rose Chestnut", "Sacred Fig", "Maharashtra and Gujarat", "Yashwantrao Balwantrao Chavan", "Yashwantrao Balwantrao Chavan", "Marotrao Shambshio Kannamwar", "Sharad Govindrao Pawar", "Narayan Tatu Rane", "President’s Rule", "BJP", "Sir Girija Shankar Bajpai", "Chennamaneni Vidyasagar Rao", "Chhagan Bhujbal", "Ramrao Adik", "188 Seats", "1967", "2018", "88 Seats", "30 Members", "22 Members", "Baghelkhand Plateau", "4th", "Krishna River", "4 States", "Bay of Bengal", "4th", "5 States", "Three Airports", "BOM", "PUN", "Four Headquarters", "Pune", "Five Sites", "Oxford Of The East", "Cotton City"];
var optDs = ["327,713 km²", "1st September", "Nashik", "Nashik", "Multicameralism", "19 Seats", "68 Seats", "Mumbaikar", "MUM", "Marathi", "Bande Utkala Janani", "Clouded Leopard", "Greater Flamingo", "Kamehameha Butterfly", "Lady’s Slipper Orchid", "Jammi Chettu", "Maharashtra and Madhya Pradesh", "Marotrao Shambshio Kannamwar", "Marotrao Shambshio Kannamwar", "Yashwantrao Balwantrao Chavan", "Shankarrao Bhavrao Chavan", "Shivajirao Patil Nilangekar", "Prithviraj Chavan", "NCP", "Dr. Harekrushna Mahatab", "Bhagat Singh Koshyari", "Ajit Pawar", "Chhagan Bhujbal", "268 Seats", "1978", "2019", "58 Seats", "32 Members", "25 Members", "Chota Nagpur Plateau", "5th", "Indravati River", "Indravati River", 'Indian Ocean', "5th", "4 States", "Four Airports", "ISK", "PNQ", "Seven Headquarters", "Mumbai", "Six Sites", "Manchester Of Maharashtra", "Queen Of The Deccan"];

function setup(){
    getLevels();
    console.log(username);
}

function draw(){
    draw2();
    if(correct != 0 && userLevels == 34){
        sne.onclick = function(){
            updateLevels(35);
            setTimeout(function(){
                window.location.href = "Main.html";
            }, 1000);
        }
    }
    if(userLevels > 34 && correct != null){
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
            percentage.innerHTML = `${Math.round((correct/50)*100)}%`;
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
    if(questionNo == 4 || questionNo == 9 || questionNo == 12 || questionNo == 13 || questionNo == 18 || questionNo == 34 || questionNo == 43 || questionNo == 44 || questionNo == 49){
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
    if(questionNo == 0 || questionNo == 2 || questionNo == 6 || questionNo == 10 || questionNo == 22 || questionNo == 23 || questionNo == 25 || questionNo == 26 || questionNo == 33 || questionNo == 37 || questionNo == 38 || questionNo == 40 || questionNo == 41 || questionNo == 42 || questionNo == 50){
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
    if(questionNo == 7 || questionNo == 8 || questionNo == 11 || questionNo == 28 || questionNo == 21 || questionNo == 32 || questionNo == 27 || questionNo == 45 || questionNo == 47 || questionNo == 48){
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
    if(questionNo == 3 || questionNo == 5 || questionNo == 14 || questionNo == 15 || questionNo == 16 || questionNo == 17 || questionNo == 19 || questionNo == 20 || questionNo == 29 || questionNo == 24 || questionNo == 30 || questionNo == 31 || questionNo == 35 || questionNo == 36 || questionNo == 39 || questionNo == 46){
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