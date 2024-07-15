function melrahShake(inputArray) {
  let mainString = inputArray[0];
  let pattern = inputArray[1];

  while (pattern.length > 0) {
    let firstIndex = mainString.indexOf(pattern);
    let lastIndex = mainString.lastIndexOf(pattern);

    if (firstIndex !== -1 && lastIndex !== -1 && firstIndex !== lastIndex) {
      mainString =
        mainString.substring(0, firstIndex) +
        mainString.substring(firstIndex + pattern.length);
      lastIndex = mainString.lastIndexOf(pattern); // Update lastIndex after first removal
      mainString =
        mainString.substring(0, lastIndex) +
        mainString.substring(lastIndex + pattern.length);

      console.log("Shaked it.");

      // Remove the middle character from the pattern
      let middleIndex = Math.floor(pattern.length / 2);
      pattern =
        pattern.substring(0, middleIndex) + pattern.substring(middleIndex + 1);
    } else {
      console.log("No shake.");
      console.log(mainString);
      return;
    }
  }

  console.log("No shake.");
  console.log(mainString);
}

// Example calls
melrahShake(["astalavista baby", "sta"]); // Expected output: "Shaked it.\nNo shake.\nalavi baby"
melrahShake(["##mtm! !mm.mm*mtm.#", "mtm"]); // Expected output: "Shaked it.\nShaked it.\nNo shake.\n##!!.*.#"
