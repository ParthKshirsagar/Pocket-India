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

var questions = ["What is the capital of Andaman and Nicobar Islands?", "Which of the following cities is close to Andaman and Nicobar?", "Which country established first European Colony in Andamand and Nicobar Islands?", "The highest Saddle Peak is?", "Which one is the most widely spoken language in Andaman And Nicobar?", "What is the total number of National Parks in Andaman Nicobar?", "What is the total number of districts in Andaman and Nicobar Islands?", "Where is Andaman and Nicobar Islands situated?", "From what language are the names of the Andaman and Nicobar Islands derived?", "What line of latitude separates the Andaman Islands from the Nicobar Islands?", "The Nicobar island comprise an area about one-fourth of that of the Andaman Island. How many island are there in total in the Nicobar Island?", "What type of sub-national administrative division within India are the Andaman and Nicobar Island?", " Total number of wildlife sanctuaries in Andaman Nicobar Islands is", "Which High Court serves as the judiciary of Andaman Nicobar Islands?", "European reached Andaman Nicobar Islands in the year", "Which country established first European colony in Andaman Nicobar Islands", "For how many years Japanese did occupied Andaman Nicobar during World War II", "Which one is the state bird of Andaman and Nicobar Islands?", "Which island contains the only active volcano in South Asia?", "In which year Andaman Nicobar is declared as a Union Territory of India?", "The construction of Cellular Jail was started in?", "What is the total number of islands in Andaman Nicobar?", "Which island contains the only active volcano in India?", "Which one is the headquarters of South Andaman?", "What is the total length of Nicobar Islands?", "Europeans reached the Andaman and Nicobar Islands in the year?", "What is the sex ratio of Andaman and Nicobar Islands?", "How many Lok Sabha seats are in Andaman and Nicobar Islands?", "Which one is the headquarter of North and Middle Andaman?", "What is the total number of inhabited villages in Andaman and Nicobar Island group?", "Which one of these is the headquarters of Nicobar island group?", "Which one of these is the famous tribe of Andaman and Nicobar island group?", "Which one of these Chola kings captured Nicobar Island and used it as his naval base?"];
var optAs = ["Port Blair", "Mumbai", "Denmark", "715 meter", "Bengali", "10", "5", "Gulf of Mannar", "Punjabi", "10ᵒN", "22", "Territorial autonomous district", "96", "Karnataka High Court", "1755", "Denmark", "Three years", "Woodpecker", "Barren Island", "1947", "1905", "572", "Barren Island", "Port Blair", "298 Km", "1755", "846", "1", "Port Blair", "401", "Car Island", "Khasi", "Rajendra Chola I"];
var optBs = ["Indira Point", "Kolkata", "France", "732 meter", "English", "9", "3", "Bay of Bengal", "Malay", "The Equator", "40", "Division", "83", "Madras High Court", "1768", "Spain", "Four years", "Common Blackbird", "Narcondam Island", "1956", "1896", "498", "Smith Island", "Barren Island", "259 Km", "1768", "946", "12", "Mayabunder", "410", "Mayabunder", "Jarwa", "Koluttunga I"];
var optCs = ["Chennai", "Chennai", "Spain", "610 meter", "Hindi", "4", "4", "Lakshadweep Sea", "Tamil", "20ᵒN", "10", "Union Territory", "68", "Calcutta High Court", "1712", "England", "One year", "Stock dove", "Smith Island", "1953", "1898", "402", "Neil Island", "Kiribati", "236 Km", "1712", "936", "13", "Kakana", "501", "South Andaman", "Bhil", "Raja Raj Chola"];
var optDs = ["Car Nicobar", "Tripura", "England", "615 meter", "Tamil", "2", "7", "Arabian Sea", "Hindi", "30ᵒN", "32", "State", "76", "Orissa High Court", "1739", "France", "Two Years", "Wood Pigeon", "Neil Island", "1950", "1902", "452", "Narcondam Island", "Car Island", "310 Km", "1739", "836", "4", "Garachama", "510", "Port Blair", "Goro", "Karikala"];
console.log

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