function sumFirstAndLast(arr) {
//   let firstNum = Number(input[0]);
//   let lastNum = Number(input[input.length - 1]);
//   sum = firstNum + lastNum;
//   console.log(sum);
// }
// sumFirstAndLast(["20", "30", "40"]);
// sumFirstAndLast(["5", "10"]);
 if (arr.length === 1) {
  console.log(Number(arr[0]) + Number(arr[0]));
  return;
 }
const firstNum = Number (arr.shift());
const lastNum = Number (arr.pop());
console.log(firstNum + lastNum);
}
sumFirstAndLast(["20", "30", "40"]);
//sumFirstAndLast(["5", "10"]);