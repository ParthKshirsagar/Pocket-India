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
var level = 33;

var questions = ["Which one is the largest district in Uttar Pradesh by areawise?", "Jagadguru Rambhadracharya Handicapped University which is only university exclusively for the disabled is located in which district?", "What is the total number of districts in Uttar Pradesh?", "Who was the first chief Minister Uttar Pradesh?", "Who was the first Governor of Uttar Pradesh?", "In which year the Banaras Hindu University was established?", "In which year the Central Drug Research Institute was established?", "What is the total number of Lok Sabha constituency in Uttar Pradesh?", "Which one is the state flower of Uttar Pradesh?", "In which districts, the Nawabganj Bird Sanctuary is located?", "Which one is the largest district of Uttar Pradesh by population?", "When was the Allahabad High Court established?", "Who was the first Indian Chief Justices of the Allahabad High Court?", "Who was the Speaker of the first Uttar Pradesh Legislative Assembly in 1952?", "Uttar Pradesh is the _____ largest state in India by areawise?", "Which one is the longest river bridge in Uttar Pradesh?", "In which year, Govind Ballabh Pant received the Bharat Ratna Award?", "The Aligarh Muslim University was established in which year?", "Who established the Aligarh Muslim University?", "Who was the first Vice Chancellor of Banaras Hindu University?", "The Allahabad University was established in which year?", "Which day is celebrated as National Sports Day in the memory of Dhyan Chand?", "In which year The National Stadium, Delhi was renamed as Dhyan Chand National Stadium?", "Which Mughal Emperor build the Fatehpur Sikri city?", "Besides Hindi, which one is the other official language of Uttar Pradesh?", "The english daily newspaper 'The Pioneer' was published in which year?", "Who was the president of the first Lucknow session of the Indian National Congress in 1899?", "Which one is the state flower of Uttar Pradesh?", "Which one is the largest city by population in Uttar Pradesh?", "Kanpur is also known as the ___________ of the East.", "Who was the founder of the autonomous kingdom of Awadh?", "The Central Institute of Subtropical Horticulture is located at?", "In U.P. Urdu Training and Research Centre is situated in?", "Which one of the following is not a folk song of Uttar Pradesh?", "Syed Salar Fair is held at?", "Firozabad is famous for producing?", "In Uttar Pradesh, Uranium is available in the district of?", "Which one is the highest Dam in Uttar Pradesh?", "Obra Thermal Power Plant was established with the help of?", "In Uttar Pradesh, which one of the following tribes has the highest population?", "The city of Jaunpur was founded by?", "Which of the following city of Uttar Pradesh is not joined by National Highway 2?", "Who was the author of the book 'Bandi Jiwan'?", "In Uttar Pradesh, a 'Lion Safari' is being established in?", "In Uttar Pradesh, I. T. City is being established in?", "In which year the capital of United Provinces shifted from Allahabad to Lucknow?", "Which one is the only river in Uttar Pradesh that do not emerge from Himalayas?", "Jagadguru Rambhadracharya Handicapped University, which is only university in the world exclusively for the disabled is located in?", "The Deoband Movement in U.P. was started in which year?"];
var optAs = ["Lakhimpur Kheri", "Jhansi", "62", "Sucheta Kriplani", "Sucheta Kriplani", "1906", "1951", "68", "Orchids", "Bareilly district", "Agra", "1857", 'Bidhu Bhushan Malik', "Madan Mohan Verma", "2nd", "New Yamuna Bridge", "1955", "1875", "Shibli Nomani", "Madan Mohan Malaviya", "1873", "15th July", "1998", "Babur", "English", "1865", "Gopal Krishna Gokhale", "Rose", "Agra", "London", "Saadat Khan", "Jhansi", "Barabanki", "Birha", "Bahraich", "Bangles", "Jhansi", "Mata-Tila", "Soviet Russia", "Saharia", "Muhammad Tughlaq", "Agra", "Dinabandhu Mitra", "Balrampur", "Allahabad", "1920", "Ganga", "Kanpur", "1861"];
var optBs = ["Sonbhadra", "Etah", "68", "Charan Singh", "Sarojini Naidu", "1911", "1957", "72", 'Palash', "Badaun district", "Allahabad", "1869", "Iqbal Ahmad", "Atmaram Govind Kher", "3rd", "Dufferin Bridge", "1957", "1887", "Madan Mohan Malaviya", "Annie Besant", "1887", "29th August", "1999", "Akbar", "Sanskrit", "1871", "Surendranath Banerjee", "Lotus", "Lucknow", "Manchester", "Shujaat Khan", "Saharanpur", "Bareilly", "Dhola Maru", "Mankapur", "Locks", "Mirjapur", "Meja", "Japan", "Tharu", "Firoz Shah Tughlaq", "Allahabad", "Hema Chandrakar", "Etawah", "Kanpur", "1927", "Ramganga", "Chitrakoot", "1862"];
var optCs = ["Allahabad", "Bijnor", "72", "Govind Ballabh Pant", "Hormasji Peroshaw Mody", "1916", "1963", "76", "Lotus", "Unnao district", "Aligarh", "1876", "Kamala Kanta Verma", "Jagdish Sharan Agrawal", "4th", "Garmukteswar Bridge", "1960", "1901", "Sir Syed Ahmad Khan", "S. Radhakrishnan", "1895", "28th September", "2001", "Shah Jahan", "Urdu", "1896", "Anandamohan Bose", "Marigold", "Kanpur", "Liverpool", "Wajid Ali Shah", "Lucknow", "Lucknow", "Kajri", "Barabanki", "Knives", "Hamirpur", "Rihand", "Germany", "Agaria", "Ibrahim Shah Sharqi", "Varanasi", "Ram Prasad Bismil", "Maharajganj", "Lucknow", "1935", "Ghagra", "Mathura", "1866"];
var optDs = ["Shahjahanpur", "Chitrakoot", "75", "Chandra Bhanu Gupta", "Biswanath Das", "1920", "1969", "80", "Siroi Lily", "Barabanki district", "Bareilly", "1897", "Shah Muhammad Sulaiman", "Purushottam Das Tandon", "5th", "Lav Kush Barrage", "1963", "1912", "Abul Kalam Azad", "Sir Sunder Lal", "1903", "22nd December", "2002", "Aurangzeb", "None of the above", "1899", "Romesh Chunder Dutt", "Palash", "Ghaziabad", "Paris", "Ali Quli Khan", "Varanasi", "Rampur", "Rasia", "Khalilabad", "Shoes", "Lalitpur", "Ram-Ganga", "America", "Mahigir", "Sikandar Lodi", "Lucknow", "Sachindra Sanyal", "Pilibhit", "Varanasi", "1942", "Gomti", "Maihar", "1869"];

