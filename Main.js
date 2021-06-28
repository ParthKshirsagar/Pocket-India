var database = firebase.database();
var username = sessionStorage.getItem("username");
var all = document.getElementById("all");
var all2 = document.getElementById("all2");
var userLevels;
var Next1 = document.getElementById("Next1");
var Back1 = document.getElementById("Back1");
var Next2 = document.getElementById("Next2");
var Back2 = document.getElementById("Back2");
var Next3 = document.getElementById("Next3");
var Back3 = document.getElementById("Back3");
var Next4 = document.getElementById("Next4");
var Back4 = document.getElementById("Back4");
var Next5 = document.getElementById("Next5");
var Back5 = document.getElementById("Back5");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var button6 = document.getElementById("button6");
var button7 = document.getElementById("button7");
var button8 = document.getElementById("button8");
var button9 = document.getElementById("button9");
var button10 = document.getElementById("button10");
var button11 = document.getElementById("button11");
var button12 = document.getElementById("button12");
var button13 = document.getElementById("button13");
var button14 = document.getElementById("button14");
var button15 = document.getElementById("button15");
var button16 = document.getElementById("button16");
var button17 = document.getElementById("button17");
var button18 = document.getElementById("button18");
var button19 = document.getElementById("button19");
var button20 = document.getElementById("button20");
var button21 = document.getElementById("button21");
var button22 = document.getElementById("button22");
var button23 = document.getElementById("button23");
var button24 = document.getElementById("button24");
var button25 = document.getElementById("button25");
var button26 = document.getElementById("button26");
var button27 = document.getElementById("button27");
var button28 = document.getElementById("button28");
var button29 = document.getElementById("button29");
var button30 = document.getElementById("button30");
var button31 = document.getElementById("button31");
var button32 = document.getElementById("button32");
var button33 = document.getElementById("button33");
var button34 = document.getElementById("button34");
var button35 = document.getElementById("button35");
var button36 = document.getElementById("button36");
var popUp = document.getElementById("pop-up");
var button2a = document.getElementById("2a");
var button3a = document.getElementById("3a");
var button4a = document.getElementById("4a");
var button5a = document.getElementById("5a");
var button6a = document.getElementById("6a");
var button7a = document.getElementById("7a");
var button8a = document.getElementById("8a");
var button9a = document.getElementById("9a");
var button10a = document.getElementById("10a");
var button11a = document.getElementById("11a");
var button12a = document.getElementById("12a");
var button13a = document.getElementById("13a");
var button14a = document.getElementById("14a");
var button15a = document.getElementById("15a");
var button16a = document.getElementById("16a");
var button17a = document.getElementById("17a");
var button18a = document.getElementById("18a");
var button19a = document.getElementById("19a");
var button20a = document.getElementById("20a");
var button21a = document.getElementById("21a");
var button22a = document.getElementById("22a");
var button23a = document.getElementById("23a");
var button24a = document.getElementById("24a");
var button25a = document.getElementById("25a");
var button26a = document.getElementById("26a");
var button27a = document.getElementById("27a");
var button28a = document.getElementById("28a");
var button29a = document.getElementById("29a");
var button30a = document.getElementById("30a");
var button31a = document.getElementById("31a");
var button32a = document.getElementById("32a");
var button33a = document.getElementById("33a");
var button34a = document.getElementById("34a");
var button35a = document.getElementById("35a");
var button36a = document.getElementById("36a");
var state = 0;

function setup(){
    console.log(username);
    getLevels();
}

