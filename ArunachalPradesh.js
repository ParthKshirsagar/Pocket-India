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

var questions = ["Arunachal Pradesh was also known as?", "Which one country do not share its border with Arunachal Pradesh?", "In Arunachal Pradesh, the river Brahmaputra is known by which name?", "What is the total number of districts in Arunachal Pradesh?", "Which one is not a native tribe of Arunachal Pradesh", "Which one is the capital of Arunachal Pradesh?", "In which city the largest monastery of India is located?", "Which one is recognised as the State Animal of Arunachal Pradesh?", "Which one is the highest Peak in Arunachal Pradesh?", "Which one is the largest district in Arunachal Pradesh?", "Who was the first Chief Minister of Arunachal Pradesh?", "Tapi Mra climbed the Mount Everest in which year?", "In which district the Parshuram Kund is located?", "The Aji Lamu is a folk dance from which tribe?", "The Arunachal Pradesh Public Service Commission was established in which year?", "By which name outer-sub Himalayan range are called in Arunachal Pradesh?", "Which one is the largest district of Arunachal Pradesh by population?", "Which one country do not share its border with Arunachal Pradesh?", "Arunachal Pradesh is also known as the Paradise of the ___________.", "In which year, Sahitya Akademi Award given to Yeshe Dorjee Thongchi?", "What is the total number of State Assembly Constituency in Arunachal Pradesh?", "The Permanent Bench of Gauhati High Court for Arunachal Pradesh is located at?", "Arunachal Pradesh is the ________ largest State in India on areawise.", "Which Dalai Lama was born in Tawang?", "The NEFA (North-East Frontier Agency) was created in which year?", "In which year, NEFA was renamed as Arunachal Pradesh?", "Which one is the Official Language of Arunachal Pradesh?", "In which year, Namdapha Wildlife Sanctuary declared as National Park?", "Which of the following traditional agricultural practices is followed by the Apatanis of?", "The first general election to the Arunachal Pradesh Assembly was held in?", "Arunachal Pradesh share its border with how many foreign countries?", "The archeological site Bhismaknagar is located near which city?", "In which year, the North-East Frontier Agency was renamed as Arunachal Pradesh?", "The Kameng River originates in which district?"];
var optAs = ["NEFA", "China", "Kameng", "12", "Nyishi", "Tawang", "Itanagar", "Methun", "Sela Pass", "Kurung Kumey", "Gegong Apang", "2005", "Lohit", "Adi Tribe", "1985", "Shivalik mountains", "Changlang", "China", "Botanists", "2004", "55", "Itanagar", "10th", "4th", "1954", "1972", "Nyishi", "1972", "Bamboo-drip irrigation", "1978", "2", "Roing", "1970", "Tawang district"];
var optBs = ["NESA", "Bhutan", "Subansiri", "14", "Rabha", "Pasighat", "Bomdila", "Snow leopard", "Tawang", "Upper Dibang Valley", "Prem Khandu Thungan", "2007", "East Siang", "Apatani Tribe", "1988", "Mishmi Hills", "Tirap", "Bhutan", "Zoologist", "2005", "57", "Naharlagun", "12th", "5th", "1956", "1973", "Adi", "1975", "Zabo system", "1979", "3", "Dirang", "1972", "West Kameng district"];
var optCs = ["NEFF", "Myanmar", "Siang", "19", "Apatani", "Itanagar", "Pasighat", "Wild Deer", "Kangte", "West Kameng", "Mukut Mithi", "2009", "East Kameng", "Nishing Tribe", "1991", "Kachar Hills", "Papum Pare", "Myanmar", "Ecologist", "2006", "59", "Along", "14th", "6th", "1957", "1974", "Hindi", "1980", "Paddy-cum-fish culture system", "1980", "4", "Pasighat", "1976", "East Siang district"];
var optDs = ["None of the above", "Nepal", "Tirap", "23", "Adi", "Shillong", "Tawang", "Boar", "Myodia", "Upper Siang", "Dorjee Khandu", "2012", "West Kameng", "Monpa Tribe", "1993", "Barail Range", "West Siang", "Nepal", "Archeologist", "2007", "60", "Bomdila", "15th", "7th", "1960", "1975", "English", "1983", "Panikheti system", "1981", "5", "Naharlagun", "1980", "Lohit district"];
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
    if(questionNo == 4 || questionNo == 7 || questionNo == 10 || questionNo == 13 || questionNo == 18 || questionNo == 25 || questionNo == 30){
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
    if(questionNo == 0 || questionNo == 6 || questionNo == 11 || questionNo == 12 || questionNo == 16 || questionNo == 17 || questionNo == 21 || questionNo == 32  || questionNo == 23 || questionNo == 34){
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
    if(questionNo == 3 || questionNo == 5 || questionNo == 8 || questionNo == 15 || questionNo == 19 || questionNo == 22 || questionNo == 24 || questionNo == 28 || questionNo == 29){
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
    if(questionNo == 2 || questionNo == 9 || questionNo == 14 || questionNo == 20 || questionNo == 26 || questionNo == 27 || questionNo == 31 || questionNo == 33 || questionNo == 35){
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