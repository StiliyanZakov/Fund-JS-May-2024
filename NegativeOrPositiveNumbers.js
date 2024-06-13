function negativeOrPositiveNum(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element < 0) {
      result.unshift(element);
    } else {
      result.push(element);
    }
  }
  console.log(result.join("\n"));
}
//negativeOrPositiveNum(["7", "-2", "8", "9"]);
negativeOrPositiveNum(["3", "-2", "0", "-1"]);
