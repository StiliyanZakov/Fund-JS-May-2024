function findMirrorWords(text) {
    // Regular expression to match word pairs surrounded by either @ or #
    const pattern = /([@#])([a-zA-Z]{3,})\1\1([a-zA-Z]{3,})\1/g;
    let match;
    const matches = [];

    // Find all matches
    while ((match = pattern.exec(text)) !== null) {
        matches.push(match);
    }

    // Arrays to store valid pairs and mirror words
    const validPairs = [];
    const mirrorWords = [];

    matches.forEach(match => {
        const wordOne = match[2];
        const wordTwo = match[3];

        // Add to valid pairs list
        validPairs.push([wordOne, wordTwo]);

        // Check if they are mirror words
        if (wordOne === wordTwo.split('').reverse().join('')) {
            mirrorWords.push([wordOne, wordTwo]);
        }
    });

    // Output the results
    if (validPairs.length === 0) {
        console.log("No word pairs found!");
    } else {
        console.log(`${validPairs.length} word pairs found!`);
    }

    if (mirrorWords.length === 0) {
        console.log("No mirror words!");
    } else {
        const mirrorWordsOutput = mirrorWords.map(pair => `${pair[0]} <=> ${pair[1]}`).join(', ');
        console.log("The mirror words are:");
        console.log(mirrorWordsOutput);
    }
}

// Example usage
const inputText = "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r";
findMirrorWords(inputText);