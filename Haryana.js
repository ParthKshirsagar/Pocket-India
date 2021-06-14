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

var questions = ["In 1526 the famous battle between Babar and Ibrahim Lodi was fought at—", "When was the second battle of Panipat fought?", "The third battle of Panipat was fought between—", "At which place of Haryana did Lord Krishna preach the message of Geeta?", "In 1947 when India was declared Independent, which of the following States was Haryana a part?", "When was the State of Haryana formed?", "With how many states does the boundary of Haryana touch?", "Which one of the following union Territories touches the boundary of Haryana?", "What is the total area of Haryana?", "How many districts are there in Haryana?", "As per census of 2011 the total population of Haryana is—", "What is the percentage of country’s population in Haryana?", "In which of the districts of Haryana is the H.M.T. factory situated?", "Where is the Atlas Industry in Haryana situated?", "Which one of the following is situated in Gurgaon of Haryana?", "In which district of Haryana is Rajdoot Motor Cycle manufactured?", "Odinance regarding the prohibition of alcohol was passed on 1st July, 1996. Later on it was withdrawn on—", "In which of the following years was each village of Haryana electrified?", "According to 2001 census what is the percentage of Literacy in Haryana?", "Where has the National Research Institute in Haryana been established?", "Which of the following Central Territory is the capital of Haryana?", "Which one of the following folk dances belongs to Haryana?", "Which of the following Indian players belongs to Haryana?", "The turban, worn by males in Haryana is known as—", "Where is Chaudhary Charan Singh University located at Haryana?", "Which city of Haryana is known as 'City of Weavers'?", "Of which of the following kings' was Thaneshwar city of Haryana the capital?", "The glory and strength of which of the cities of Haryana was discussed in the book written by Chinese traveller Huen-Tsang?", "In which district of Haryana is the ‘Badkhal Lake’ situated?", "Where is the biggest animal husbandry farm of Asia situated at Haryana?", " Not only to check the growth of population, but also to improve the male female ratio, which of the following projects is being launched by the state government?", "Which project is being launched in Haryana for the welfare of poor girls?", "At which of the pilgrimage centres was the message of Geeta preached by Krishna to Arjun?", "In which city of Haryana was the great epic Mahabharat written by Ved Vyas?"];
var optAs = ["Kurukshetra", "1539", "Ahmad Shah Abdali and Maratha rulers", "Ambala", "Delhi", "1st Nov. 1966", "4", "Lakshadweep", "44,212 km²", "22", "1,91,72,483 persons", "2.09%", "Patiala", "Sonipat", "Manufacturing of Rajdoot Motor Cycle", "Hisar", "1st April, 1998", "1968", "62.40%", "Sirsa", "Chandigarh", "Baoul", "Sunil Gavaskar", "Toda", "Hisar", "Mahendragarh", "Kanishka", "Thaneshwar", "Hisar", "Ambala", "Devi-Rupak-Project", "Apni-Beti-Apna-Dhan", "Markandey Tirth", "Hisar"];
var optBs = ["Rewari", "1556", "Nadir Shah and Mohd. Shah", "Sonipat", "Himachal Pradesh", "10th Dec. 1966", "5", "Pondicherry", "46,213 km²", "25", "2,53,53,081 persons", "2.50%", "Panchkula", "Gurgaon", "Manufacturing of Maruti Cars", "Karnal", "1st April, 1997", "1970", "55.85%", "Kurushetra", "Pondicherry", "Yaksha-Gaan", "Kapil Dev", "Muretha", "Kaithal", "Fatehabad", "Harshwardhan", "Patiala", "Jind", "Bhiwani", "Indra-Hareli-Saheli-Project", "Apni-Beti-Paraya Dhan", "Jyotisar Sarover", "Sonipat"];
var optCs = ["Panipat", "1565", "Prithvi Raj Chauhan and Mohd. Gauri", "Yamuna Nagar", "Punjab", "2nd Jan. 1967", "6", "New Delhi", "48,314 km²", "28", "2,40,82,988 persons", "4%", "Ambala", "Hisar", "Manufacturing of Tata-Sumo", "Ambala", "1st June, 1998", "1972", "65.72%", "Karnal", "New Delhi", "Gidda", "Sachin Tendulkar", "Paggar", "Jhajjar", "Karnal", "Chandra Gupta Morya", "Mahendragarh", "Sirsa", "Hisar", "Farlo project", "Paraya Dhan-Paraie Beti", "Brahm Sarovar", "Yamuna-Nagar"];
var optDs = ["Patiali", "1576", "Sher Khan and Humayun", "Kurukshetra", "Jammu Kashmir", "4th March 1967", "7", "All of the above", "52,276 km²", "32", "2,64,44,271 persons", "6%", "Faridabad", "Panchkula", "All of the above", "Faridabad", "1st Aug., 1997", "1976", "67.90%", "Jind", "Lakshadweep", "Bihu", "Azharudeen", "Khandwa", "Gurgaon", "Panipat", "Samrat Ashok", "Kurukshetra", "Faridabad", "Rohtak", "Bhagyodaya", "Indra-Saheli-Project", "Kaleshwar Tirth", "Kurukshetra"];
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
    if(questionNo == 0 || questionNo == 2 || questionNo == 6 || questionNo == 9 || questionNo == 21 || questionNo == 23 || questionNo == 31){
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
    if(questionNo == 3 || questionNo == 12 || questionNo == 14 || questionNo == 16 || questionNo == 19 || questionNo == 24 || questionNo == 28 || questionNo == 34){
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
    if(questionNo == 5 || questionNo == 17 || questionNo == 20 || questionNo == 25 || questionNo == 27 || questionNo == 30 || questionNo == 35){
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
    if(questionNo == 4 || questionNo == 7 || questionNo == 8 || questionNo == 10 || questionNo == 11 || questionNo == 13 || questionNo == 15 || questionNo == 18 || questionNo == 22 || questionNo == 26 || questionNo == 29 || questionNo == 32 || questionNo == 33){
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