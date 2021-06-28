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
var level = 30;

var questions = ["Which one is the largest district by area wise in Andhra Pradesh?", "Who is the first sportsperson to received Rajiv Gandhi Khel Ratna award from Andhra Pradesh?", "Before Hyderabad was made capital in 1956, which city was the capital of Andhra Pradesh?", "In which district, the Tirumala Venkateswara Temple is located?", "Who was the first person to translate the Mahabharata into Telugu language?", "Which one was the first dynasty to rule Vijayanagara Empire?", "Who is not in the group known as Kavitraya (three great poets) of Telugu literature?", "When NT Rama Rao become the first chief Minister of Andhra Pradesh?", "Which one is the only constituency from where NT Rama Rao defeated in assembly election?", "Which one is the largest city by areawise in Andhra Pradesh?", "When the Andhra University was established?", "When Seshachalam Hills declared as biosphere reserves of India?", "The Srisailam Dam is build on which river?", "In which year the Telangana state is separated from Andhra Pradesh", "Who is known as the father of Telugu cinema?", "Which one is the first full length Telugu movie?", "Who has produced the movie Bhakta Prahlada?", "The Ramoji Film City was established in which year?", "Which one is the first telugu newspaper?", "Which one is the largest district by population in Andhra Pradesh?", "Which one is the largest dam in Andhra Pradesh?", "The Nagarjuna Sagar Dam is built on which river?", "The Vijayawada city is located on the bank of?", "Which city is also known as The Jewel of the East Coast?", 'Who is the founder of Hyderabad State Congress?', "Which one will be the capital city of Andhra Pradesh after Hyderabad?", "Which one is not a tributary of Krishna River?", "Which one is recognised as state animal of Andhra Pradesh?", "Groundnut monocrop is practised in which district of Andhra Pradesh?", "The first book that was printed in Telugu is?", "In which year P. Anandacharyulu became the President of the Indian National Congress?", "Which of the following is the first novel in Telugu?", "The author of 'Mahaprasthanam' was?", "Tanguturi Prakasam is called Andhra Kesari for his bravery exhibited during the?", "Vandemataram Struggle in Osmania University took place in which year?", "Which of the following was the capital of Ikshvakus?", "The journal 'Satihita Bodhini' was started by?", "Sribagh Pact was signed in which year?", "Osmania University was established in which year?"];
var optAs = ["Kurnool", "Pullela Gopichand", "Warangal", "Chittoor", "Pothana", "Tuluva dynasty", "Nannaya", "1978", "Kalwakurthy", "Hyderabad", "1920", "2006", "Godavari", "2011", "Raghupathi Venkaiah Naidu", "Kalidas", "Nageswara Rao", "1993", "Satya Doota", "East Godavari", "Sriram Sagar Dam", "Godavari", "Godavari River", "Visakhapatnam", "Qasim Razvi", "Visakhapatnam", "Venna", "Tiger", "Nellore", "The Bible", "1887", "Malapalli", "Arudra", "Vandemataram Movement", "1932", "Vijayapuri", "Kandukuri Veeresalingam", "1935", "1916"];
var optBs = ["Anantapur", "Karnam Malleswari", "Vijayawada", "Krishna", "Tikkana", "Saluva dynasty", "Tikanna", "1983", "Hindupur", "Vijayawada", "1926", "2008", "Krishna", "2012", "H. M. Reddy", "Lavakusa", "C. Pullaiah", '1996', "Andhra Patrika", "Guntur", "Srisailam Dam", "Krishna", "Gundlakamma River", "Vijayawada", "P.V. Narasimha Rao", "Guntur", "Indravati", "Nilgai", "Kurnool", "Rajasekhara Charitramu", "1888", "Ramachandra Vijayam", "Srirangam Sreenivasa Rao", "Non-Cooperation Movement", "1935", "Amaravati", "Raja of Pitapuram", "1937", "1917"];
var optCs = ["Kadapa", "Saina Nehwal", "Visakhapatnam", "Kurnool", "Nannayya", "Sangama dynasty", "Yerrapragada", "1985", "Tekkali", "Visakhapatnam", "1930", "2010", "Tungabhadra", "2013", "Bala Bharathi Samajam", "Bhakta Prahlada", "G Ramabrahmam", "1998", "Desabhimini", "Krishna", "Nagarjuna Sagar Dam", "Pennar", "Pennar River", "Tirupati", "Swami Ramanand Tirtha", "Vijayawada", "Bhima", "Blackbuck", "Guntur", "Kalapurnodayam", "1890", "Rajasekhara Charitramu", "Gopichand", "Boycott of Simon Commission", "1936", "Vengi", "Challapalli Bapayya", "1939", "1918"];
var optDs = ["Nellore", "Sania Mirza", "Kurnool", "Vizianagaram", "Vemana", "Aravidu dynasty", "Pothana", "1992", "Nalgonda", "Guntur", "1937", "2012", "Swarnamukhi", "2014", "C. Pullaiah", "Vandemataram", "H. M. Reddy", "2001", "Bharati", "Nellore", "Somasila Dam", "Gundlakamma", "Krishna River", "Hyderabad", "Keshavarao Koratkar", "Amaravati", "Tungabhadra", "Sambar Deer", "Anantapur", "Sathya Harishchandra", "1891", "Hemalatha", "Devulapalli Krishna Sastry", "Quit India Movement", "1938", "Vemulavada", "Gurajada Appa Rao", "1941", "1919"];

function setup(){
    getLevels();
    console.log(username);
}

function draw(){
    draw2();
    if(correct != 0 && userLevels == 30){
        sne.onclick = function(){
            updateLevels(31);
            setTimeout(function(){
                window.location.href = "Main.html";
            }, 1000);
        }
    }
    if(userLevels > 30 && correct != null){
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
    if(questionNo == 0 || questionNo == 6 || questionNo == 7 || questionNo == 11 || questionNo == 13 || questionNo == 17 || questionNo == 20 || questionNo == 22 || questionNo == 26 || questionNo == 29 || questionNo == 33 || questionNo == 35 || questionNo == 40){
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
    if(questionNo == 2 || questionNo == 3 || questionNo == 9 || questionNo == 12 || questionNo == 14 || questionNo == 19 || questionNo == 23 || questionNo == 28 || questionNo == 31 || questionNo == 34 || questionNo == 39){
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
    if(questionNo == 4 || questionNo == 8 || questionNo == 15 || questionNo == 18 || questionNo == 24 || questionNo == 32 || questionNo == 36 || questionNo == 27 || questionNo == 30){
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
    if(questionNo == 5 || questionNo == 10 || questionNo == 16 || questionNo == 21 || questionNo == 25 || questionNo == 37 || questionNo == 38){
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