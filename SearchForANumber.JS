function searchForNumber(arr, commands) {
  let [takeCount, deleteCount, searchNumber] = commands;

  // Take the specified number of elements from the start of the array
  let takenElements = arr.slice(0, takeCount);

  // Delete the specified number of elements from the start of the taken elements
  takenElements.splice(0, deleteCount);

  // Count the occurrences of the search number in the remaining elements
  let count = takenElements.filter((num) => num === searchNumber).length;

  // Print the result
  console.log(`Number ${searchNumber} occurs ${count} times.`);
}

// Example usage:
searchForNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
// Output: Number 3 occurs 1 times.

searchForNumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);
// Output: Number 5 occurs 1 times.
