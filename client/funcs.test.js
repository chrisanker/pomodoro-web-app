import {convertMinsToSecs} from "./funcs";

it('takes minutes and returns total seconds', () => {
    expect(convertMinsToSecs(25)).toBe(1500);
});

it('tests', () => {
    expect(document).toBeTruthy();
})