function draw(){
    if(username == null || username == "default"){
        all2.style.display = "block";
        all.style.display = "none";   
        document.body.style.backgroundColor = "#C54545";
        document.body.style.backgroundImage = "none";
        document.body.style.display = "flex";
        document.body.style.justifyContent = "center";
        document.body.style.alignItems = "center";
    }
    else{
        all2.style.display = "none";
    }
    if(userLevels != null){
        if(userLevels>=1){
            button2.onclick = function(){
                popUp.style.top = "20px";
                setTimeout(function(){
                    popUp.style.top = "-120px";
                }, 3000);
            }
            button3.onclick = function(){
                popUp.style.top = "20px";
                setTimeout(function(){
                    popUp.style.top = "-120px";
                }, 3000);
            }
            button4.onclick = function(){
                popUp.style.top = "20px";
                setTimeout(function(){
                    popUp.style.top = "-120px";
                }, 3000);
            }
            button5.onclick = function(){
                popUp.style.top = "20px";
                setTimeout(function(){
                    popUp.style.top = "-120px";
                }, 3000);
            }
            button6.onclick = function(){
                popUp.style.top = "20px";
                setTimeout(function(){
                    popUp.style.top = "-120px";
                }, 3000);
            }
            button7.onclick = function(){
                popUp.style.top = "20px";
                setTimeout(function(){
                    popUp.style.top = "-120px";
                }, 3000);
            }
            button8.onclick = function(){
                popUp.style.top = "20px";
                setTimeout(function(){
                    popUp.style.top = "-120px";
                }, 3000);
            }
            button9.onclick = function(){
                popUp.style.top = "20px";
                setTimeout(function(){
                    popUp.style.top = "-120px";
                }, 3000);
            }
            button10.onclick = function(){
                popUp.style.top = "20px";
                setTimeout(function(){
                    popUp.style.top = "-120px";
                }, 3000);
            }
            button11.onclick = function(){
                popUp.style.top = "20px";
                setTimeout(function(){
                    popUp.style.top = "-120px";
                }, 3000);
            }
            button12.onclick = function(){
                popUp.style.top = "20px";
                setTimeout(function(){
                    popUp.style.top = "-120px";
                }, 3000);
            }
            button13.onclick = function(){
                popUp.style.top = "20px";
                setTimeout(function(){
                    popUp.style.top = "-120px";
                }, 3000);
            }
            button14.onclick = function(){
                popUp.style.top = "20px";
                setTimeout(function(){
                    popUp.style.top = "-120px";
                }, 3000);
            }
            button15.onclick = function(){
                popUp.style.top = "20px";
                setTimeout(function(){
                    popUp.style.top = "-120px";
                }, 3000);
            }
            button16.onclick = function(){
                popUp.style.top = "20px";
                setTimeout(function(){
                    popUp.style.top = "-120px";
                }, 3000);
            }
            button17.onclick = function(){
                popUp.style.top = "20px";
                setTimeout(function(){
                    popUp.style.top = "-120px";
                }, 3000);
            }
            button18.onclick = function(){
                popUp.style.top = "20px";
                setTimeout(function(){
                    popUp.style.top = "-120px";
                }, 3000);
            }
            button19.onclick = function(){
                popUp.style.top = "20px";
                setTimeout(function(){
                    popUp.style.top = "-120px";
                }, 3000);
            }
            button20.onclick = function(){
                popUp.style.top = "20px";
                setTimeout(function(){
                    popUp.style.top = "-120px";
                }, 3000);
            }
            button21.onclick = function(){
                popUp.style.top = "20px";
                setTimeout(function(){
                    popUp.style.top = "-120px";
                }, 3000);
            }
            button22.onclick = function(){
                popUp.style.top = "20px";
                setTimeout(function(){
                    popUp.style.top = "-120px";
                }, 3000);
            }
            button23.onclick = function(){
                popUp.style.top = "20px";
                setTimeout(function(){
                    popUp.style.top = "-120px";
                }, 3000);
            }
            button24.onclick = function(){
                popUp.style.top = "20px";
                setTimeout(function(){
                    popUp.style.top = "-120px";
                }, 3000);
            }
            button25.onclick = function(){
                popUp.style.top = "20px";
                setTimeout(function(){
                    popUp.style.top = "-120px";
                }, 3000);
            }
            button26.onclick = function(){
                popUp.style.top = "20px";
                setTimeout(function(){
                    popUp.style.top = "-120px";
                }, 3000);
            }
            button27.onclick = function(){
                popUp.style.top = "20px";
                setTimeout(function(){
                    popUp.style.top = "-120px";
                }, 3000);
            }
            button28.onclick = function(){
                popUp.style.top = "20px";
                setTimeout(function(){
                    popUp.style.top = "-120px";
                }, 3000);
            }
            button29.onclick = function(){
                popUp.style.top = "20px";
                setTimeout(function(){
                    popUp.style.top = "-120px";
                }, 3000);
            }
            button30.onclick = function(){
                popUp.style.top = "20px";
                setTimeout(function(){
                    popUp.style.top = "-120px";
                }, 3000);
            }
            button31.onclick = function(){
                popUp.style.top = "20px";
                setTimeout(function(){
                    popUp.style.top = "-120px";
                }, 3000);
            }
            button32.onclick = function(){
                popUp.style.top = "20px";
                setTimeout(function(){
                    popUp.style.top = "-120px";
                }, 3000);
            }
            button33.onclick = function(){
                popUp.style.top = "20px";
                setTimeout(function(){
                    popUp.style.top = "-120px";
                }, 3000);
            }
            button34.onclick = function(){
                popUp.style.top = "20px";
                setTimeout(function(){
                    popUp.style.top = "-120px";
                }, 3000);
            }
            button35.onclick = function(){
                popUp.style.top = "20px";
                setTimeout(function(){
                    popUp.style.top = "-120px";
                }, 3000);
            }
            button36.onclick = function(){
                popUp.style.top = "20px";
                setTimeout(function(){
                    popUp.style.top = "-120px";
                }, 3000);
            }
        }
        if(userLevels>=2){
            button2a.setAttribute("href", "Chandigarh.html");
            button2.onclick = function(){};   
        }
        if(userLevels>=3){
            button3a.setAttribute("href", "Puducherry.html");
            button3.onclick = function(){};   
        }
        if(userLevels>=4){
            button4a.setAttribute("href", "DadraAndNagarHaveliAndDamanAndDiu.html");
            button4.onclick = function(){};   
        }
        if(userLevels>=5){
            button5a.setAttribute("href", "Delhi.html");
            button5.onclick = function(){};   
        }
        if(userLevels>=6){
            button6a.setAttribute("href", "AndamanAndNicobar.html");
            button6.onclick = function(){};   
        }
        if(userLevels>=7){
            button7a.setAttribute("href", "JammuAndKashmir.html");
            button7.onclick = function(){};   
        }
        if(userLevels>=8){
            button8a.setAttribute("href", "Ladakh.html");
            button8.onclick = function(){};   
        }
        if(userLevels>=9){
            button9a.setAttribute("href", "Goa.html");
            button9.onclick = function(){};   
        }
        if(userLevels>=10){
            button10a.setAttribute("href", "Sikkim.html");
            button10.onclick = function(){};   
        }
        if(userLevels>=11){
            button11a.setAttribute("href", "Tripura.html");
            button11.onclick = function(){};   
        }
        if(userLevels>=12){
            button12a.setAttribute("href", "Nagaland.html");
            button12.onclick = function(){};   
        }
        if(userLevels>=13){
            button13a.setAttribute("href", "Mizoram.html");
            button13.onclick = function(){};   
        }
        if(userLevels>=14){
            button14a.setAttribute("href", "Manipur.html");
            button14.onclick = function(){};   
        }
        if(userLevels>=15){
            button15a.setAttribute("href", "Meghalaya.html");
            button15.onclick = function(){};   
        }
        if(userLevels>=16){
            button16a.setAttribute("href", "Kerala.html");
            button16.onclick = function(){};   
        }
        if(userLevels>=17){
            button17a.setAttribute("href", "Haryana.html");
            button17.onclick = function(){};   
        }
        if(userLevels>=18){
            button18a.setAttribute("href", "Punjab.html");
            button18.onclick = function(){};   
        }
        if(userLevels>=19){
            button19a.setAttribute("href", "Uttarakhand.html");
            button19.onclick = function(){};   
        }
        if(userLevels>=20){
            button20a.setAttribute("href", "HimachalPradesh.html");
            button20.onclick = function(){};   
        }
        if(userLevels>=21){
            button21a.setAttribute("href", "Assam.html");
            button21.onclick = function(){};   
        }
        if(userLevels>=22){
            button22a.setAttribute("href", "Jharkhand.html");
            button22.onclick = function(){};   
        }
        if(userLevels>=23){
            button23a.setAttribute("href", "ArunachalPradesh.html");
            button23.onclick = function(){};   
        }
        if(userLevels>=24){
            button24a.setAttribute("href", "WestBengal.html");
            button24.onclick = function(){};   
        }
        if(userLevels>=25){
            button25a.setAttribute("href", "Bihar.html");
            button25.onclick = function(){};   
        }
        if(userLevels>=26){
            button26a.setAttribute("href", "Telangana.html");
            button26.onclick = function(){};   
        }
        if(userLevels>=27){
            button27a.setAttribute("href", "TamilNadu.html");
            button27.onclick = function(){};   
        }
        if(userLevels>=28){
            button28a.setAttribute("href", "Chattisgarh.html");
            button28.onclick = function(){};   
        }
        if(userLevels>=29){
            button29a.setAttribute("href", "Odisha.html");
            button29.onclick = function(){};   
        }
        if(userLevels>=30){
            button30a.setAttribute("href", "AndhraPradesh.html");
            button30.onclick = function(){};   
        }
        if(userLevels>=31){
            button31a.setAttribute("href", "Karnataka.html");
            button31.onclick = function(){};   
        }
        if(userLevels>=32){
            button32a.setAttribute("href", "Gujrat.html");
            button32.onclick = function(){};   
        }
        if(userLevels>=33){
            button33a.setAttribute("href", "UttarPradesh.html");
            button33.onclick = function(){};   
        }
        if(userLevels>=34){
            button34a.setAttribute("href", "Maharashtra.html");
            button34.onclick = function(){};   
        }
        if(userLevels>=35){
            button35a.setAttribute("href", "MadhyaPradesh.html");
            button35.onclick = function(){};   
        }
        if(userLevels>=36){
            button36a.setAttribute("href", "Rajasthan.html");
            button36.onclick = function(){};   
        }
    }
}

