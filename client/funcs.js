let intervalID;
let minutes;
let seconds;
let breakMode;
let totalTime;

export class PomodoroApp {
    constructor(breakMode) {
        this.breakMode = breakMode;
    }
}

let pomodoroApp = new PomodoroApp(false);

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
        pomodoroApp.breakMode = false;
        countDown();
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
    pomodoroApp.breakMode = true;
    document.getElementById("minutes").innerHTML = "00";
    totalTime = convertMinsToSecs(document.getElementById('shortbreak').value);
    playBreakSound();
    countDown();
}

function countDown(){
    changeBgColor();
    if (pomodoroApp.breakMode){
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
    pomodoroApp.breakMode = false;
    playWorkSound();
    if (document.getElementById("pomodoro").value != null){
        minutes = document.getElementById("pomodoro").value;
    }
    else {
        minutes = 25;
    }
    document.getElementById("minutes").innerHTML = minutes;
    totalTime = convertMinsToSecs(minutes);
    countDown();
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
    if (pomodoroApp.breakMode){
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
    minutes = appendZero(document.getElementById("pomodoro").value);
    document.getElementById("minutes").innerHTML = minutes;
    closeSpan();
}

export function appendZero(minutes) {
    if (minutes < 10){
        return '0' + minutes;
    }
    return minutes;
}