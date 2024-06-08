function maxNum(arr) {
  let topNums = [];
  for (let i = 0; i < arr.length; i++) {
    let curNum = arr[i];
    let isTop = true;

    for (let j = i + 1; j < arr.length; j++) {
      let numToRight = arr[j];

      if (curNum <= numToRight) {
        isTop = false;
        break;
      }
    }
    if (isTop) {
      topNums.push(curNum);
    }
  }
  console.log(topNums.join(" "));
}
maxNum([1, 4, 3, 2]);
maxNum([14, 24, 3, 19, 15, 17]);
maxNum([41, 41, 34, 20]);
maxNum([27, 19, 42, 2, 13, 45, 48]);





//function findTopIntegers(arr) {
  //const topIntegers = [];
 // const len = arr.length;

 // for (let i = 0; i < len; i++) {
 //  let isTopInteger = true;
  //  for (let j = i + 1; j < len; j++) {
   //   if (arr[i] <= arr[j]) {
     //   isTopInteger = false;
     //   break;
    //  }
   // }
   // if (isTopInteger) {
   //   topIntegers.push(arr[i]);
   // }
  //}

 /// console.log(topIntegers.join(" "));
//}

// Example usage:
//findTopIntegers([1, 4, 3, 2]); // Output: 4 3 2
//findTopIntegers([14, 24, 3, 19, 15, 17]); // Output: 24 19 17
//findTopIntegers([41, 41, 34, 20]); // Output: 41 34 20
//findTopIntegers([27, 19, 42, 2, 13, 45, 48]); // Output: 48
