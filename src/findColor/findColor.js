const { toUpper } = require('ramda');

const Right = x => ({
    map: f => Right(f(x)),
    fold: (f, g) => g(x),
});

const Left = x => ({
    map: f => Left(x),
    fold: (f, g) => f(x),
});

const fromNullable = x => (x != null ? Right(x) : Left(null));

const findColor = name => fromNullable({ red: '#ff4444' }[name]);

const safeFindColor = str => findColor(str).fold(e => 'no color', toUpper);

module.exports = safeFindColor;
