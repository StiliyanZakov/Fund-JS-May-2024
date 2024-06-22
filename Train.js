function manipulateTrain(input) {
  let commands = input.slice();
  let wagons = commands.shift().split(" ").map(Number);
  const maxCapacity = Number(commands.shift());

  for (let command of commands) {
    if (command.includes("Add")) {
      let passengers = Number(command.split(" ")[1]);
      wagons.push(passengers);
    } else {
      let passengers = Number(command);
      for (let i = 0; i < wagons.length; i++) {
        if (wagons[i] + passengers <= maxCapacity) {
          wagons[i] += passengers;
          break;
        }
      }
    }
  }

  console.log(wagons.join(" "));
}

//Example usage:
manipulateTrain(["32 54 21 12 4 0 23","75","Add 10","Add 0","30","10","75",]);
// Output: 72 54 21 12 4 75 23 10 0
