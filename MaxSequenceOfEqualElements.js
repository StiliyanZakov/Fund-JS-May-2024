function maxSequenceOfEqualElements(arr) {
  let longestSequence = [];
  let curSequence = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    let curNum = arr[i];

    if (curNum === curSequence[0]) {
      curSequence.push(curNum);

      if (curSequence.length > longestSequence.length) {
        longestSequence = curSequence;
      }
    } else {
      curSequence = [curNum];
    }
  }
  console.log(longestSequence.join(" "));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEqualElements([4, 4, 4, 4]);
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);




//function findLongestSequence(arr) {
 // let maxLength = 0;
  //let currentLength = 1;
  //let maxElement = arr[0];
  //let currentElement = arr[0];

  //for (let i = 1; i < arr.length; i++) {
    //if (arr[i] === currentElement) {
    //  currentLength++;
    //} else {
    //  currentElement = arr[i];
   //   currentLength = 1;
   // }

  //  if (currentLength > maxLength) {
  //    maxLength = currentLength;
  //    maxElement = currentElement;
  //  }
 // }

 // const result = Array(maxLength).fill(maxElement);
 // console.log(result.join(" "));
//}

// Example usage:
//findLongestSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]); // Output: 2 2 2
//findLongestSequence([1, 1, 1, 2, 3, 1, 3, 3]); // Output: 1 1 1
//findLongestSequence([4, 4, 4, 4]); // Output: 4 4 4 4
//findLongestSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]); // Output: 1 1
