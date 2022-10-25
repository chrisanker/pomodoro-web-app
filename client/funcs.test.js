import {convertMinsToSecs, PomodoroApp, appendZero} from "./funcs";
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

describe('Append Zero function', () => {

    it('appends a zero to 1', () => {
        let timeInMinutes = 1;
        let result = appendZero(timeInMinutes);
        expect(result).toBe('01');
    });

    it('appends only a zero to values lower than 10', () => {
        let timeInMinutes = 10;
        let result = appendZero(timeInMinutes);
        expect(result).toBe(10);
    });
});


