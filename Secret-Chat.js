function secretChat(input) {
  let message = input.shift();

  for (let command of input) {
    if (command === "Reveal") {
      break;
    }

    let tokens = command.split(":|:");
    let action = tokens[0];

    if (action === "InsertSpace") {
      let index = Number(tokens[1]);
      message = message.slice(0, index) + " " + message.slice(index);
      console.log(message);
    } else if (action === "Reverse") {
      let substring = tokens[1];
      if (message.includes(substring)) {
        message = message.replace(substring, "");
        let reversed = substring.split("").reverse().join("");
        message += reversed;
        console.log(message);
      } else {
        console.log("error");
      }
    } else if (action === "ChangeAll") {
      let substring = tokens[1];
      let replacement = tokens[2];
      while (message.includes(substring)) {
        message = message.replace(substring, replacement);
      }
      console.log(message);
    }
  }

  console.log(`You have a new text message: ${message}`);
}

// Example usage:

secretChat([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);

// secretChat([
//   "Hiware?uiy",
//   "ChangeAll:|:i:|:o",
//   "Reverse:|:?uoy",
//   "Reverse:|:jd",
//   "InsertSpace:|:3",
//   "InsertSpace:|:7",
//   "Reveal",
// ]);
