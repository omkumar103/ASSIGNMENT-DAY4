let sentence = prompt("Enter a sentence:");
let trimmedSentence = sentence.trim();
let lowerSentence = trimmedSentence.toLowerCase();
let words = lowerSentence.split(" ");
let wordCount = words.length;
alert(
    "Original Sentence: " + sentence + "\n" +
    "Trimmed Sentence: " + trimmedSentence + "\n" +
    "Lowercase Sentence: " + lowerSentence + "\n" +
    "Words: " + words + "\n" +
    "Total Words: " + wordCount
);
console.log("Words Array:", words);
console.log("Word Count:", wordCount);
