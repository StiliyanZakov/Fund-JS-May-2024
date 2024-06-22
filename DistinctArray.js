function removeRepeatingElements(arr) {
  let seen = new Set();
  let result = [];

  for (let num of arr) {
    if (!seen.has(num)) {
      seen.add(num);
      result.push(num);
    }
  }

  console.log(result.join(" "));
}

// Examples
removeRepeatingElements([1, 2, 3, 4]);
removeRepeatingElements([7, 8, 9, 7, 2, 3, 4, 1, 2]);
removeRepeatingElements([20, 8, 12, 13, 4, 4, 8, 5]);
