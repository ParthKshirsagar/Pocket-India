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
var level = 29;

var questions = ["The first Oriya Magazine 'Bodha Dayini' was published from?", "Which one is the first daily newspaper of Odisha?", "Who was the first person to received Jnanpith Award for Oriya language?", "Who was the creator of the dhumpa sangita?", "On which river, the Hirakud Dam is built?", "In which year the first Oriya Magazine 'JNANARUNA' was published?", "Which one is the largest district of Odisha by area?", "What is the total number of district in Odisha?", "Which ruler started the construction of Konark Sun Temple?", "The Lingaraj Temple at Bhubaneswar was constructed by?", "Which one was the capital of Odisha before Bhubneswar?", "In which year Huen tsang vists Odisha?", "Who wrote the book Gita Govinda?", "Which poet is known as the Kabi Samrata?", "The Konark Sun Temple was included in the World Heritage Site status in which year?", "The Jagannath Puri Temple was built in which year?", "The famous war of Kalinga was fought in which year?", "In Ancient times, Odisha was known by the name of?", "Who was the first Chief Minister of Odisha?", "In which year, Chilika Lake was designated as the first Indian wetland of international importance?", "Which King build the Konark Sun Temple in Odisha?", "When was the super cyclone held in Odisha?", "The hot water spring Atri is located in?", "Who was the founder of the Mahima Dhrama?", "Who was the last independent ruler of the medieval Kingdom of Odisha?", "When was Sambalpur united with Odisha?", "King Kharavela belonged to which royal dynasty?", "Who was the Editor of Utkal Dipika published in 1866?", "The first Oriya movie 'Sita Bibaha' was released in which year?", "What is the total number of Lok Sabha seats in Odisha?", "What is the official language of Odisha state?", "What is the literay rate of Odisha?", "What is Odisha Area Rank in India?", "What is Odisha Population Rank in India?", "Who is the Current Chief Minister of Odisha?", "Who is the Current Governor of Odisha?", "Which is the Odisha state Animal?", "Which is the Odisha state Tree?", "Which is the Odisha state Flower?"];
var optAs = ["Puri", "Kujibar Patra", "Gopinath Mohanty", "Madhusudan Rao", "Mahanadi River", "1849", "Cuttack", "30", "Indravarman", "Soma Dynasty", "Berhampur", '630 AD', "Jayadeva", "Upendra Bhanja", "1984", "1161", "296 BC", "Kalinga", "Harekrushna Mahatab", "1990", "Ananga Bhima Deva II", "1999", "Kendrapara District", "Mahima Gosain", "Kapilendradeva", "1936", "Chedi", "Gouri Shankar Roy", "1933", "21", "Urdu", "55.26%", "9th", "11th", "Giridhar Gamang", "Rameshwar Thakur", "Hangul", "Chinar tree", "Kanikonna"];
var optBs = ["Balasore", "Dainika Asha", "Pratibha Ray", "Gangadhar Meher", "Bhima River", "1842", "Nayagarh", "32", "Narasimhadeva I", "Naga Dynasty", "Puri", "657 AD", "Gopabandhu Dash", "Gopabandhu Dash", "1990", "1150", "265 BC", 'Kurukshetra', "Biswanath Das", "1981", "Narasimhadeva I", "2001", "Anugulstrict District", "Siddha Baba", "Govinda Vidyadhar", "1912", "Satavahana", "Nilamani Vidyaratna", "1936", "51", "Malyalam", "73.45%", "5th", "3rd", "Hemananda Biswal", "Ganeshi Lal", "Blackbuck", "Sal", "Peony"];
var optCs = ["Bhubaneswar", "Bodha Dayini", "Fakir Mohan Senapati", "Baladev Rath", "Krishna River", "1822", "Mayurbhanj", "24", "Bhanu Deva I", "Satavahana Dynasty", "Rourkela", "605 AD", "Narottama Dasa", "Radhanath Ray", "1970", "1001", "270 BC", "Konkan", "Biju Patnaik", "1985", "Anantavarman", "1998", "Khurda District", "Biswanath Baba", "Mukundadeva", "1901", "Nanda", "Baikunth Nath De", "1928", "52", "Odia", "88.06%", "8th", "2nd", "Naveen Patnaik", "M. M. Rajendran", "Sambar", "Coconut tree", "Ashoka"];
var optDs = ["Cuttack", "Utkal Deepika", "Sachidananda Routray", "Mohan Senapati", "Tapti River", "None of the above", "Malkangiri", "21", "Rajaraja II", "Ganga Dynasty", "Cuttack", "645 AD", "Vidyapati", "Baladev Ratha", "1986", "1109", "261 BC", "None of the above", "Nabakrushna Choudhury", "1987", "Ananga Bhima Deva II", "2000", "Gajapati District", "Bhima Bhoi", "Prataprudradeva", "1909", "Maurya", "Fakir Mohan Senapati", "1932", "None of These", "Marathi", "None of These", "None of These", "None of These", "None of These", 'None of These', "Indian elephant", "Indian fig tree", "Palash"];

function setup(){
    getLevels();
    console.log(username);
}

function draw(){
    draw2();
    if(correct != 0 && userLevels == 29){
        sne.onclick = function(){
            updateLevels(30);
            setTimeout(function(){
                window.location.href = "Main.html";
            }, 1000);
        }
    }
    if(userLevels > 29 && correct != null){
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
            percentage.innerHTML = `${Math.round((correct/40)*100)}%`;
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
    if(questionNo == 5 || questionNo == 8 || questionNo == 24 || questionNo == 32 || questionNo == 26 || questionNo == 36 || questionNo == 38 || questionNo == 40){
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
    if(questionNo == 2 || questionNo == 3 || questionNo == 10 || questionNo == 21 || questionNo == 30 || questionNo == 22 || questionNo == 33 || questionNo == 37){
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
    if(questionNo == 12 || questionNo == 18 || questionNo == 39){
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
    if(questionNo == 0 || questionNo == 4 || questionNo == 6 || questionNo == 7 || questionNo == 9 || questionNo == 11 || questionNo == 13 || questionNo == 14 || questionNo == 15 || questionNo == 16 || questionNo == 17 || questionNo == 19 || questionNo == 20 || questionNo == 23 || questionNo == 25 || questionNo == 27 || questionNo == 28 || questionNo == 29 || questionNo == 31 || questionNo == 34 || questionNo == 35){
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