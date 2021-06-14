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

var questions = ["Which one is not a tributary of Kaveri River?", "In which district the Hampi Monuments are located?", "What is the total number of districts in Karnataka?", "Jog Falls which is one of the highest waterfalls in India, is created by?", "Who is the longest serving Chief Minister of Karnataka?", "For which book, Kuvempu wins the Jnanpith Award in 1967?", "What is the total number of national parks in Karnataka?", "In which district, the Bandipur National Park is located?", "In which year, Bandipur National Park was established as a tiger reserve forest?", "When was the first Anglo Mysore War fought?", "Who was the Governor of India when the fourth Anglo-Mysore war was fought?", "The Bangalore University was established in which year?", "Who was the king of France when ambassadors of Tipu Sultan visited the country?", "Who was the first person to received Bharat Ratna award from Karnataka?", "Which one is a east flowing river in Karnataka?", "Which one is the first Kannada movie?", "Who was the first person from Karnataka to received Bharat Ratna award?", "The Hampi city is located on the bank of which river?", "In which year, the Group of Monuments at Hampi are included in the World Heritage Site?", "Who is known as the founder of Vijayanagara Empire?", "Who was the first Chief Minister of Karnataka?", "Who had wrote the poem book Kavitavatara?", "Who had written the first Kannada-English dictionary?", "The Gol Gumbaz is located in which city?", "The Chennakesava Temple in Somanathapura is an example of __________ architecture.", "Which day is celebrated as Karnataka Rajyotsava?", "Which are the two colours that used in Kannada Flag?", "In which year, the Kannada Sahitya Parishat was established?", "Who was the first President of Kannada Sahitya Parishat?", "Who had written the book 'Kavirajamarga'?", "Who had written the mathematical book 'Ganita-sara-samgraha'?", "Who is the first person to received Jnanpith Award for Kannada language?", "Srinivasa was the pen name of which famous author?", "Who was the founder of the Rashtrakuta Empire?", "Which one is known as the Silk Town of Karnataka?", "In which year, the National Games of India was first held in Bangalore?", "Badami, the second capital of the early Chalukyas was formerly known as?", "Who was defeated and killed in the Fourth Mysore war at Srirangapattanam?", "Karnataka was formed in 1956 on the basis of the report of?", "Karnataka's share in the total geographical area of India is?", "The first village which declared independence in Karnataka was?", "Chennakesava temple at Belur is a ________ temple.", "Adikavi Pampa was a court poet of Chalukya King _______.", "Who had written the epic 'Varadhamanapurana'?"];
var optAs = ["Hemavati", "Bellary", "25", "Sharavati River", "R. Gundu Rao", "Naku Thanthi", "3", "Tumakuru district", "1970", "1762", "Lord Wellesley", "1872", "Henry IV", "Girish Karnad", "Aghanashini River", "Gubbi Veeranna", "C.N.R. Rao", "Tungabhadra River", "1972", "Bukka Raya I", "K. Hanumanthaiah", "Govinda Pai", "Hermann Gundert", "Davangere", "Rashtrakuta", "1st October", "Yellow and Red", "1902", "R. Narasimhachar", "Amoghavarsha I", "Jinasena", "K. Shivaram Karanth", "M.V. Iyengar", "Krishna I", "Belgaum", "1962", "Vatapi", "Tippu Sultan", "JVP Committee", "3.53 percent", "Shivapura", "Trikuta", "Narasimha II", "Nagavarma II"];
var optBs = ["Shimsha", "Hassan", "28", "Kaveri River", "S. R. Bommai", "Sri Ramayana Darshanam", "4", "Dharwad district", "1972", "1767", "Lord Cornwallis", "1886", "Louis XV", "C.N.R. Rao", "Tunga River", "Bhakta Dhruva", "Bhimsen Joshi", "Kabini River", "1978", "Harihara I", 'S. Nijalingappa', "Masti Venkatesh Iyengar", "Hermann Mogling", "Raichur", "Badami", "16th October", "Red and White", "1915", "Karpura Srinivasa Rao", "Adikavi Pampa", "Virasena", "Kuvempu", "Kuvempu", "Dantidurga", "Ramanagara", "1966", "Aihole", "Hyder Ali", "Wanchoo Committee", "5.85 percent", "Vidhurashwatha", "Ekakuta", "Arikesari II", "Ranna"];
var optCs = ["Arkavati", "Mysore", "30", "Tunga River", "D. Devaraj Urs", "Mookajjiya Kanasugalu", "5", "Vijayapura district", "1974", "1780", "Lord Minto", "1890", "Louis XVI", "Bhimsen Joshi", "Varahi River", "Sati Sulochana", "Visvesvaraya", "Malaprabha River", "1982", "Ramachandra Raya", "Veerendra Patil", "Veerendra Patil", "Ferdinand Kittel", "Gulbarga", "Hoysala", "1st November", "Green and Black", "1922", "P. G. Halakatti", "Nagavarma I", "Shakatayan", "V. K. Gokak", "U. R. Ananthamurthy", "Indra III", "Chamarajanagara", "1970", "Belur", "Nizam-ud-daula", "Fazal Ali Commission", "6.35 percent", "Esuru", "Dwikuta", "Vagaraja", "Chamundaraya"];
var optDs = ["Bhima", "Udupi", "35", "Mandovi River", "Ramakrishna Hegde", "Bharatha Sindhu Rashmi", "7", "Chamarajanagar district", "1978", "1785", "Lord Hastings", "1896", "Sigismund II", "Visvesvaraya", "Gurupura River", "Pandaribai", "Shakuntala Devi", "Kaveri River", "1986", "Deva Raya II", "K. Chengalaraya Reddy", "D. R. Bendre", "None of the above", "Bijapur", "Chalukya", "3rd November", "Orange and Yellow", "1935", "H. V. Nanjundaiah", "Chavundaraya II", "Mahaviracharya", "Girish Karnad", "K. Shivaram Karanth", "Amoghavarsha I", "Channapattana", "1974", "Halebid", "Syyad Brothers", "S.K. Dhar Committee", "8.36 percent", "Kitturu", "Chatushkuta", "Yuddhamalla III", "Sri Ponna"];
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
    if(questionNo == 0 || questionNo == 4 || questionNo == 6 || questionNo == 8 || questionNo == 10 || questionNo == 14 || questionNo == 17 || questionNo == 18 || questionNo == 24 || questionNo == 26 || questionNo == 27 || questionNo == 40 || questionNo == 42){
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
    if(questionNo == 7 || questionNo == 11 || questionNo == 13 || questionNo == 16 || questionNo == 21 || questionNo == 29 || questionNo == 33 || questionNo == 35 || questionNo == 36 || questionNo == 37 || questionNo == 41 || questionNo == 43 || questionNo == 44){
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
    if(questionNo == 2 || questionNo == 9 || questionNo == 15 || questionNo == 20 || questionNo == 22 || questionNo == 25 || questionNo == 30 || questionNo == 32){
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
    if(questionNo == 3 || questionNo == 5 || questionNo == 12 || questionNo == 23 || questionNo == 28 || questionNo == 19 || questionNo == 31 || questionNo == 34 || questionNo == 38 || questionNo == 39 || questionNo == 45){
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