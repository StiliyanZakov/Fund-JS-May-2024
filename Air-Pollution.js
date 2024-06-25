function airPollution(map, forces) {
  // Parse the input map to a 5x5 matrix of numbers
  let matrix = map.map((row) => row.split(" ").map(Number));

  // Apply each force to the matrix
  forces.forEach((force) => {
    let [action, value] = force.split(" ");
    value = Number(value);

    switch (action) {
      case "breeze":
        // Decrease the PM in the entire row by 15
        for (let col = 0; col < 5; col++) {
          matrix[value][col] = Math.max(0, matrix[value][col] - 15);
        }
        break;

      case "gale":
        // Decrease the PM in the entire column by 20
        for (let row = 0; row < 5; row++) {
          matrix[row][value] = Math.max(0, matrix[row][value] - 20);
        }
        break;

      case "smog":
        // Increase the PM in all cells by the given value
        for (let row = 0; row < 5; row++) {
          for (let col = 0; col < 5; col++) {
            matrix[row][col] += value;
          }
        }
        break;

      default:
        break;
    }
  });

  // Collect the coordinates of polluted blocks (PM >= 50)
  let pollutedAreas = [];
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
      if (matrix[row][col] >= 50) {
        pollutedAreas.push(`[${row}-${col}]`);
      }
    }
  }

  // Output the result
  if (pollutedAreas.length > 0) {
    console.log(`Polluted areas: ${pollutedAreas.join(", ")}`);
  } else {
    console.log("No polluted areas");
  }
}

// Test examples
airPollution(
  [
    "5 7 72 14 4",
    "41 35 37 27 33",
    "23 16 27 42 12",
    "2 20 28 39 14",
    "16 34 31 10 24",
  ],
  ["breeze 1", "gale 2", "smog 25"]
);
// Expected Output: Polluted areas: [0-2], [1-0], [2-3], [3-3], [4-1]

airPollution(
  [
    "5 7 3 28 32",
    "41 12 49 30 33",
    "3 16 20 42 12",
    "2 20 10 39 14",
    "7 34 4 27 24",
  ],
  ["smog 11", "gale 3", "breeze 1", "smog 2"]
);
// Expected Output: No polluted areas

airPollution(
  ["5 7 2 14 4", "21 14 2 5 3", "3 16 7 42 12", "2 20 8 39 14", "7 34 1 10 24"],
  ["breeze 1", "gale 2", "smog 35"]
);
// Expected Output: Polluted areas: [2-1], [2-3], [3-1], [3-3], [4-1], [4-4]
