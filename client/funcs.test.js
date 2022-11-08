import {convertMinsToSecs, PomodoroApp, appendZero, inputValidator} from "./funcs";
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

describe('Input Validator function', () => {

    it('should not allow non-numeric values', () => {
        let allowed = inputValidator('x');
        expect(allowed).toBe(false);
    });

    it('should allow an integer value', () => {
        let allowed = inputValidator(20);
        expect(allowed).toBe(true);
    });

    it('should disallow a decimal value',() => {
        let allowed = inputValidator(23.2);
        expect(allowed).toBe(false);
    });
});

function getAndValidateUserInput() {
    const userInput = 'some string';
    if (inputValidator(userInput)){
        return undefined;
    }
    return 'Alert has been triggered';
}

it('should alert user when user input is not an integer', function () {
    let result = getAndValidateUserInput();
    expect(result).toBe('Alert has been triggered')
});
