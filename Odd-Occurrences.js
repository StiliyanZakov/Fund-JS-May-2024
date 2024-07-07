function oddOccurrences(str) {
  // Convert the sentence to lower case and split into words
  const words = str.toLowerCase().split(" ");
  const wordCounts = {};
  const wordOrder = [];

  // Count occurrences of each word and track the order of first appearance
  words.forEach((word) => {
    if (!wordCounts[word]) {
      wordCounts[word] = 0;
      wordOrder.push(word);
    }
    wordCounts[word]++;
  });

  // Filter words that appear an odd number of times and maintain order
  const oddWords = wordOrder.filter((word) => wordCounts[word] % 2 !== 0);

  // Print the result
  console.log(oddWords.join(" "));
}

// Example usage
oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#"); // c# php 1 5
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food'); // soft food
