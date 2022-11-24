import { convertMinsToSecs, PomodoroApp, appendZero } from "./funcs";
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
        let number = 1;
        let result = appendZero(number);
        expect(result).toBe('01');
    });

    it('appends only a zero to values lower than 10', () => {
        let number = 10;
        let result = appendZero(number);
        expect(result).toBe(10);
        number = 10020020000;
        result = appendZero(number);
        expect(result).toBe(10020020000);
    });
});

describe('Colour changer', () => {
    it('should return green colour when changing to break mode', function () {
        app.breakMode = true;
        let colour = app.circleColourChanger(app.breakMode);
        expect(colour).toBe('green');
    });
});

