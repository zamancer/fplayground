const Sum = x => ({
    x,
    concat: ({ x: x1 }) => Sum(x + x1),
});

Sum.empty = () => Sum(0);

const Pair = (x, y) => ({
    x,
    y,
    concat: ({ x: x1, y: y1 }) => Pair(x.concat(x1), y.concat(y1)),
});

module.exports = { Pair, Sum };
