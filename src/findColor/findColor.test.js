const findColor = require('./findColor');

describe('findColor', () => {
    it('should print an existing color (red) hex code', () => {
        expect(findColor('red')).toEqual('#FF4444');
    });

    it('should print a default message for non-existant color', () => {
        expect(findColor('magenta')).toEqual('no color');
    });
});
