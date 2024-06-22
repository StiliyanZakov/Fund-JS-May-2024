function specialSort(arr) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);

    // Create a new array to hold the result
    let result = [];

    // Use two pointers to pick elements from the sorted array
    let i = 0;
    let j = arr.length - 1;

    while (i <= j) {
        if (i !== j) {
            result.push(arr[j--]);
            result.push(arr[i++]);
        } else {
            result.push(arr[i++]);
        }
    }

    // Print the result array elements joined by a single space
    console.log(result.join(' '));
}

// Example usage:
specialSort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
// Output: 94 1 69 2 63 3 52 18 31 21

//specialSort([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
// Output: 690 2 47 6 45 7 34 19 32 32