function modifyArray(arr) {
  let originalSum = 0;
  let modifiedArray = [];
  let modifiedSum = 0;

  for (let i = 0; i < arr.length; i++) {
    originalSum += arr[i];
    if (arr[i] % 2 === 0) {
      modifiedArray[i] = arr[i] + i;
    } else {
      modifiedArray[i] = arr[i] - i;
    }
  }
  for (let i = 0; i < modifiedArray.length; i++) {
    modifiedSum += modifiedArray[i];
  }

  console.log(modifiedArray);
  console.log(originalSum);
  console.log(modifiedSum);
}
modifyArray([5, 15, 23, 56, 35]);
modifyArray([-5, 11, 3, 0, 2]);