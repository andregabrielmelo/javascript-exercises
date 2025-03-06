const fibonacci = function (position) {
    if (position < 0) return "OOPS";
    if (position == 0) return 0;

    let previousNumber = 1,
        beforePreviousNumber = 1;
    for (let i = 2; i < position; i++) {
        if (beforePreviousNumber < previousNumber) {
            beforePreviousNumber = beforePreviousNumber + previousNumber;
        } else {
            previousNumber = previousNumber + beforePreviousNumber;
        }
    }
    return Math.max(previousNumber, beforePreviousNumber);
};

console.log(fibonacci(3));

// Do not edit below this line
module.exports = fibonacci;
