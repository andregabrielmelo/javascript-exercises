const findTheOldest = (array) =>
    array
        .sort((pearson, nextPearson) => {
            currentYear = new Date().getFullYear();
            pearsonYearsOld =
                (pearson["yearOfDeath"] ?? currentYear) -
                pearson["yearOfBirth"];
            nextPearsonYearsOld =
                (nextPearson["yearOfDeath"] ?? currentYear) -
                nextPearson["yearOfBirth"];

            return pearsonYearsOld > nextPearsonYearsOld ? 1 : -1;
        })
        .pop();

console.log(
    findTheOldest([
        {
            name: "Carly",
            yearOfBirth: 1942,
            yearOfDeath: 1970,
        },
        {
            name: "Ray",
            yearOfBirth: 1962,
            yearOfDeath: 2011,
        },
        {
            name: "Jane",
            yearOfBirth: 1912,
            yearOfDeath: 1941,
        },
    ])
);

// Do not edit below this line
module.exports = findTheOldest;
