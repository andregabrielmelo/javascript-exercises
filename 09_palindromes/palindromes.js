const palindromes = (str) =>
    str
        .toLowerCase()
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
        .replace(/ /g, "") ===
    str
        .toLowerCase()
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
        .replace(/ /g, "")
        .split("")
        .reverse()
        .join("");

// Do not edit below this line
module.exports = palindromes;
