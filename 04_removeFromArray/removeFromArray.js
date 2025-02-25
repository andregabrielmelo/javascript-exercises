const removeFromArray = function (array, ...elementsToRemove) {
    return array.filter((element) => {
        for (const elementToRemove of elementsToRemove) {
            if (element === elementToRemove) return false;
        }
        return true;
    });
};

console.log(removeFromArray([1, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
