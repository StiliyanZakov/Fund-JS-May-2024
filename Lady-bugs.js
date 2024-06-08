function ladybugsSimulation(input) {
    const fieldSize = parseInt(input[0]);
    const initialIndexes = input[1].split(" ").map(Number);
    const commands = input.slice(2);
  
    const field = new Array(fieldSize).fill(0);
  
    initialIndexes.forEach((index) => {
      if (index >= 0 && index < fieldSize) {
        field[index] = 1;
      }
    });
  
    commands.forEach((command) => {
      const [index, direction, flyLength] = command.split(" ");
      let pos = parseInt(index);
      const length = parseInt(flyLength);
  
      if (pos < 0 || pos >= fieldSize || field[pos] === 0) {
        return;
      }
  
      field[pos] = 0;
  
      while (true) {
        if (direction === "right") {
          pos += length;
        } else {
          pos -= length;
        }
  
        if (pos < 0 || pos >= fieldSize) {
          break;
        }
  
        if (field[pos] === 0) {
          field[pos] = 1;
          break;
        }
      }
    });
  
    console.log(field.join(" "));
  }
  
  ladybugsSimulation(["3", "0 1", "0 right 1", "2 right 1"]);
  ladybugsSimulation(["3", "0 1 2", "0 right 1", "1 right 1", "2 right 1"]); 
  ladybugsSimulation(["5", "3", "3 left 2", "1 left -2"]); 
  