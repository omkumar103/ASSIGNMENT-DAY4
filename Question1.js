const readline = require("readline-sync");

let fullName = readline.question("Enter your full name: ");

fullName = fullName.trim();
let upperName = fullName.toUpperCase();
let firstChar = fullName.charAt(0);

let user = {
    fullName: fullName,
    upperCaseName: upperName,
    firstCharacter: firstChar
};

console.log("Keys:", Object.keys(user));
console.log("Values:", Object.values(user));

console.log(user);