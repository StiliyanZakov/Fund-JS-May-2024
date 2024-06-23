function roboAdventure(input) {
  let grid = input[0].split("|").map(Number);
  let totalItemsCollected = 0;

  for (let i = 1; i < input.length; i++) {
    let command = input[i];

    if (command === "Adventure over") {
      break;
    } else if (command.startsWith("Step Backward")) {
      let [startIdx, steps] = command.replace("Step Backward$", "").split("$").map(Number);
      if (startIdx >= 0 && startIdx < grid.length) {
        let newIdx =
          (startIdx - (steps % grid.length) + grid.length) % grid.length;
        totalItemsCollected += grid[newIdx];
        grid[newIdx] = 0;
      }
    } else if (command.startsWith("Step Forward")) {
      let [startIdx, steps] = command.replace("Step Forward$", "").split("$").map(Number);
      if (startIdx >= 0 && startIdx < grid.length) {
        let newIdx = (startIdx + steps) % grid.length;
        totalItemsCollected += grid[newIdx];
        grid[newIdx] = 0;
      }
    } else if (command.startsWith("Double")) {
      let index = Number(command.replace("Double ", ""));
      if (index >= 0 && index < grid.length) {
        grid[index] *= 2;
      }
    } else if (command === "Switch") {
      grid.reverse();
    }
  }

  console.log(grid.join(" - "));
  console.log(`Robo finished the adventure with ${totalItemsCollected} items!`);
}

//Test cases
roboAdventure([
  "20|30|40|50|60",
  "Step Backward$0$12",
  "Step Forward$4$15",
  "Step Backward$2$5",
  "Double 1",
  "Switch",
  "Adventure over",
]);

// roboAdventure([
//   "10|5|7|10|3|6",
//   "Step Backward$0$2",
//   "Step Forward$3$5",
//   "Step Forward$6$7",
//   "Switch",
//   "Double 1",
//   "Adventure over",
// ]);
