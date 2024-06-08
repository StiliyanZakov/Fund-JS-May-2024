function diagonalAttack(input) {
    // Parse input into a matrix of numbers
    let matrix = input.map(row => row.split(' ').map(Number));
    let size = matrix.length;

    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    // Calculate sums of the main and secondary diagonals
    for (let i = 0; i < size; i++) {
        mainDiagonalSum += matrix[i][i];
        secondaryDiagonalSum += matrix[i][size - i - 1];
    }

    if (mainDiagonalSum === secondaryDiagonalSum) {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if (i !== j && i !== size - j - 1) {
                    matrix[i][j] = mainDiagonalSum;
                }
            }
        }
    }

    // Print the matrix
    for (let row of matrix) {
        console.log(row.join(' '));
    }
}

// Test cases
diagonalAttack([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
]);
// Expected Output:
// 5 15 15 15 1
// 15 4 15 2 15
// 15 15 3 15 15
// 15 4 15 2 15
// 5 15 15 15 1

diagonalAttack([
    '1 1 1',
    '1 1 1',
    '1 1 0'
]);
// Expected Output:
// 1 1 1
// 1 1 1
// 1 1 0