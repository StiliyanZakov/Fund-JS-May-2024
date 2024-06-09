function findSmallestNumber(a, b, c) {
  
  let smallest = Math.min(a, b, c);

  console.log(smallest);
}

// Test the function with examples
findSmallestNumber(2, 5, 3); // Output: 2
findSmallestNumber(600, 342, 123); // Output: 123
findSmallestNumber(25, 21, 4); // Output: 4
findSmallestNumber(2, 2, 2); // Output: 2
