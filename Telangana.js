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

var questions = ["The famous Warangal fort was built by ______.", "How Many Districts are in Telangana State?", "What is the State Festival of Telangana?", "What is the State Sport of Telangana?", "Telangana has been formed by dividing which of these states?", "What is the capital of Telangana?", "Who is the Brand Ambassador for Telangana?", "Lord Narasimha temples are located in which of the following places of Telangana?", "Which day is celebrated as Telangana Language day?", "What is the name of the Hyderabad international airport?", "Nagarjuna Sagar dam was built on which river?", "Which of the following Village/City is famous for Paper industry?", "What is the State Animal of Telangana?", "What is the state bird of Telangana?", "Telangana state formation day?", "Gnana Saraswati temple at Basara is located on the banks of which river?", "Pembarthi located in Warangal district of Telangana is well-known for which of the following?", "During which of the following Telugu month, Bonalu festival is celebrated in Telangana?", "Pillala Marri, which is an 800 year old banyan tree is located in which district of Telangana state?", "Which Airport is located in Telangana?", "In Which district Kota Gullu temple established?", "Which one is Telangana State dance?", "Which dam is present in Telangana?", "Which Wild Life Sanctuary is in Telangana?", "Which National Park is located in Telangana?", "Which group has signed a MoU with which state government for setting up a food park in Telangana?", "The Expert Appraisal Committee (EAC) of Union Ministry of Environment, Forest and Climate Change (MoEFCC) has accorded environmental clearance for Kaleshwaram Lift irrigation Project(KLIP) in Telangana .The Project is to build the estimated to cost about ________.", "Kuntala Waterfalls is located in which district?", "What is the Main Language of Telangana State?"];
var optAs = ["Musunuri Nayaks", "31", "Guru Amardass", "Kabaddi", "Andhra Pradesh", "Hyderabad", "Saina Nehwal", "Dharmapuri", "02, September", "Rajiv Gandhi International Airport", "Manjira", "Sangareddy", "Monkey", "House Sparrow", "02, June", "Penganga river", "Metal crafts", "Kaarthikamu", "Warangal", "Indra Gandhi", "Mahbubnagar", "Karakattam", "Srisailam", "Kawal", "Bandipur", "Lotus", "Rs 80,799.7 crore", "Adilabad", "Telugu and Urdu"];
var optBs = ["Kakatiyas", "10", "Ed-ul-Fitr", "Basket Ball", "Karnataka", "Nizamabad", "Sania Mirza", "Yadagiri", "09, September", "Kakatiya International Airport", "Krishna", "Manchiryal", "Spotted deer", "Indian Roller", "19, September", "Godavari river", "Paintings", "Aashaadhamu", "Nizamabad", "Ramagundam", "Warangal", "Kathak", "Sripada", "Netravali", "Silent Valley", "Himalaya", "Rs 80,499.7 crore", "Khammam", "Urdu"];
var optCs = ["Chalukyas", "12", "Bathukamma", "Hockey", "Tamil Nadu", "Warangal", "Saket M", "Both a and b", "01, September", "Indira Gandhi International Airport", "Godavari", "Bellampalle", "Asian Elephant", "Peacock", "01, August", "Manjira river", "Cement industries", "Phaalgunamu", "Medak", "Chhatrapati Shivaji", "Adilabad", "Perini Tandavam", "Jurala", "Gulmarg", "Mrugavani", "Patanjali", "Rs 80,599.7 crore", "Mahabub Nagar", "Telugu"];
var optDs = ["Delhi Sultans", "14", "Pongal", "Cricket", "Arunachal Pradesh", "Karimnagar", "None of these", "Korutla", "13, September", "Nehru International Airport", "Bhima", "Sirpur", "None of these", "Parrot", "24, July", "Krishna river", "Iron ore", "Maakhamu", "Mahabubnagar", "None of these", "None of these", "None of these", "All of these", "Bandhi", "Mata Sahib Kaur", "None of these", "Rs 80,699.7 crore", "Warangal", "Tamil"];
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
    if(questionNo == 4 || questionNo == 9 || questionNo == 23 || questionNo == 26 || questionNo == 27){
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
    if(questionNo == 2 || questionNo == 8 || questionNo == 10 || questionNo == 12 || questionNo == 14 || questionNo == 15 || questionNo == 17 || questionNo == 19 || questionNo == 21 || questionNo == 22 || questionNo == 28){
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
    if(questionNo == 13 || questionNo == 20 || questionNo == 24){
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
    if(questionNo == 0 || questionNo == 3 || questionNo == 5 || questionNo == 6 || questionNo == 7 || questionNo == 11 || questionNo == 16 || questionNo == 18 || questionNo == 25 || questionNo == 29 || questionNo == 30){
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