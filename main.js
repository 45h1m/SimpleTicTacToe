var options = 0; //option menu boolean
var play = 0;  //x then o then x 
var i;         //for loop
var state = []; //avoid double ckick
var tied = 0;
var resetControl = 0;
var elementId;

var botModeBool = 0;
var randomNum;

var tap = new Audio('tap.mp3');
tap.preload='auto';
var wins = new Audio('win.mp3');
wins.preload='auto';
var tie = new Audio('tied.mp3');
tie.preload='auto';
var bgm =new Audio('bgm.mp3');
bgm.preload='auto';
bgm.loop=true;

//............................................................Options bar hide/show

function closeOptions() {
    if (options == 1) {
        document.getElementById("menu_").style.height = "0";
        document.getElementById("menu").style.height = "0";
        options = 0;
    }
    else {
        document.getElementById("menu_").style.height = "5cm";
        document.getElementById("menu").style.height = "100%";
        options = 1;
    }
}
bgm.play();

for (i = 0; i < 9; i++) {
    state[i] = 3;
    console.log("reset");
}

//............................................................loading screen

function load() {
    bgm.play();
    setTimeout(function () {
        document.getElementById("replay_div").style.height = "0";
        document.getElementById("replay_div").style.borderRadius = "0 0 50% 50%";

    }, 1000);
}

function botClick(){
    if(botModeBool==0){
        document.getElementById('botMode').style.border="2px solid rgb(0, 236, 162)";
        document.getElementById('bot').style.opacity="100%";
        botModeBool=1;
    }
    else{
        document.getElementById('botMode').style.border="1px solid rgb(145, 145, 145)";
        document.getElementById('bot').style.opacity="20%";
        botModeBool=0;
       // alert("Bot-Mode (comming soon)");
    }
}

//....................................................................Geme Logic

function playThis(element) {
        elementId=element.id;
    if (state[elementId] != 0 && state[elementId] != 1) {
        tap.play();
        if (play == 0) {
            document.getElementById(elementId).innerHTML = "<i id='icon' class='fa fa-times'></i>";
            play = 1;
            state[elementId] = 1;
        }
        else {
            document.getElementById(elementId).innerHTML = "<i style='font-size:70; transform: translate(0px,18px);font-weight: bold;' id='icon' class='fa fa-circle-o'></i>";
            play = 0;
            state[elementId] = 0;
        }
        if (state[0] == 0 && state[1] == 0 && state[2] == 0) {
            afterMatch(1);
            document.getElementById('gameLine').style.transform="translate(136px, -145px) rotate(90deg)";
        }
        if (state[0] == 1 && state[1] == 1 && state[2] == 1) {
            afterMatch(0);
            document.getElementById('gameLine').style.transform="translate(136px, -145px) rotate(90deg)";
        }


        if (state[3] == 0 && state[4] == 0 && state[5] == 0) {
            afterMatch(1);
            document.getElementById('gameLine').style.transform="translate(136px, -53px) rotate(90deg)";
        }
        if (state[3] == 1 && state[4] == 1 && state[5] == 1) {
            afterMatch(0);
            document.getElementById('gameLine').style.transform="translate(136px, -53px) rotate(90deg)";
        }
        
        
        if (state[6] == 0 && state[7] == 0 && state[8] == 0) {
            afterMatch(1);
            document.getElementById('gameLine').style.transform="translate(136px, 40px) rotate(90deg)";
        }
        if (state[6] == 1 && state[7] == 1 && state[8] == 1) {
            afterMatch(0);
            document.getElementById('gameLine').style.transform="translate(136px, 40px) rotate(90deg)";
        }
        
        
        if (state[0] == 0 && state[3] == 0 && state[6] == 0) {
            afterMatch(1);
            document.getElementById('gameLine').style.transform="translate(45px, -53px) rotate(0deg)";
        }
        if (state[0] == 1 && state[3] == 1 && state[6] == 1) {
            afterMatch(0);
            document.getElementById('gameLine').style.transform="translate(45px, -53px) rotate(0deg)";
        }


        if (state[1] == 0 && state[4] == 0 && state[7] == 0) {
            afterMatch(1);
            document.getElementById('gameLine').style.transform="translate(136px, -53px) rotate(0deg)";
        }
        if (state[1] == 1 && state[4] == 1 && state[7] == 1) {
            afterMatch(0);
            document.getElementById('gameLine').style.transform="translate(136px, -53px) rotate(0deg)";
        }
        
        
        if (state[2] == 0 && state[5] == 0 && state[8] == 0) {
            afterMatch(1);
            document.getElementById('gameLine').style.transform="translate(230px, -53px) rotate(0deg)";
        }
        if (state[2] == 1 && state[5] == 1 && state[8] == 1) {
            afterMatch(0);
            document.getElementById('gameLine').style.transform="translate(230px, -53px) rotate(0deg)";
        }


        if (state[2] == 0 && state[4] == 0 && state[6] == 0) {
            afterMatch(1);
            document.getElementById('gameLine').style.transform="translate(136px, -53px) rotate(45deg)";
        }
        if (state[2] == 1 && state[4] == 1 && state[6] == 1) {
            afterMatch(0);
            document.getElementById('gameLine').style.transform="translate(136px, -53px) rotate(45deg)";
        }


        if (state[0] == 0 && state[4] == 0 && state[8] == 0) {
            afterMatch(1);
            document.getElementById('gameLine').style.transform="translate(136px, -53px) rotate(-45deg)";
        }
        if (state[0] == 1 && state[4] == 1 && state[8] == 1) {
            afterMatch(0);
            document.getElementById('gameLine').style.transform="translate(136px, -53px) rotate(-45deg)";
        }
        console.log(tied);
        tied++;
    }
    if(resetControl==1 || tied==9){
        reset();
    }
}


function afterMatch(xy) {
    if (xy == 0) {
        wins.play();
        document.getElementById('msg').innerHTML="Player X wins !";
        resetControl = 1;
        showResult();
    }
    else {
        wins.play();
        document.getElementById('gameLine').style.transform="translate(136px, -53px) rotate(45deg)";
        document.getElementById('msg').innerHTML="Player O wins !";
        resetControl = 1;
        showResult();
    }
}
function reset() {
    if(resetControl != 1){
        tie.play(); 
        document.getElementById('msg').innerHTML="Macth tied !";
        showResult();
    }
    setTimeout(function () {
        document.getElementById('0').innerHTML = "";
        document.getElementById('1').innerHTML = "";
        document.getElementById('2').innerHTML = "";
        document.getElementById('3').innerHTML = "";
        document.getElementById('4').innerHTML = "";
        document.getElementById('5').innerHTML = "";
        document.getElementById('6').innerHTML = "";
        document.getElementById('7').innerHTML = "";
        document.getElementById('8').innerHTML = "";
        document.getElementById('gameLine').style.transform="translate(136px, -500px) rotate(45deg)";
        
    }, 2500);
    for (i = 0; i < 9; i++) {
        state[i] = 3;
        console.log("reset");
    }
    tied = 0;
    resetControl=0;
}

function showResult(){
    document.getElementById('result').style.display ='flex';
    
    setTimeout(function () {
        document.getElementById('msg').style.transform ="translateY(0px)";
    }, 50);
    setTimeout(function () {
        document.getElementById('msg').style.transform ="translateY(-2000px)";
    }, 2500);
    setTimeout(function () {
        document.getElementById('result').style.display ='none';
    }, 3000);
}

//transform: translate(136px, -53px) rotate(45deg);
//transform: translate(136px, -450px) rotate(45deg);