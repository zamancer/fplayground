const nextCharForNumberToString = require('./nextCharForNumberToString');

describe('nextCharForNumberToString', () => {
    it('should print m', () => {
        expect(nextCharForNumberToString('76')).toEqual('m');
    });

    it('should print a', () => {
        expect(nextCharForNumberToString('64')).toEqual('a');
    });
});
