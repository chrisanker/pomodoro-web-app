let intervalID;
let minutes;
let seconds;
let breakMode;
let totalTime;

export function convertMinsToSecs (minutes){
    const secsInMinutes = 60
    return minutes * secsInMinutes;
}

export function initialiseApp() {
    console.log("starting app");
    let buttonText = document.getElementById("button").innerText;
    if (buttonText === 'START') {
        if (totalTime === 1500) {
            playWorkSound();
        }
        document.getElementById("button").innerHTML = "STOP";
        breakMode = false;
        countDown(breakMode);
    }
    if (buttonText === "STOP") {
        clearInterval(intervalID);
        document.getElementById("button").innerHTML = "START";
    }
}

export function setDefaultTimes(){
    console.log("page loaded");
    minutes = 25;
    totalTime = convertMinsToSecs(minutes);
    document.getElementById('pomodoro').value = minutes;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = '00';
}


function playWorkSound(){
    const work = new Audio('resources/audio/work.mp3');
    work.play();
}

function playBreakSound(){
    const work = new Audio('resources/audio/break.mp3');
    work.play();
}

function startBreak(){
    breakMode = true;
    document.getElementById("minutes").innerHTML = "00";
    totalTime = convertMinsToSecs(document.getElementById('shortbreak').value);
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
    totalTime = convertMinsToSecs(minutes);
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

export function openSettings() {
    modal.style.display = "block";
}

export function closeSpan(){
    modal.style.display = "none";
}
export function updateTimes(){
    const pomodoro = document.getElementById("pomodoro");
    totalTime = convertMinsToSecs(pomodoro.value);
    minutes = document.getElementById("pomodoro").value;
    document.getElementById("minutes").innerHTML = minutes;
    closeSpan();
}


