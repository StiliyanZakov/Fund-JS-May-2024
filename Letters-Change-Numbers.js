function lettersChangeNumbers(input) {
  // Split the input into individual strings
  let strings = input.trim().split(/\s+/);

  // Function to calculate the position of a letter in the alphabet
  const getPosition = (char) =>
    char.toLowerCase().charCodeAt(0) - "a".charCodeAt(0) + 1;

  // Initialize the total sum
  let totalSum = 0;

  // Process each string
  strings.forEach((str) => {
    let firstLetter = str[0];
    let lastLetter = str[str.length - 1];
    let number = parseInt(str.slice(1, -1), 10);

    // Perform operations based on the first letter
    if (firstLetter === firstLetter.toUpperCase()) {
      number /= getPosition(firstLetter);
    } else {
      number *= getPosition(firstLetter);
    }

    // Perform operations based on the last letter
    if (lastLetter === lastLetter.toUpperCase()) {
      number -= getPosition(lastLetter);
    } else {
      number += getPosition(lastLetter);
    }

    // Add the result to the total sum
    totalSum += number;
  });

  // Print the total sum rounded to two decimal places
  console.log(totalSum.toFixed(2));
}

// Example usage:
lettersChangeNumbers("A12b s17G");
lettersChangeNumbers("P34562Z q2576f H456z");
lettersChangeNumbers("a1A");
