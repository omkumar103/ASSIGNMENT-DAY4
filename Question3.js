const readline = require("readline-sync");

let marks = [];

for (let i = 0; i < 5; i++) {
    let mark = Number(readline.question("Enter mark " + (i + 1) + ": "));
    marks.push(mark);
}

marks.push(50);
marks.pop();

marks.forEach((mark, index) => {
    console.log("Student " + (index + 1) + ": " + mark);
});

let increased = marks.map(mark => mark + 5);
console.log("Marks after +5:", increased);

let passed = marks.filter(mark => mark > 40);
console.log("Passed students:", passed);

let total = marks.reduce((sum, mark) => sum + mark, 0);
console.log("Total marks:", total);