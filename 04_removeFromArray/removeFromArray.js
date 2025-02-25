const removeFromArray = function (array, ...elementsToRemove) {
    return array.filter((element) => !elementsToRemove.includes(element));
};

console.log(removeFromArray([1, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
