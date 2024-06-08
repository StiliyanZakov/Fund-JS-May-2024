function nonDecreasingSubset(arr) {
    let result = [];
    let currentBiggest = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= currentBiggest) {
            result.push(arr[i]);
            currentBiggest = arr[i];
        }
    }

    console.log(result.join(' '));
}

// Test cases
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);  // Output: 1 3 8 10 12 24
nonDecreasingSubset([1, 2, 3, 4]);  // Output: 1 2 3 4
nonDecreasingSubset([20, 3, 2, 15, 6, 1]);  // Output: 20