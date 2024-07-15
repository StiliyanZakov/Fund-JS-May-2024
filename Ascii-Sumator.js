function asciiSumator(inputArray) {
  // Extract input values
  let char1 = inputArray[0];
  let char2 = inputArray[1];
  let randomString = inputArray[2];

  // Determine ASCII range
  let startAscii = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
  let endAscii = Math.max(char1.charCodeAt(0), char2.charCodeAt(0));

  // Calculate the sum of ASCII values of characters within the range
  let asciiSum = 0;
  for (let char of randomString) {
    let asciiValue = char.charCodeAt(0);
    if (asciiValue > startAscii && asciiValue < endAscii) {
      asciiSum += asciiValue;
    }
  }

  // Print the result once
  console.log(asciiSum);
}

// Example calls
asciiSumator([".", "@", "dsg12gr5653feee5"]); // Expected output: 363
asciiSumator(["?", "E", "@ABCEF"]); // Expected output: 262
asciiSumator(["a", "1", "jfe392$#@j24ui9ne#@$"]); // Expected output: 445
