function generatePassword(input) {
  let str1 = input[0];
  let str2 = input[1];
  let replaceStr = input[2];

  // Concatenate the first two strings
  let concatenatedStr = str1 + str2;

  // Define vowels
  let vowels = "aeiou";

  // Replace vowels with characters from the third string
  let replaceIndex = 0;
  let replacedStr = "";

  for (let char of concatenatedStr) {
    if (vowels.includes(char.toLowerCase())) {
      replacedStr += replaceStr[replaceIndex % replaceStr.length].toUpperCase();
      replaceIndex++;
    } else {
      replacedStr += char.toLowerCase();
    }
  }

  // Reverse the replaced string
  let reversedStr = replacedStr.split("").reverse().join("");

  // Output the result
  console.log(`Your generated password is ${reversedStr}`);
}

// Example usage:
generatePassword(["ilovepizza", "ihatevegetables", "orange"]);
generatePassword(["easymoneyeazylife", "atleasttencharacters", "absolute"]);
generatePassword([
  "areyousureaboutthisone",
  "notquitebutitrustyou",
  "disturbed",
]);
