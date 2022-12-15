import {appendZero, convertMinsToSecs} from "./funcs";
import {PomodoroApp} from "./PomodoroApp.js";

it('takes minutes and returns total seconds', () => {
    expect(convertMinsToSecs(25)).toBe(1500);
});

describe('Append Zero function', () => {
    let number;
    let result;

    it('appends a zero to 1', () => {
        number = 1;
        result = appendZero(number);
        expect(result).toBe('01');
    });

    it('appends only a zero to values lower than 10', () => {
        number = 10;
        result = appendZero(number);
        expect(result).toBe(10);
        number = 10020020000;
        result = appendZero(number);
        expect(result).toBe(10020020000);
    });
});

describe('Pomodoro app constructor', () => {
    let app;
    let colour;
    beforeEach(() => {
        app = new PomodoroApp()
    });

    it('has a five minute default short break', () => {
        expect(app.shortBreakTime).toBe(5);
    });

    it('has a 25 minute default work time', () => {
        expect(app.workTime).toBe(25);
    });

    it('should return green colour when changing to break mode', function () {
        app.breakMode = true;
        colour = app.circleColourChanger();
        expect(colour).toBe('green');
    });

    it('should return red colour when changing to break mode', function () {
        app.breakMode = false;
        colour = app.circleColourChanger();
        expect(colour).toBe('red');
    });

    it('has a default long break of 20 minutes', () => {
        let result = app.getLongBreakTime();
        expect(result).toBe(20);
    });

    it('has a default short break of 5 minutes', () => {
        let result = app.getShortBreakTime();
        expect(result).toBe(5);
    });

    it('has a default work time of 25 minutes', () => {
        let result = app.getWorkTime();
        expect(result).toBe(25);
    });
})

