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
var level = 32;

var questions = ["In which year the capital of Gujarat shifted from Ahmedabad to Gandhinagar?", "Who was the first Chief Minister of Gujarat?", "The British East India Company established its first factory in?", "Which one is the longest river in Gujarat?", "Gujarat is the largest producer of _______.", "On which river the Sardar Sarovar Dam is built?", "Sabarmati Ashram was built in which year?", "What is the total number of districts in Gujrat?", "Which one is the largest District of Gujarat?", "Which district have the largest forest area in Gujarat?", "What is the total number of National Park and Wildlife Sanctuaries in Gujrat?", "The Gir Forest National Park was established in which year?", "Which city is also known as the Diamond City of India?", "Which one is an ancient Indus valley civilization city located in Gujarat?", "In which year the AMUL (Anand Milk Federation Union Limited) was founded?", "What is the name of the first full length Gujrati Film?", "The Gujarati Sahitya Parishad was established in which year?", "Who was the first President of Gujarati Sahitya Parishad?", "Who had built the Sun Temple of Modhera?", "The Battle of Assaye was fought in which year?", "What is the total number of Parliamentary constituency in Gujarat?", "The Gujarat High Court was established in which year?", "The first Chief Justice of Gujarat was?", "Who was the first Governor of Gujarat?", "Who is the longest serving Chief Minister of Gujarat?", "The Taranga Jain Temple was constructed by?", "Which one is the smallest district by area wise in Gujarat?", "The UNESCO heritage site 'Rani ki vav' is located in which district?", "Who had been conferred the title of Avanijanasraya after driven out Arab invaders from Gujarat?", "Who was the last Hindu ruler of Gujarat?", "Who had established the Sultanate of Gujarat?", "Which one was the first capital of Gujarat Sultanate?", "Which Mughal Emperor was born at Dahod in Gujarat?", "Which one is the first European power to arrive in Gujarat?", "In which year the Navnirman Andolan was started in Gujarat?", "In which year, the construction of Sardar Sarovar Dam was started?", "Total number of memebers in the Gujarat Legislative Assembly is?", "Who was the first speaker of the Gujarat Legislative Assembly?", "Which poet had been named as Raashtreeya Shaayar by Mahatma Gandhi?", "Who was the first Gujarati laureates to win the Jnanpith Award?", "Which one is the first original novel of Gujarati literature?", "Who wrote the novel Saraswatichandra?", "Which poet is popularly known as Kavi Kant?", "The first Gujarati newspaper 'Bombay Samachar' was published in which year?", "Where is the world's largest graveyard of ships is located?", "Which one is the largest national park in Gujarat?", "The oldest Museum in Gujarat, the Kutch Museum was established in which year?", "Who among the following founded the Ahmedabad Textile Labour Association?", "The Waghera Uprising happened in?"];
var optAs = ["1965", "Babubhai J. Patel", "Ahmedabad", "Sabarmati", "Rice", "Daman Ganga River", "1917", "28", "Junagadh", "Dang", "5 National Park and 17 Sanctuaries", "1962", "Rajkot", "Harappa", "1942", "Shethani", "1905", "Ambalal S. Desai", "Bhimdev I", "1803", "22", "1956", "Kantilal Desai", "Shriman Narayan", "Narendra Modi", "Karna", "Dang", 'Bharuch', "Narasimhavarman I", "Karandev", "Ahmad Shah I", "Ahmedabad", "Akbar", "France", "1972", "1982", "156", "Kalyanji V. Mehta", "Umashankar Jethalal Joshi", "Rajendra Shah", "Karan Ghelo", "Nandshankar Mehta", "Abbas Abdulali Vasi", "1820", "Alang", "Vansda National Park", "1877", "Mahatma Gandhi", "Surat"];
var optBs = ["1968", "Chimanbhai Patel", "Surat", "Mahi", "Milk", "Tapti River", "1919", "33", "Jamnagar", "Gir Somnath", "4 National Park and 19 Sanctuaries", "1965", "Surat", "Mehargarh", "1946", "Ranakdevi", "1908", "Keshavlal Dhruv", "Karandev I", "1804", "26", "1960", "Nomanbhai Miabhoy", "Nityanand Kanungo", "Jivraj Narayan Mehta", "Kumarapala", "Gandhinagar", "Amreli", "Vikramaditya II", "Visaladeva", "Muzaffar Shah I", "Anhilwad Patan", "Shah Jahan", "English", "1974", "1985", "171", 'Mansinhji Rana', "Avinash Vyas", "Umashankar Joshi", "Bhatt nu Bhopalu", "Navalram Pandya", "Sursinhji Takhtasinhji Gohil", "1822", "Kandla", "Marine National Park", "1891", "J. B. Kripalani", "Rajkot"];
var optCs = ["1970", "Balwantrai Mehta", "Gandhinagar", "Narmada", "Wheat", "Sabarmati River", "1920", "35", "Kutch", "Tapi", "4 National Park and 21 Sanctuaries", "1968", "Gandhinagar", "Lothal", "1951", "Narsinh Mehta", "1912", "Govardhanram Tripathi", "Siddharaj Jaisinh", "1805", "28", "1963", "Prafullchandra Bhagvati", "Mehdi Nawaz Jung", "Shankersinh Vaghela", "Ajayapala", "Porbandar", "Bhavnagar", "Pulakesi", "Mularaja", "Bahadur Shah", "Muhammadabad", "Aurangzeb", "Dutch", "1975", "1987", "180", "Raghavji Leuva", "Jhaverchand Meghani", "K. M. Munshi", "Veermati", "Bholanath Sarabhai", "Manishankar Ratnji Bhatt", "1831", "Mandavi", "Blackbuck National Park", "1897", "N. M. Joshi", "Baroda"];
var optDs = ["1982", "Jivraj Narayan Mehta", "Rajkot", "Tapi", "Mango", "Narmada River", "1922", "39", "Bhavnagar", "Amreli", "3 National Park and 15 Sanctuaries", "1970", "Ahmedabad", "Mohenjo-Daro", "1962", 'Gunasundari', "1916", "Narsinhrao Divetia", "Kumarapala", "1807", "32", "1965", "Sunderlal Desai", "Sharda Mukherjee", "Chimanbhai Patel", "Bhima II", "Mahisagar", "Patan", "Harsha", "Tribhuvanapala", "Mahmud Begada", "None of the above", "Bahadur Shah I", "Portuguese", "1976", "1990", "182", "Kundanlal Dholakia", "Govardhanram Tripathi", "Raghuveer Chaudhari", "Ishvara Prarthanamala", "Govardhanram Madhavaram Tripathi", "Dalpatram Dahyabhai Travadi", "1840", "Porbandar", "Gir Forest National Park", "1899", "Sardar Vallabhbhai Patel", "Ahmedabad"];

