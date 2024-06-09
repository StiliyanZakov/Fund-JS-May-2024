function carWash(commands) {
  let cleanliness = 0;

  for (let i = 0; i < commands.length; i++) {
    let command = commands[i];

    switch (command) {
      case "soap":
        cleanliness += 10;
        break;
      case "water":
        cleanliness += cleanliness * 0.2;
        break;
      case "vacuum cleaner":
        cleanliness += cleanliness * 0.25;
        break;
      case "mud":
        cleanliness -= cleanliness * 0.1;
        break;
    }
  }

  console.log(`The car is ${cleanliness.toFixed(2)}% clean.`);
}

// Test the function with provided examples
carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]); // Output: The car is 39.00% clean.
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]); // Output: The car is 13.12% clean
