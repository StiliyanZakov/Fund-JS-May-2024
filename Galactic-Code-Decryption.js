function galacticDecryption(commands) {
  let message = commands[0];

  for (let i = 1; i < commands.length; i++) {
    const command = commands[i];
    if (command === "Finalize") {
      break;
    } else if (command === "Encrypt") {
      message = message.split("").reverse().join("");
      console.log(message);
    } else if (command === "Decrypt") {
      message = message
        .split("")
        .map((char) => {
          if (char === char.toUpperCase()) {
            return char.toLowerCase();
          } else {
            return char.toUpperCase();
          }
        })
        .join("");
      console.log(message);
    } else if (command.startsWith("Substitute")) {
      const parts = command.split(" ");
      if (parts.length === 3) {
        const oldChar = parts[1];
        const newChar = parts[2];
        if (message.includes(oldChar)) {
          message = message.split(oldChar).join(newChar);
          console.log(message);
        } else {
          console.log("Character not found.");
        }
      } else {
        console.log("Invalid command detected!");
      }
    } else if (command.startsWith("Scramble")) {
      const parts = command.split(" ");
      if (parts.length === 3) {
        const index = parseInt(parts[1]);
        const char = parts[2];
        if (index >= 0 && index < message.length) {
          message = message.slice(0, index) + char + message.slice(index + 1);
          console.log(message);
        } else {
          console.log("Index out of bounds.");
        }
      } else {
        console.log("Invalid command detected!");
      }
    } else if (command.startsWith("Remove")) {
      const parts = command.split(" ", 2);
      if (parts.length === 2) {
        const substring = parts[1];
        message = message.split(substring).join("");
        console.log(message);
      } else {
        console.log("Invalid command detected!");
      }
    } else {
      console.log("Invalid command detected!");
    }
  }
}

// Example usage
galacticDecryption([
  "helloWorld",
  "Encrypt",
  "Decrypt",
  "Substitute L z",
  "Remove O",
  "Scramble 0 H",
  "Invalid command detected!",
  "Finalize",
]);
//   galacticDecryption([
//     "GalacticMission",
//     "Decrypt",
//     "Scramble 5 Z",
//     "Remove S",
//     "Substitute G X",
//     "Encrypt",
//     "Finalize",
//   ]);
//   galacticDecryption([
//     "Federation1",
//     "Encrypt",
//     "Decrypt",
//     "Remove 1",
//     "Substitute E e",
//     "Scramble 2 X",
//     "Encrypt",
//     "Finalize",
//   ]);
