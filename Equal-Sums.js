function equalSums(arr) {
  let isFound = false;
  for (let i = 0; i < arr.length; i++) {
    let curNum = arr[i];
    let sumToLeft = 0;
    let sumToRight = 0;

    for (let j = 0; j < i; j++) {
      let numToLeft = arr[j];
      sumToLeft += numToLeft;
    }
    for (let k = i + 1; k < arr.length; k++) {
      let numToRight = arr[k];
      sumToRight += numToRight;
    }
    if (sumToLeft === sumToRight) {
      console.log(i);
      isFound = true;
      break;
    }
  }
  if (isFound === false) {
    console.log("no");
  }
}
equalSums([1, 2, 3, 3]);
equalSums([1, 2]); // Output: no
equalSums([1]); // Output: 0
equalSums([1, 2, 3]); // Output: no
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]); // Output: 3



//function findEqualSumsIndex(arr) {
  //const totalSum = arr.reduce((acc, num) => acc + num, 0);
  //let leftSum = 0;

  //for (let i = 0; i < arr.length; i++) {
   // const rightSum = totalSum - leftSum - arr[i];

    //if (leftSum === rightSum) {
      //console.log(i);
      //return;
    //}

    //leftSum += arr[i];
  //}

 // console.log("no");
//}

// Example usage:
//findEqualSumsIndex([1, 2, 3, 3]); // Output: 2
//findEqualSumsIndex([1, 2]); // Output: no
//findEqualSumsIndex([1]); // Output: 0
//findEqualSumsIndex([1, 2, 3]); // Output: no
//findEqualSumsIndex([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]); // Output: 3
