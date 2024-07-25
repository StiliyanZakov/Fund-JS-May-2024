function decodeMessage(input) {
  let message = input[0];
  let commands = input.slice(1);

  for (let command of commands) {
    if (command === "Decode") {
      break;
    }

    let parts = command.split("|");
    let action = parts[0];

    switch (action) {
      case "Move":
        let moveCount = parts[1];
        let moveNumber = Number(moveCount);
        message = message.slice(moveNumber) + message.slice(0, moveNumber);
        break;

      case "Insert":
        let insertIndex = parts[1];
        let insertPosition = Number(insertIndex);
        let value = parts[2];
        message =
          message.slice(0, insertPosition) +
          value +
          message.slice(insertPosition);
        break;

      case "ChangeAll":
        let substring = parts[1];
        let replacement = parts[2];
        message = message.split(substring).join(replacement);
        break;

      default:
        break;
    }
  }

  console.log(`The decrypted message is: ${message}`);
}

// Example inputs
decodeMessage(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]); // The decrypted message is: Hello

decodeMessage([
  "owyouh",
  "Move|2",
  "Move|3",
  "Insert|3|are",
  "Insert|9|?",
  "Decode",
]); // The decrypted message is: howareyou?
