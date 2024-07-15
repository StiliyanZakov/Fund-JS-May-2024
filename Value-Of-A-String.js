function sumAsciiValues(input) {
  const str = input[0];
  const caseType = input[1];

  let totalSum = 0;

  for (let char of str) {
    if (caseType === "UPPERCASE" && char >= "A" && char <= "Z") {
      totalSum += char.charCodeAt(0);
    } else if (caseType === "LOWERCASE" && char >= "a" && char <= "z") {
      totalSum += char.charCodeAt(0);
    }
  }

  console.log(`The total sum is: ${totalSum}`);
}

// Example usage:
sumAsciiValues(["HelloFromMyAwesomePROGRAM", "LOWERCASE"]);
sumAsciiValues(["AC/DC", "UPPERCASE"]);
