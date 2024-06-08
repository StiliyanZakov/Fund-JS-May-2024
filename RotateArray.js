function rotateArray(input) {
  let rotationCount = parseInt(input.pop(), 10);
  let array = input;

  rotationCount = rotationCount % array.length;

  for (let i = 0; i < rotationCount; i++) {
    let element = array.pop();
    array.unshift(element);
  }

  console.log(array.join(" "));
}

// Test cases
rotateArray(["1", "2", "3", "4", "2"]); // Output: 3 4 1 2
rotateArray(["Banana", "Orange", "Coconut", "Apple", "15"]); // Output: Orange Coconut Apple Banana
