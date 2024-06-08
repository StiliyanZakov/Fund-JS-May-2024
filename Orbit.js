function generateOrbitMatrix([width, height, x, y]) {
    let matrix = Array.from({ length: height }, () => Array(width).fill(0));

    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            matrix[row][col] = Math.max(Math.abs(row - x), Math.abs(col - y)) + 1;
        }
    }

    for (let row of matrix) {
        console.log(row.join(' '));
    }
}

// Test cases
generateOrbitMatrix([4, 4, 0, 0]);
// Expected Output:
// 1 2 3 4
// 2 2 3 4
// 3 3 3 4
// 4 4 4 4

generateOrbitMatrix([5, 5, 2, 2]);
// Expected Output:
// 3 3 3 3 3
// 3 2 2 2 3
// 3 2 1 2 3
// 3 2 2 2 3
// 3 3 3 3 3

generateOrbitMatrix([3, 3, 2, 2]);
// Expected Output:
// 3 3 3
// 3 2 2
// 3 2 1