async function getLevels(){
    var passwordRef = await database.ref("Users/" + username +"/levels");
    await passwordRef.on("value", (data)=>{
        userLevels = data.val();
    })
}
Next1.onclick = function(){
    Next1.style.display = "none";
    Back1.style.display = "block";
    Next2.style.display = "block";
    button1.style.left = "-400px";
    button2.style.left = "-400px";
    button3.style.left = "-400px";
    button4.style.left = "-400px";
    button5.style.left = "-400px";
    button6.style.left = "-400px";
    button7.style.left = "-400px";
    button8.style.left = "5%";
    button9.style.left = "5%";
    button10.style.left = "5%";
    button11.style.left = "5%";
    button12.style.left = "5%";
    button13.style.left = "5%";
    button14.style.left = "5%";
}
Back1.onclick = function(){
    Next1.style.display = "block";
    Back1.style.display = "none";
    Next2.style.display = "none";
    button1.style.left = "5%";
    button2.style.left = "5%";
    button3.style.left = "5%";
    button4.style.left = "5%";
    button5.style.left = "5%";
    button6.style.left = "5%";
    button7.style.left = "5%";
    button8.style.left = "400px";
    button9.style.left = "400px";
    button10.style.left = "400px";
    button11.style.left = "400px";
    button12.style.left = "400px";
    button13.style.left = "400px";
    button14.style.left = "400px";
}

