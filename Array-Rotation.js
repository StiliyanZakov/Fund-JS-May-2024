function rotateArray(arr, rotations) {
  const len = arr.length;
  rotations = rotations % len;

  const rotatedPart = arr.slice(0, rotations);
  const remainingPart = arr.slice(rotations);

  const result = remainingPart.concat(rotatedPart);
  console.log(result.join(" "));
}

// Example usage:
rotateArray([51, 47, 32, 61, 21], 2); // Output: 32 61 21 51 47
rotateArray([32, 21, 61, 1], 4); // Output: 32 21 61 1
rotateArray([2, 4, 15, 31], 5); // Output: 4 15 31 2

//function arrayRotation (arr, totalRotation) {
  //for (let curRotation = 1; curRotation <= totalRotation; curRotation++) {
    // let element = arr.shift()
    // arr.push(element);
  //}
  //console.log(arr.join(' '));
//}
//arrayRotation([51, 47, 32, 61, 21], 2);
