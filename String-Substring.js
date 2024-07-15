function findWord(word, text) {
    // Convert both the word and the text to lower case for case-insensitive comparison
    const lowerCaseWord = word.toLowerCase();
    const lowerCaseText = text.toLowerCase();
    
    // Create a regular expression to match the word as a whole word
    const regex = new RegExp(`\\b${lowerCaseWord}\\b`, 'i');
    
    // Check if the word is in the text
    if (regex.test(lowerCaseText)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}
// Example usage
findWord("javascript", "JavaScript is the best programming language");
findWord("python", "JavaScript is the best programming language");
