const sumAll = function (start, end) {
    if (
        start < 0 ||
        end < 0 ||
        start != parseInt(start, 10) ||
        end != parseInt(end, 10) ||
        typeof start != "number" ||
        typeof end != "number"
    )
        return "ERROR";

    let sum = 0;

    while (start != end) {
        sum += start;
        if (start < end) {
            start++;
        } else {
            start--;
        }
    }
    sum += end;

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
