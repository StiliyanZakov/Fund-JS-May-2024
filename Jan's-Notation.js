function postfixCalculator(instructions) {
  let stack = [];

  for (let instruction of instructions) {
    if (typeof instruction === "number") {
      stack.push(instruction);
    } else if (typeof instruction === "string") {
      if (stack.length < 2) {
        console.log("Error: not enough operands!");
        return;
      }

      let b = stack.pop();
      let a = stack.pop();
      let result = 0;

      switch (instruction) {
        case "+":
          result = a + b;
          break;
        case "-":
          result = a - b;
          break;
        case "*":
          result = a * b;
          break;
        case "/":
          result = a / b;
          break;
        default:
          console.log("Error: invalid operator!");
          return;
      }

      stack.push(result);
    } else {
      console.log("Error: invalid instruction!");
      return;
    }
  }

  if (stack.length === 1) {
    console.log(stack[0]);
  } else if (stack.length > 1) {
    console.log("Error: too many operands!");
  }
}

// Test examples
postfixCalculator([3, 4, "+"]); // Expected Output: 7
postfixCalculator([5, 3, 4, "*", "-"]); // Expected Output: -7
postfixCalculator([7, 33, 8, "-"]); // Expected Output: Error: too many operands!
postfixCalculator([15, "/"]); // Expected Output: Error: not enough operands!
postfixCalculator([31, 2, "+", 11, "/"]); // Expected Output: 3
postfixCalculator([-1, 1, "+", 101, "*", 18, "+", 3, "/"]); // Expected Output: 6
