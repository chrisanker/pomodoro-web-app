import {convertMinsToSecs, PomodoroApp} from "./funcs";
let app = new PomodoroApp(true);

it('takes minutes and returns total seconds', () => {
    expect(convertMinsToSecs(25)).toBe(1500);
});

function changeStateToBreak() {
    app.breakMode = true;
}

it('returns the state of the app', () => {
    changeStateToBreak();
    expect(app.breakMode).toBe(true);
});