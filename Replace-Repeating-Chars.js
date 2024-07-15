function replaceRepeatingChars(input) {
    // Use a regular expression to replace repeating characters with a single instance of that character
    // const result = input.replace(/(.)\1+/g, '$1');
    // console.log(result);
    let nonRepeatedChars = '';
    let lastChar = '';

    for (const char of input) {
       if (char !== lastChar) {
        nonRepeatedChars += char;
        lastChar = char;
       } 
    }
    console.log(nonRepeatedChars);
}


// Example usage
replaceRepeatingChars("aaaaabbbbbcdddeeeedssaa"); // Output: 'abcdedsa'
replaceRepeatingChars("qqqwerqwecccwd"); // Output: 'qwerqwecwd
