import { PomodoroApp } from "./PomodoroApp.js";

let intervalID;
let minutes;
let seconds;
let totalTime;
let pomodoroApp;

export function createPomodoroAppInstance() {
    pomodoroApp = new PomodoroApp();
}

export function convertMinsToSecs (minutes){
    const secsInMinutes = 60
    return minutes * secsInMinutes;
}

export function initialiseApp() {
    console.log("starting app");
    let startstopText = document.getElementById("startstop").innerText;
    if (startstopText === 'START') {
        playWorkSound();
        document.getElementById("startstop").innerHTML = "STOP";
        pomodoroApp.breakMode = false;
        countDown();
    }
    if (startstopText === "STOP") {
        clearInterval(intervalID);
        document.getElementById("startstop").innerHTML = "START";
    }
}

export function setDefaultTimes(){
    console.log("page loaded");
    totalTime = convertMinsToSecs(pomodoroApp.getWorkTime());
    document.getElementById("pomodoro").value = pomodoroApp.getWorkTime();
    document.getElementById("shortbreak").value = pomodoroApp.shortBreakTime;
    document.getElementById("longbreak").value = pomodoroApp.longBreakTime;
    document.getElementById('minutes').innerText = pomodoroApp.getWorkTime();
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
    document.getElementById("circle").style.backgroundColor = pomodoroApp.circleColourChanger();
    if (pomodoroApp.breakMode){
        intervalID = setInterval(() => {
            if (totalTime <= 0) {
                clearInterval(intervalID);
                startWork();
            }
            decrementTime();
        }, 1000);
    }
    else {
        intervalID = setInterval(() => {
            if (totalTime <= 0) {
                clearInterval(intervalID);
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
        minutes = pomodoroApp.workTime;
    }
    document.getElementById("minutes").innerHTML = minutes;
    totalTime = convertMinsToSecs(minutes);
    countDown();
}

function decrementTime(){
    totalTime--;
    minutes = appendZero(Math.floor((totalTime % (1000 * 60 * 60)) / 60));
    seconds = appendZero(totalTime % 60);
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
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

export function appendZero(number) {
    if (number < 10){
        return '0' + number;
    }
    return number;
}
