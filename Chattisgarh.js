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

var questions = ["Which of the following is the Chhattisgarh state Bird?", "Which of the following is the Chhattisgarh state Flower?", "Which of the following is the Chhattisgarh state Tree?", "What is the capital of Chhattisgarh?", "How many tehsils are there in Chhattisgarh state?", "How many universities are there in Chhattisgarh?", "The Sex-Ratio (census 2001) in Chhattisgarh state is?", "The Rate of population increase (1991-2001) in Chhattisgarh was?", "The average height of the Dandakaranya region is?", "No. of habitated villages in Chhattisgarh is?", "No. of urban towns in Chhattisgarh is?", "What is the area of Chhattisgarh?", "When was Chhattisgarh state formed?", "The famous Chitrakot waterfall in Chhattisgarh state is situated in?", "Export of Iron-ore from Bastar is done from which of the following sea ports?", "Which place produced the Maximum Iron-Ore in Chhattisgarh?", "In which districts of Chhattisgarh the Korba super power station is established?", "The only Jute industry of Chhattisgarh is located in which district?", "Dandkaranya project is located in which district?", "In which of the following districts are Gold and Quartize found in the state?", "In which district of the state have precious stone Alexgender and Diamond reserve found?", "Who is the first woman in the Council of Ministers in the state?", "Padum Lal and Punna Lal Bakshi the famous litterateur belongs to which of the following districts?", "What is the total number of M.L.A. seats in Chhattisgarh?", "Kutumsar cave is situtated in which district of Chhattisgarh?", "In which of the following districts is Maa danteshwari temple located?", "In which of the following districts was the Bhilai institute of technology in the memory of Seth Bal Krishan established in September, 1986?", "At which of the following rivers is Mini Mata project situated?", "Density of population (census 2001) in the state is?", "Ari Dongari range of district Kanker produces Iron-ore. In which of the tehsils is this range situated?", "Which district of Chhattisgarh state has maximum no. of tehsils?", "In which of the districts is Hasdo-Raipur Coal field situated?", "Find the incorrect pair of the projects and beneficiary districts.", "In which of the following districts is Kosse cloth prepared by Kosta tribe?", "Bristal and Panama are the main cigrettes which are manufactured in Chhattisgarh. Where are the Bristal cigrattes manufactured?", "Where is the South-Eastern coal field Ltd?", "In which of the following districts are Joggimara caves situated?", "Where is the Bamleshwari temple situated?", "In which of the following districts is the maximum concentration of population?"];
var optAs = ["Black necked crane", "Marigold", "Mango", "Bilaspur", "16", "2", "952", "16.21", "200 metre", "18,720", "189", "1,30,194 km²", "31st Oct, 1999", "Baghel Khand Plateau", "Chennai", "Rajnandgaon", "Raigarh", "Raigarh", "Raipur", "Rajnandgaon", "Raigarh", "Smt. Pratibha Shah", "Rajnandgaon", "60", "Dantewara", "Kanker", "Durg", "Mahanadi", "130/km²", "Bhanupratap Pur", "Janjgir", "Bilaspur Sarguja", 'Perry Raipur', "Durg", "In Durg", "In Jagdalpur", "Jashpoor", "Dongargarh", "Raipur"];
var optBs = ["Black crested bulbul", "Kachnar", "Hollong", "Naya Raipur", "48", "3", "962", "17.06", "400 metre", "20,308", "200", "1,35,198 km²", "1st Nov, 1999", "Chhattisgarh Basin", "Vishakhapatnam", "Bastar", "Korba", "Korea", "Jagdalpur", "Sajapur", "Jagadalpur", "Smt. Geeta Devi Singh", "Bilaspur", "80", "Mahasamund", "Dantewara", "Rajnandgaon", "Hasdo", "154/km²", "Narharpur", "Rajnandgaon", "Sarguja Jashpoor", "Mini Mata Bilaspur", "Bastar", "In Raigarh", "In Bilaspur", "Sarguja", "Antagarh", "Durg"];
var optCs = ["House Sparrow", "Rhododendron", "Peepal Tree", "Jagdalpur", "149", "7", "898", "18.06", "800 metre", "20,133", "203", "3,02,772 km²", "31st Oct, 2000", "Jashpoor-Samri Region", "Cochin", "Korea", "Sarguja", "Jashpoor", "Bastar", "Sivini", "Raipur", "Smt. Phulo Devi Netam", "Raipur", "90", "Korea", "Bastar", "Raipur", "Eb", "156/km²", "Antagarh", "Raipur", "Bilaspur Korba", "Jonk Jashpoor", "Raigarh", "In Bilaspur", "In Durg", "Bilaspur", "Bishrampur", "Bilaspur"];
var optDs = ["Common hill myna", "Kopu phool (rhynchostylis gigantea)", "Sal tree", "Durg", "100", "5", "992", "22.26", "900 metre", "20,478", "478", "1,60,194 km²", "1st Nov, 2000", "Dandkaranya Region", "Mumbai", "Mahasamund", "Raipur", "Raipur", "Durg", "Durg", "Kanker", "Smt. Shyama Dhruv", "Bastar", "93", "Bastar", "Raipur", "Jagdalpur", "Shiv Nath", "160/km²", "Kanker", "Durg", "Korba Raigarh", "Tandula Durg", "Korba", "In Raipur", "In Raipur", "Kavardha", "Bilaspur", "Bastar"];
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
    if(questionNo == 6 || questionNo == 7 || questionNo == 8 || questionNo == 32 || questionNo == 10 || questionNo == 20 || questionNo == 22 || questionNo == 25 || questionNo == 9 || questionNo == 34){
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
    if(questionNo == 5 || questionNo == 11 || questionNo == 13 || questionNo == 16 || questionNo == 17 || questionNo == 18 || questionNo == 23 || questionNo == 27 || questionNo == 29 || questionNo == 30 || questionNo == 35 || questionNo == 37 || questionNo == 38){
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
    if(questionNo == 2 || questionNo == 3 || questionNo == 4 || questionNo == 14 || questionNo == 15 || questionNo == 26 || questionNo == 36){
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
    if(questionNo == 0 || questionNo == 12 || questionNo == 19 || questionNo == 21 || questionNo == 24 || questionNo == 28 || questionNo == 31 || questionNo == 33 || questionNo == 39 || questionNo == 40){
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