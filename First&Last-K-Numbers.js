function printFirstAndLastKNumbers(arr) {
  // Extract k from the first element of the array
  const k = arr[0];

  // Extract the remaining elements
  const numbers = arr.slice(1);

  // Get the first k elements
  const firstKElements = numbers.slice(0, k);
  // Get the last k elements
  const lastKElements = numbers.slice(-k);

  // Print the results
  console.log(firstKElements.join(" "));
  console.log(lastKElements.join(" "));
}

// Test the function with the given examples
printFirstAndLastKNumbers([2, 7, 8, 9]);
//printFirstAndLastKNumbers([3, 6, 7, 8, 9]);
