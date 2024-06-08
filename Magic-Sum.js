function findMagicSumPairs(arr, targetSum) {
    const pairs = [];
    const seen = new Set();

    for (let i = 0; i < arr.length; i++) {
        const complement = targetSum - arr[i];
        if (seen.has(complement)) {
            pairs.push([complement, arr[i]]);
        }
        seen.add(arr[i]);
    }

    pairs.sort((a, b) => arr.indexOf(a[0]) - arr.indexOf(b[0]));

    for (const pair of pairs) {
        console.log(pair.join(' '));
    }
}

// Example usage:
findMagicSumPairs([1, 7, 6, 2, 19, 23], 8); // Output: 1 7, 6 2
findMagicSumPairs([14, 20, 60, 13, 7, 19, 8], 27); // Output: 14 13, 20 7, 19 8
findMagicSumPairs([1, 2, 3, 4, 5, 6], 6); // Output: 1 5, 2 4