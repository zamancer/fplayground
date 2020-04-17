const { trim, toLower, inc } = require('ramda');

const Box = x => ({
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: () => `Box(${x})`,
});

const nextCharForNumberToString = str =>
    Box(str)
        .map(trim)
        .map(parseInt)
        .map(inc)
        .map(String.fromCharCode)
        .fold(toLower);

module.exports = nextCharForNumberToString;
