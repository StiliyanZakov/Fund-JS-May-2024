function isMagicMatrix(matrix) {
    const rowCount = matrix.length;
    const colCount = matrix[0].length;
    
    let targetSum = matrix[0].reduce((a, b) => a + b, 0);

    // Check the sum of each row
    for (let row = 0; row < rowCount; row++) {
        let rowSum = matrix[row].reduce((a, b) => a + b, 0);
        if (rowSum !== targetSum) {
            return false;
        }
    }

    // Check the sum of each column
    for (let col = 0; col < colCount; col++) {
        let colSum = 0;
        for (let row = 0; row < rowCount; row++) {
            colSum += matrix[row][col];
        }
        if (colSum !== targetSum) {
            return false;
        }
    }

    return true;
}

// Test cases
console.log(isMagicMatrix([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));  // Output: true
console.log(isMagicMatrix([[11, 32, 45], [21, 0, 1], [21, 1, 1]]));  // Output: false
console.log(isMagicMatrix([[1, 0, 0], [0, 0, 1], [0, 1, 0]]));  // Output: true