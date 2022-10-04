let intervalID;
let minutes;
let seconds;
let breakMode;
let totalTime;

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
    document.getElementById("minutes").innerHTML = "00";
    totalTime = 10;
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
    if (document.getElementById("pomodoro").value != null){
        minutes = document.getElementById("pomodoro").value;
    }
    else {
        minutes = 25;
    }
    document.getElementById("minutes").innerHTML = minutes;
    totalTime = minutes * 60;
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
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
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
    fetch(loggerURL).then(res => console.log(res) );
}

const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

function openSettings() {
    modal.style.display = "block";
}

function closeSpan(){
    modal.style.display = "none";
}
function updateTimes(){
    totalTime = document.getElementById("pomodoro").value * 60;
    minutes = document.getElementById("pomodoro").value;
    document.getElementById("minutes").innerHTML = minutes;
    closeSpan();
}

function setDefaultTimes(){
    minutes = 25;
    totalTime = minutes * 60;
    document.getElementById('pomodoro').value = minutes;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = '00';
}