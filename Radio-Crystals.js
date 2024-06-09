function processCrystals(input) {
  const targetThickness = input[0];
  const chunks = input.slice(1);

  chunks.forEach((chunk) => {
    console.log(`Processing chunk ${chunk} microns`);

    let currentThickness = chunk;

    function processOperation(operation, processFn) {
      let count = 0;
      while (processFn()) {
        count++;
      }
      if (count > 0) {
        console.log(`${operation} x${count}`);
        console.log("Transporting and washing");
        currentThickness = Math.floor(currentThickness);
      }
    }

    processOperation("Cut", () => {
      if (currentThickness / 4 >= targetThickness) {
        currentThickness /= 4;
        return true;
      }
      return false;
    });

    processOperation("Lap", () => {
      if (currentThickness * 0.8 >= targetThickness) {
        currentThickness *= 0.8;
        return true;
      }
      return false;
    });

    processOperation("Grind", () => {
      if (currentThickness - 20 >= targetThickness) {
        currentThickness -= 20;
        return true;
      }
      return false;
    });

    processOperation("Etch", () => {
      if (currentThickness - 2 >= targetThickness - 1) {
        currentThickness -= 2;
        return true;
      }
      return false;
    });

    if (currentThickness < targetThickness) {
      console.log("X-ray x1");
      currentThickness += 1;
    }

    console.log(`Finished crystal ${currentThickness} microns`);
  });
}

// Test the function with provided examples
processCrystals([1375, 50000]);
// Output should be:
// Processing chunk 50000 microns
// Cut x2
// Transporting and washing
// Lap x3
// Transporting and washing
// Grind x11
// Transporting and washing
// Etch x3
// Transporting and washing
// X-ray x1
// Finished crystal 1375 microns

//processCrystals([1000, 4000, 8100]);
// Output should be:
// Processing chunk 4000 microns
// Cut x1
// Transporting and washing
// Finished crystal 1000 microns
// Processing chunk 8100 microns
// Cut x1
// Transporting and washing
// Lap x3
// Transporting and washing
// Grind x1
// Transporting and washing
// Etch x8
// Transporting and washing
// Finished crystal 1000 microns
