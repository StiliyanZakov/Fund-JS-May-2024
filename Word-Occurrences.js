function countWordOccurrences(input) {
  // Create a new Map to store word occurrences
  const wordCount = new Map();

  // Loop through each word in the input array
  input.forEach((word) => {
    // Convert the word to lowercase to ensure case-insensitivity
    const normalizedWord = word.toLowerCase();

    // Check if the map already has the word
    if (!wordCount.has(normalizedWord)) {
      // If not, set the word with a count of 1
      wordCount.set(normalizedWord, 1);
    } else {
      // If it does, increment the existing count by 1
      wordCount.set(normalizedWord, wordCount.get(normalizedWord) + 1);
    }
  });

  // Create an array from the map entries and sort it by count in descending order
  const sortedEntries = Array.from(wordCount.entries()).sort(
    (a, b) => b[1] - a[1]
  );

  // Print the result
  sortedEntries.forEach(([word, count]) => {
    console.log(`${word} -> ${count} times`);
  });
}

// Example usage
countWordOccurrences([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);

//countWordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);
