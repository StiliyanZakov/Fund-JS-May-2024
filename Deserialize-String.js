function deserializeString(inputArray) {
  // Create an array to hold the characters at their respective positions
  let resultArray = [];

  // Iterate over the input lines
  for (let line of inputArray) {
    if (line === "end") break; // Stop processing when 'end' is encountered

    // Split the line into character and its indices
    let [char, indices] = line.split(":");
    let indexArray = indices.split("/");

    // Place the character at each specified index in the result array
    for (let index of indexArray) {
      resultArray[index] = char;
    }
  }

  // Join the result array into a single string and return
  return resultArray.join("");
}

// Example calls
console.log(deserializeString(["a:0/2/4/6", "b:1/3/5", "end"])); // Expected output: "abababa"
console.log(
  deserializeString([
    "a:0/3/5/11",
    "v:1/4",
    "j:2",
    "m:6/9/15",
    "s:7/13",
    "d:8/14",
    "c:10",
    "l:12",
    "end",
  ])
); // Expected output: "avjavamsdmcalsdm"
