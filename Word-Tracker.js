function wordTracker(input) {
  // Extract the words to look for
  const wordsToFind = input[0].split(" ");
  const wordCounts = {};

  // Initialize counts for the words to find
  wordsToFind.forEach((word) => {
    wordCounts[word] = 0;
  });

  // Iterate through the remaining words and count occurrences
  for (let i = 1; i < input.length; i++) {
    const word = input[i];
    if (wordCounts.hasOwnProperty(word)) {
      wordCounts[word]++;
    }
  }

  // Convert the wordCounts object to an array of [word, count] pairs
  const wordCountArray = Object.entries(wordCounts);

  // Sort the array by count in descending order
  wordCountArray.sort((a, b) => b[1] - a[1]);

  // Print the results
  wordCountArray.forEach(([word, count]) => {
    console.log(`${word} - ${count}`);
  });
}

// Example usage
const input1 = [
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
];

// const input2 = [
//   "is the",
//   "first",
//   "sentence",
//   "Here",
//   "is",
//   "another",
//   "the",
//   "And",
//   "finally",
//   "the",
//   "the",
//   "sentence",
// ];

wordTracker(input1); // this - 3, sentence - 2
//wordTracker(input2); // the - 3, is - 1
