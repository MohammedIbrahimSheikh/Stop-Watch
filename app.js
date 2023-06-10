var minutes = 0;
var seconds = 0;
var miliSec = 0;
var spanMin = document.getElementById("min");
var spansec = document.getElementById("sec");
var spanMili = document.getElementById("msec");
var startButton = document.getElementById("start-btn");
var interval;
function timer(){
    miliSec++;
    spanMili.innerText = miliSec;
    if(miliSec === 100){
        seconds++;
        spansec.innerText = seconds;
        miliSec = 0; 
    }else if(seconds === 60){
        minutes++;
        spanMin.innerText = minutes;
        seconds = 0;
    }
}

function start(){
    interval = setInterval(timer,10);
    startButton.disabled = true;
}

function pause(){
    clearInterval(interval);
    startButton.disabled = false;
}

function reset(){
    pause();
    minutes= 0 ;
    seconds= 0 ;
    miliSec= 0 ;
    spanMili.innerText = miliSec;
    spansec.innerText = seconds;
    spanMin.innerText = minutes;
}