function setup(){
    getLevels();
    console.log(username);
}

function draw(){
    draw2();
    if(correct != 0 && userLevels == 33){
        sne.onclick = function(){
            updateLevels(34);
            setTimeout(function(){
                window.location.href = "Main.html";
            }, 1000);
        }
    }
    if(userLevels > 33 && correct != null){
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
    if(questionNo == 5 || questionNo == 7 || questionNo == 11 || questionNo == 16 || questionNo == 20 || questionNo == 26 || questionNo == 30 || questionNo == 33 || questionNo == 34 || questionNo == 46 || questionNo == 50){
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
    if(questionNo == 0 || questionNo == 6 || questionNo == 10 || questionNo == 13 || questionNo == 15 || questionNo == 18 || questionNo == 22 || questionNo == 23 || questionNo == 25 || questionNo == 31 || questionNo == 35 || questionNo == 41 || questionNo == 42 || questionNo == 35 || questionNo == 49 || questionNo == 45){
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
    if(questionNo == 3 || questionNo == 4 || questionNo == 9 || questionNo == 14 || questionNo == 21 || questionNo == 24 || questionNo == 28 || questionNo == 29 || questionNo == 38 || questionNo == 39 || questionNo == 43 || questionNo == 44 || questionNo == 48){
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
    if(questionNo == 2 || questionNo == 8 || questionNo == 12 || questionNo == 17 || questionNo == 19 || questionNo == 27 || questionNo == 32 || questionNo == 36 || questionNo == 37 || questionNo == 40 || questionNo == 47){
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