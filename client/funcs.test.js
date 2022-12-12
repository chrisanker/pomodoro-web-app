import {appendZero, changeStateToBreak, convertMinsToSecs, PomodoroApp} from "./funcs";

let app = new PomodoroApp(true);

it('takes minutes and returns total seconds', () => {
    expect(convertMinsToSecs(25)).toBe(1500);
});

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
        let colour = app.circleColourChanger();
        expect(colour).toBe('green');
    });

    it('should return red colour when changing to break mode', function () {
        app.breakMode = false;
        let colour = app.circleColourChanger();
        expect(colour).toBe('red');
    });
});

describe('Pomodoro app constructor', () => {
    let app;
    beforeEach(() => {
        app = new PomodoroApp(true, 5, 25, 20)
    })
    it('has a five minute default short break', () => {
        expect(app.shortBreakTime).toBe(5);
    } )

    it('has a 25 minute default work time', () => {
        expect(app.workTime).toBe(25);
    } )

    it('has a default long break of 20 minutes', () => {
        expect(app.longBreakTime).toBe(20);
    })
})

