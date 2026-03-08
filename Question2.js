const readline = require("readline-sync");
let fullName = readline.question("Enter your full name: ");
let lowerName = fullName.toLowerCase();
let nameArray = lowerName.split(" ");
const generateUsername = (arr) => arr.join("_");
let username = generateUsername(nameArray);
function displayUsername(callback) {
    console.log("Generated Username:", callback);
}
displayUsername(username);
