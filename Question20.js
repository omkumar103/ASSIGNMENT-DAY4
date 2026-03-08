let students = [
    {name:"rahul", marks:85},
    {name:"amit", marks:42},
    {name:"sara", marks:73}
];
let upperStudents = students.map(student => {
    return {
        name: student.name.toUpperCase(),
        marks: student.marks
    };
});
let passedStudents = students.filter(student => student.marks > 50);
let totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
let averageMarks = totalMarks / students.length;
students.forEach(student => {
    console.log("Name:", student.name, "Marks:", student.marks);
});
console.log("Uppercase Names:", upperStudents);
console.log("Passed Students:", passedStudents);
console.log("Average Marks:", averageMarks);
