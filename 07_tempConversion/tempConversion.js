const convertToCelsius = function (tempFahrenheit) {
    let convertedTemp = ((tempFahrenheit - 32) * 5) / 9;
    return parseFloat(convertedTemp.toFixed(1));
};

const convertToFahrenheit = function (tempCelsius) {
    let convertedTemp = (tempCelsius * 9) / 5 + 32;
    return parseFloat(convertedTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit,
};
