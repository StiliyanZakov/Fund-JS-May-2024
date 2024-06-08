function printNthElement(arr) {
    const step = parseInt(arr[arr.length - 1]);
  
    let result = [];
  
    for (let i = 0; i < arr.length - 1; i += step) {
      result.push(arr[i]);
    }
  
    console.log(result.join(" "));
  }
  
  // Test cases
  printNthElement(["5", "20", "31", "4", "20", "2"]); // Output: "5 31 20"
  printNthElement(["dsa", "asd", "test", "test", "2"]); // Output: "dsa test"
  printNthElement(["1", "2", "3", "4", "5", "6"]); // Output: "1"
  