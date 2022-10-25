import {initialiseApp, updateTimes, openSettings, closeSpan, setDefaultTimes, inputValidator,} from "./funcs.js";

const mainBtn = document.getElementById("button");
const settingsBtn = document.getElementById("settings");
const saveBtn = document.getElementById("save");
const closeSetttings = document.getElementById("close");

mainBtn.addEventListener("click", initialiseApp);
settingsBtn.addEventListener("click", openSettings);
saveBtn.addEventListener("click", updateTimes);
closeSetttings.addEventListener("click", closeSpan);
window.addEventListener("load", setDefaultTimes);