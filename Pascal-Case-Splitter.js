function pascalCaseSplitter(str) {
  // Use a regular expression to match words in PascalCase
  // const words = input.match(/([A-Z][a-z]*)/g);

  // // Join the words with ', ' and print the result
  // console.log(words.join(", "));

  const pattern = /[A-Z][a-z]*/g;
  const allMatches = str.matchAll(pattern);
  const matchWords = [];

  for (const matchObj of allMatches) {
    matchWords.push(matchObj[0]);
  }
  console.log(matchWords.join(", "));
}

// Example usage
pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan"); // Output: 'Split, Me, If, You, Can, Ha, Ha, You, Cant, Or, You, Can'
pascalCaseSplitter("HoldTheDoor"); // Output: 'Hold, The, Door'
pascalCaseSplitter("ThisIsSoAnnoyingToDo"); // Output: 'This, Is, So, Annoying, To, Do
