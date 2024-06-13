function manipulateArray(input) {
  let commands = input.slice();
  let array = commands.shift().split(" ").map(Number);

  for (let command of commands) {
    let [action, firstArg, secondArg] = command.split(" ");
    firstArg = Number(firstArg);
    secondArg = Number(secondArg);

    switch (action) {
      case "Add":
        addNumber(array, firstArg);
        break;
      case "Remove":
        array = removeNumber(array, firstArg);
        break;
      case "RemoveAt":
        removeAtIndex(array, firstArg);
        break;
      case "Insert":
        insertNumber(array, firstArg, secondArg);
        break;
    }
  }

  function addNumber(arr, number) {
    arr.push(number);
  }

  function removeNumber(arr, number) {
    return arr.filter((num) => num !== number);
  }

  function removeAtIndex(arr, index) {
    arr.splice(index, 1);
  }

  function insertNumber(arr, number, index) {
    arr.splice(index, 0, number);
  }

  console.log(array.join(" "));
}

// Example usage:
manipulateArray([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
// Output: 4 53 6 8 43 3

manipulateArray([
  "6 12 2 65 6 42",
  "Add 8",
  "Remove 12",
  "RemoveAt 3",
  "Insert 6 2",
]);
// Output: 6 2 6 65 42 8
