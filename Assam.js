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
var level = 21;

var questions = ["In which hill top, the Kamakhya Temple is located?", "In which year, the capital of Assam shifted from Shillong to Dispur?", "The Assam Sahitya Sabha was first founded in the year", "The first conference of Assam Sahitya Sabha was held at", "Who was the first President of Assam Sahitya Sabha?", "What is the total number of national parks in Assam?", "What is the total number of bridges over the Brahmaputra river?", "The Naranarayan Setu connects the Pancharatna Town with which city?", "Who was the first Chief Minister of Assam", "In which year was Srimanta Shankardev born?", "In which year was the first Assamese film Joymoti released?", "The Abhiruchi Sports Day is celebrated on?", "Bhogeswar Baruah wins a medal in the ________ Asian Games.", "Who was the last king of Ahom kingdom in Assam?", "In which year was the Treaty of Yandabo signed?", "Which one is the first assamese novel?", "The state anthem 'O Mur Apunar Desh' was first published in the magazine named?", "The first Assamese magazine Orunodoi was published in which year?", "The first Assamese to compile a dictionary named 'HemKosh' is?", "Who is the first Assamese to received 'Jnanpith Award'?", "What is the total number of districts in Assam?", "Hiuen Tsang visited Assam during the reign of?", "In which year, Sukapha established Ahom Kingdom in Charaideo?", "The war of Saraighat was fought between Ahom and Mughal in which year?", "Mahatma Gandhi first visited Assam in which year?", "The first book to win Sahitya Akademi Award is?", "Who is the first barrister of Assam?", "Which one is the largest district in Assam by area wise?", "In which district, Garampani Wildlife Sanctuary is located?", "In which year, National Games was held in Assam?", "Gibon Wildlife Sanctury is located at?", "The Guwahati Tea Auction Centre was established in which year?", "Which town is also known as the Manchester of Assam", "The Brahmaputra Cracker and Polymer Limited Industry is located at?"];
var optAs = ["Nilachal Hill", "1950", "1902", "Kamrup", "Lakshminath Bezbaroa", "3", "4", "Kalibor", "Bishnuram Medhi", "1352", "1922", "January 13th", "1962", "Gobar Roja", "1802", "Mirijiyori", "Bahi", "1836", "Dimbeswar Neog", "Indira Goswami", "25", "Pushya Varman", "1253", "1652", "1918", "Iyaruingam", "Haliram Deka", "Barpeta", "Golaghat", "2002", "Chirang", "1970", "Jorhat", "Makum"];
var optBs = ["Chitrachal Hill", "1955", "1912", "Sivasagar", "Padmanath Gohain Baruah", "4", "5", "Tezpur", "Tarun Ram Phukan", "1432", "1935", "August 12th", "1966", "Sutanphaa", "1826", "Podum Kunwari", "Jonaki", "1846", "Chandradhar Barua", "Birendra Kumar Bhattacharya", "26", "Mahendra Varman", "1272", "1667", "1919", "Bonphool", "Pranab kumar Borooah", "Karbi Anglong", "Sivsagar", "2004", "Dibrugarh", "1972", "Sualkuchi", "Mariani"];
var optCs = ["Sandhyachal Hill", "1971", "1917", "Barpeta", "Hemchandra Goswami", "5", "6", "Bongaigaon", "Gopinath Bordoloi", "1449", "1938", "August 30th", "1978", "Purandar Singha", "1830", "Bhanumati", "Surabhi", "1872", "Hemchandra Goswami", "Bhupen Hazarika", "27", "Bhaskar Varman", "1296", "1670", "1920", "Alakananda", "Anundoram Borooah", "Sivsagar", "Karbi Anglong", "2005", "Kokrajhar", "1975", "Diphu", "Lepetkata"];
var optDs = ["Jogini Hill", "1973", "1921", "Dhuburi", "Rajanikanta Bordoloi", "7", "7", "Jogighopa", "None of the Above", "1465", "1942", "September 3rd", "1972", "Jogeswar Singha", "1832", "Sudharmar Upakhyan", "Jonbiri", "1882", "Hemchandra Barua", "Hemchandra Barua", "34", "Brahma Pala", "1309", "1671", "1921", "Pita Putra", "Parul Das", "Dibrugarh", "Dibrugarh", "2007", "Jorhat", "1977", "Digboi", "Nagaon"];

function setup(){
    getLevels();
    console.log(username);
}

function draw(){
    draw2();
    if(correct != 0 && userLevels == 21){
        sne.onclick = function(){
            updateLevels(22);
            setTimeout(function(){
                window.location.href = "Main.html";
            }, 1000);
        }
    }
    if(userLevels > 21 && correct != null){
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
            percentage.innerHTML = `${Math.round((correct/35)*100)}%`;
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
    if(questionNo == 0 || questionNo == 4 || questionNo == 7 || questionNo == 8 || questionNo == 10 || questionNo == 11 || questionNo == 15 || questionNo == 17 || questionNo == 23 || questionNo == 28 || questionNo == 30 || questionNo == 35){
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
    if(questionNo == 5 || questionNo == 6 || questionNo == 12 || questionNo == 14 || questionNo == 16 || questionNo == 19 || questionNo == 21 || questionNo == 27 || questionNo == 29 || questionNo == 34){
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
    if(questionNo == 3 || questionNo == 9 || questionNo == 13 || questionNo == 20 || questionNo == 22 || questionNo == 25 || questionNo == 26 || questionNo == 31 || questionNo == 32){
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
    if(questionNo == 2 || questionNo == 18 || questionNo == 24 || questionNo == 33){
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