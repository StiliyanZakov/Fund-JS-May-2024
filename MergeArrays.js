//function mergeArrays(arr1, arr2) {
  //let mergedArray = [];

  //for (let i = 0; i < arr1.length; i++) {
    //if (i % 2 === 0) {
     // mergedArray[i] = Number(arr1[i]) + Number(arr2[i]);
    //} else {
     // mergedArray[i] = arr1[i] + arr2[i];
   // }
  //}

 // console.log(mergedArray.join(" - "));
//}

// Test cases
//mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
// Output: 22 - 1522 - 110 - 5636 - 46

//mergeArrays(["13", "12312", "5", "77", "4"], ["22", "333", "5", "122", "44"]);
// Output: 35 - 12312333 - 10 - 77122 - 48

function mergeArrays(arr1, arr2) {
  let newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    let element1 = arr1[i];
    let element2 = arr2[i];

    if (i % 2 === 0) {
      let sum = Number(element1) + Number(element2);
      newArr.push(sum);
    } else {
      let concatenation = element1 + element2;
      newArr.push(concatenation);
    }
  }
  console.log(newArr.join(" - "));
}
//mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
// Output: 22 - 1522 - 110 - 5636 - 46

mergeArrays(["13", "12312", "5", "77", "4"], ["22", "333", "5", "122", "44"]);
