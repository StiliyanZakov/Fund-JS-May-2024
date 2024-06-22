function sortArrayByTwoCriteria(arr) {
//     arr.sort((a, b) => {
//         // Compare by length
//         let lengthComparison = a.length - b.length;
//         if (lengthComparison !== 0) {
//             return lengthComparison;
//         }
//         // Compare by alphabetical value (case-insensitive)
//         return a.toLowerCase().localeCompare(b.toLowerCase());
//     });

//     // Print the sorted array, each element on a separate line
//     arr.forEach(element => console.log(element));
// 
const sortedArr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
console.log(sortedArr.join('\n'));
}

// Example usage:
   sortArrayByTwoCriteria(['alpha', 'beta', 'gamma']);
// Output:
// beta
// alpha
// gamma

//sortArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
// Output:
// Jack
// Isacc
// George
// Theodor
// Harrison