function processDictionary(input) {
  const wordDefs = input[0].split(" | ");
  const wordsToTest = input[1].split(" | ");
  const command = input[2];

  const dictionary = {};

  for (let wordDef of wordDefs) {
    const [word, definition] = wordDef.split(": ");
    if (!dictionary[word]) {
      dictionary[word] = [];
    }
    dictionary[word].push(definition);
  }

  if (command === "Test") {
    for (let word of wordsToTest) {
      if (dictionary[word]) {
        console.log(`${word}:`);
        for (let definition of dictionary[word]) {
          console.log(` -${definition}`);
        }
      }
    }
  } else if (command === "Hand Over") {
    console.log(Object.keys(dictionary).join(" "));
  }
}

// Example usage
processDictionary([
  "programmer: an animal, which turns coffee into code | developer: a magician",
  "fish | domino",
  "Hand Over",
]);

processDictionary([
  "care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",
  "care | kitchen | flower",
  "Test",
]);

processDictionary([
  "tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance",
  "bit | code | tackle",
  "Test",
]);
