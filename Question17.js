let comments = [
    "good service",
    "very helpful",
    "good support",
    "needs improvement",
    "good experience"
];
let upperComments = comments.map(comment => comment.toUpperCase());
let goodComments = comments.filter(comment => comment.indexOf("good") !== -1);
console.log("Original Comments:", comments);
console.log("Uppercase Comments:", upperComments);
console.log("Comments containing 'good':", goodComments);