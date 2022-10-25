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

function inputValidator(userInput) {
    if (isNaN(userInput)){
        return true;
    }
    return true;
}

describe('Input Validator function', () => {
    it('disallows non-numeric values', () => {
        let userInput = 'x';
        let disallowed = inputValidator(userInput);
        expect(disallowed).toBe(true);
    });

    it('should allow only integers', () => {
        let allowed = inputValidator(20)
        expect(allowed).toBe(true);
    });
});