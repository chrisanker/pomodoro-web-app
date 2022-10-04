const funcs = require('./funcs');

it('takes minutes and returns total seconds', () => {
    expect(funcs.convertMinsToSecs(25)).toBe(1500);
});