Next2.onclick = function(){
    Next2.style.display = "none";
    Next3.style.display = "block";
    Back2.style.display = "block";
    Back1.style.display = "none";
    button8.style.left = "-400px";
    button9.style.left = "-400px";
    button10.style.left = "-400px";
    button11.style.left = "-400px";
    button12.style.left = "-400px";
    button13.style.left = "-400px";
    button14.style.left = "-400px";
    button15.style.left = "5%";
    button16.style.left = "5%";
    button17.style.left = "5%";
    button18.style.left = "5%";
    button19.style.left = "5%";
    button20.style.left = "5%";
    button21.style.left = "5%";
}
Back2.onclick = function(){
    Next2.style.display = "block";
    Next3.style.display = "none";
    Back2.style.display = "none";
    Back1.style.display = "block";
    button15.style.left = "400px";
    button16.style.left = "400px";
    button17.style.left = "400px";
    button18.style.left = "400px";
    button19.style.left = "400px";
    button20.style.left = "400px";
    button21.style.left = "400px";
    button8.style.left = "5%";
    button9.style.left = "5%";
    button10.style.left = "5%";
    button11.style.left = "5%";
    button12.style.left = "5%";
    button13.style.left = "5%";
    button14.style.left = "5%";
}

Next3.onclick = function(){
    Next3.style.display = "none";
    Next4.style.display = "block";
    Back2.style.display = "none";
    Back3.style.display = "block";
    button15.style.left = "-400px";
    button16.style.left = "-400px";
    button17.style.left = "-400px";
    button18.style.left = "-400px";
    button19.style.left = "-400px";
    button20.style.left = "-400px";
    button21.style.left = "-400px";
    button22.style.left = "5%";
    button23.style.left = "5%";
    button24.style.left = "5%";
    button25.style.left = "5%";
    button26.style.left = "5%";
    button27.style.left = "5%";
    button28.style.left = "5%";
}
Back3.onclick = function(){
    Next3.style.display = "block";
    Next4.style.display = "none";
    Back2.style.display = "block";
    Back3.style.display = "none";
    button22.style.left = "400px";
    button23.style.left = "400px";
    button24.style.left = "400px";
    button25.style.left = "400px";
    button26.style.left = "400px";
    button27.style.left = "400px";
    button28.style.left = "400px";
    button15.style.left = "5%";
    button16.style.left = "5%";
    button17.style.left = "5%";
    button18.style.left = "5%";
    button19.style.left = "5%";
    button20.style.left = "5%";
    button21.style.left = "5%";
}

