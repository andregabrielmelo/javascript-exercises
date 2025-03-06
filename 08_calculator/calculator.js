const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (array) =>
    array.reduce((total, currentNumber) => total + currentNumber, 0);

const multiply = (array) =>
    array.reduce((total, currentNumber) => total * currentNumber, 1);

const power = (a, b) => a ** b;

const factorial = (a) =>
    [...Array(a).keys()]
        .map((item) => item + 1)
        .reduce((total, number) => total * number, 1);

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
