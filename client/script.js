import {initialiseApp, updateTimes, openSettings, closeSpan, setDefaultTimes, PomodoroApp, createPomodoroAppInstance} from "./funcs.js";

const mainBtn = document.getElementById("startstop");
const settingsBtn = document.getElementById("settings");
const saveBtn = document.getElementById("save");
const closeSettings = document.getElementById("close");
window.onload = (event) => {
    createPomodoroAppInstance();
    setDefaultTimes();
}
mainBtn.addEventListener("click", initialiseApp);
settingsBtn.addEventListener("click", openSettings);
saveBtn.addEventListener("click", updateTimes);
closeSettings.addEventListener("click", closeSpan);