Next4.onclick = function(){
    Back3.style.display = "none";
    Back4.style.display = "block";
    Next4.style.display = "none";
    Next5.style.display = "block";
    button29.style.left = "5%";
    button30.style.left = "5%";
    button31.style.left = "5%";
    button32.style.left = "5%";
    button33.style.left = "5%";
    button34.style.left = "5%";
    button35.style.left = "5%";
    button22.style.left = "-400px";
    button23.style.left = "-400px";
    button24.style.left = "-400px";
    button25.style.left = "-400px";
    button26.style.left = "-400px";
    button27.style.left = "-400px";
    button28.style.left = "-400px";
}
Back4.onclick = function(){
    Next4.style.display = "block";
    Back4.style.display = "none";
    Next5.style.display = "none";
    Back3.style.display = "block";
    button29.style.left = "400px";
    button30.style.left = "400px";
    button31.style.left = "400px";
    button32.style.left = "400px";
    button33.style.left = "400px";
    button34.style.left = "400px";
    button35.style.left = "400px";
    button22.style.left = "5%";
    button23.style.left = "5%";
    button24.style.left = "5%";
    button25.style.left = "5%";
    button26.style.left = "5%";
    button27.style.left = "5%";
    button28.style.left = "5%";
}
        
Next5.onclick = function(){
    Next5.style.display = "none";
    Back4.style.display = "none";
    Back5.style.display = "block";
    button36.style.left = "5%";
    button29.style.left = "-400px";
    button30.style.left = "-400px";
    button31.style.left = "-400px";
    button32.style.left = "-400px";
    button33.style.left = "-400px";
    button34.style.left = "-400px";
    button35.style.left = "-400px";
}
Back5.onclick = function(){
    Next5.style.display = "block";
    Back5.style.display = "none";
    Back4.style.display = "block";
    button36.style.left = "400px";
    button29.style.left = "5%";
    button30.style.left = "5%";
    button31.style.left = "5%";
    button32.style.left = "5%";
    button33.style.left = "5%";
    button34.style.left = "5%";
    button35.style.left = "5%";
}