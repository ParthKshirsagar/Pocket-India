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

var questions = ["Foundation stone of New Delhi was laid by whom in 1911?", "Qutub Minar is a Monument in New Delhi. It was build by whom?", "What is the original name of India Gate?", "Who was the architect of All India War Memorial (India Gate) in New Delhi?", "In which city the Rashtrapati Bhawan, Parliament House, and the Supreme court of India are located?", "For building the new city of Delhi, land was acquired under which act?", "Old Delhi also known as Purani Dilli construction was completed in which year?", "Which city in India was founded as a walled city named Shahajahanabad in 1639?", "Jama Masjid in Delhi was built by which Mughal Emperor in 1656?", "Delhi was converted into a union territory in which year?", "Which place is known for financial, commercial and business center in New Delhi?", "Mamluk/Slave dynasty ruled over the Delhi Sultanate in which period?", "Khalji Dynasty ruled over the Delhi Sultanate in which period?", "Tughlaq Dynasty ruled over the Delhi Sultanate in which period?", "Sayyid Dynasty ruled over the Delhi Sultanate in which period?", "Lodi Dynasty ruled over Delhi Sultanate in which period?", "In which year Delhi High Court was established?", "Who was the first Lieutenant Governor of Delhi?", "Who was the first Cheif Minister of Delhi?", "What is the total number of assembly constituencies in Delhi", "From which year Delhi Metro started its operation?", "The Delhi University was established in which year?", "Who was the first Vice-Chancellor of the Delhi University", "Who was the first woman Cheif Minister of Delhi?", "Who is the longest serving Cheif Minister of Delhi?", "Who was the first Police Commissioner of New Delhi?", "As of 2013, the per capita income of Delhi is the ______ highest in the country.", "Delhi is the ______ largest urban area in the world.", "Qutub minar complex was named after which Sufi Saint?", "What is the height of Lotus Temple in Delhi?", "Which state of India is center of the National Capital Region (NRC)", "Tomar Dynasty founded Lal Kot in Delhi in which year?", "'Red Fort' in Delhi was built in which year?", "Which river originated from Uttarakhand also flow in the Delhi?"];
var optAs = ["George V", "Babur", "Gateway of India", "Firoz Shah Tuglak", "Patna", "Land Acquisition act 1894", "1600", "Amritsar", "Shah Jahan", "1947", "Malviya Nagar", "1300 - 1400", "1324 - 1432", "1320 - 1414", "1414 - 1430", "1451 - 1500", "1954", "Sundar Lal Khurana", "Chaudhary Brahm Prasad", "66", "2001", "1922", "Rai Bahadur Ram Kishor", "Sushma Swaraj", "Chaudhary Brahm Prasad", "J.N. Chaturvedi", "First", "First", "Khwaja Qutbuddin Bakhtiar Kaki", "30.21 m", "Madhya Pradesh", "700", "1648", "Bhilangna"];
var optBs = ["Queen Victoria", "Qutb-ud-din Aibak", "Pride of India", "Qutb-ud-din Aibak", "New Delhi", "The Real Estate act 2016", "1732", "Old Delhi", "Akbar", "1956", "Saket", "1250 - 1385", "1290 - 1320", "1320 - 1390", "1414 - 1490", "1451 - 1524", "1962", "M.C. Pimputkar", "Gurmukh Nihal Singh", "70", "2002", "1915", "Moti Sagar", "Sheila Dikshit", "Madal Lal Khurana", "Bajrang Lal", "Second", "Second", "Mir Mukhtar Akhyar", "32.24 m", "Sikkim", "736", "1632", "Gaula"];
var optCs = ["Edward VII", "Akbar", "Heart of India", "Edwin Lutyens", "Bhopal", "Indian Tramways act 1886", "1724", "Ghaziabad", "Babur", "2000", "Connaught Place", "1324 - 1432", "1400 - 1484", "1340 - 1442", "1414 - 1451", "1451 - 1550", "1966", "Baleshwar Prasad", "Madan Lal Khurana", "62", "2007", "1925", "Hari Singh Gour", "Meira Kumar", "Sushma Swaraj", "P.S. Bhinder", "Third", "Third", "Yuz Asaf", "34.27 m", "Punjab", "679", "1738", "Nayar"];
var optDs = ["Henry VII", "Shah Jahan", "All India War Memorial", "Mirak Mirza Ghiyath", "Amritsar", "National Highways act 1956", "1648", "Noida", "Jahangir", "2007", "Vasant Kunj", "1206 - 1290", "1350 - 1435", "1335 - 1385", "1414 - 1470", "1451 - 1526", "1972", "Aditya Nath Jha", "Sahib Singh Verma", "58", "2008", "1933", "Maurice Gwyer", "Pratibha Patil", "Sheila Dikshit", "Arun Bhagat", "Fourth", "Fourth", "Abdur-Razzaq Nurul-Ain", "40.00 m", "Delhi", "900", "1683", "Yamuna"];

console.log(questions.length);
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
    if(questionNo == 0 || questionNo == 5 || questionNo == 12 || questionNo == 16 || questionNo == 18 || questionNo == 24 || questionNo == 29 || questionNo == 31){
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
    if(questionNo == 3 || questionNo == 6 || questionNo == 9 || questionNo == 11 || questionNo == 14 || questionNo == 21 || questionNo == 22 || questionNo == 28 || questionNo == 33){
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
    if(questionNo == 2 || questionNo == 7 || questionNo == 10 || questionNo == 15 || questionNo == 20 || questionNo == 23 || questionNo == 25 || questionNo == 27 || questionNo == 30 || questionNo == 34){
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
    if(questionNo == 4 || questionNo == 8 || questionNo == 13 || questionNo == 17 || questionNo == 19 || questionNo == 26 || questionNo == 32 || questionNo == 35){
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