function setup(){
    getLevels();
    console.log(username);
}

function draw(){
    draw2();
    if(correct != 0 && userLevels == 32){
        sne.onclick = function(){
            updateLevels(33);
            setTimeout(function(){
                window.location.href = "Main.html";
            }, 1000);
        }
    }
    if(userLevels > 32 && correct != null){
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
    if(questionNo == 2 || questionNo == 5 || questionNo == 10 || questionNo == 12 || questionNo == 15 || questionNo == 17 || questionNo == 19 || questionNo == 34 || questionNo == 25 || questionNo == 30 || questionNo == 37 || questionNo == 40 || questionNo == 44 || questionNo == 50){
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
    if(questionNo == 4 || questionNo == 6 || questionNo == 9 || questionNo == 13 || questionNo == 14 || questionNo == 16 || questionNo == 22 || questionNo == 23 || questionNo == 27 || questionNo == 32 || questionNo == 33 || questionNo == 36 || questionNo == 41 || questionNo == 45){
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
    if(questionNo == 3 || questionNo == 7 || questionNo == 24 || questionNo == 29 || questionNo == 35 || questionNo == 38 || questionNo == 43 || questionNo == 47){
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
    if(questionNo == 0 || questionNo == 8 || questionNo == 11 || questionNo == 18 || questionNo == 20 || questionNo == 21 || questionNo == 26 || questionNo == 28 || questionNo == 31 || questionNo == 39 || questionNo == 42 || questionNo == 46 || questionNo == 48 || questionNo == 49){
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