import {convertMinsToSecs} from "./funcs";

it('takes minutes and returns total seconds', () => {
    expect(convertMinsToSecs(25)).toBe(1500);
});

class PomodoroApp {
    constructor(state) {
        this.state = state;
    }
}

function changeStateToBreak(app) {
    return new PomodoroApp('break');
}

it('returns the state of the app', () => {
   /*newApp = changeStateToBreak(currentApp)

    newAPP.state===break*/
    let app = new PomodoroApp('break');
    let newApp = changeStateToBreak(app);
    expect(newApp.state).toBe('break');
});