function serializeString(inputArray) {
  let inputString = inputArray[0];
  let charIndices = {};
  let result = "";

  // Collect indices for each character
  for (let index = 0; index < inputString.length; index++) {
    let char = inputString[index];
    if (!charIndices[char]) {
      charIndices[char] = [];
    }
    charIndices[char].push(index);
  }

  // Format the output
  for (let char in charIndices) {
    result += `${char}:${charIndices[char].join("/")}\n`;
  }

  // Trim the last newline character
  result = result.trim();

  // Return the result
  return result;
}

// Example calls
console.log(serializeString(["abababa"])); // Expected output: "a:0/2/4/6\nb:1/3/5"
console.log(serializeString(["avjavamsdmcalsdm"])); // Expected output: "a:0/3/5/11\nv:1/4\nj:2\nm:6/9/15\ns:7/13\nd:8/14\nc:10\nl:12"
