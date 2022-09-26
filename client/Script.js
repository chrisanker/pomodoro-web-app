let intervalID;
let totalTime = document.getElementById("timer").innerHTML.substring(0, 2) * 60;
let minutes;
let seconds;
let breakMode;

function initialiseApp(buttonText = document.getElementById("button").innerHTML) {
    if (buttonText === 'START') {
        if (totalTime === 1500){
            playWorkSound();
        }
        document.getElementById("button").innerHTML = "STOP";
        breakMode = false;
        countDown(breakMode);
    }
    if (buttonText === "STOP"){
        clearInterval(intervalID);
        document.getElementById("button").innerHTML = "START";
    }
}
function playWorkSound(){
    const work = new Audio('resources/work.mp3');
    work.play();
}

function playBreakSound(){
    const work = new Audio('resources/break.mp3');
    work.play();
}

function startBreak(){
    breakMode = true;
    document.getElementById("timer").innerHTML = "05:00";
    totalTime = 300;
    playBreakSound();
    countDown(breakMode);
}

function countDown(onABreak){
    changeBgColor();
    if (onABreak){
        intervalID = setInterval(() => {
            if (totalTime <= 0) {
                clearInterval(intervalID);
                //document.getElementById("button").innerHTML = "START";
                startWork();
            }
            decrementTime();
        }, 1000);
    }
    else {
        intervalID = setInterval(() => {
            if (totalTime <= 0) {
                clearInterval(intervalID);
                //document.getElementById("button").innerHTML = "START";
                startBreak();
            }
            decrementTime();
        }, 1000);
    }
}

function startWork(){
    breakMode = false;
    playWorkSound();
    document.getElementById("timer").innerHTML = "25:00";
    totalTime = document.getElementById("timer").innerHTML.substring(0, 2) * 60;
    countDown(breakMode);
}

function decrementTime(){
    totalTime--;
    minutes = Math.floor((totalTime % (1000 * 60 * 60)) / 60);
    if (minutes < 10){
        minutes = "0" + minutes;
    }
    seconds = totalTime % 60;
    if (seconds < 10){
        seconds = "0" + seconds;
    }
    document.getElementById("timer").innerHTML = minutes + ":" + seconds;
}

function changeBgColor(){
    if (breakMode){
        document.getElementById("circle").style.backgroundColor = "green"
    }
    else {
        document.getElementById("circle").style.backgroundColor = "red"
    }
}

function callVisitorLogger(){
    const loggerURL = "https://timed-tomatoes-page-load-logger.azurewebsites.net/api/visitorlogger"
    fetch(loggerURL);
}