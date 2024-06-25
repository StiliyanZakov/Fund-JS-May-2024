function bunnyKill(input) {
    // Parse the matrix
    let matrix = input.slice(0, -1).map(row => row.split(' ').map(Number));
    let bombCoords = input[input.length - 1].split(' ').map(coord => coord.split(',').map(Number));

    let snowballDamage = 0;
    let snowballKills = 0;

    function isInBounds(row, col, matrix) {
        return row >= 0 && row < matrix.length && col >= 0 && col < matrix[0].length;
    }

    function explodeBomb(row, col, matrix) {
        let bombValue = matrix[row][col];
        matrix[row][col] = 0; // Bunny with the bomb explodes and dies
        for (let r = row - 1; r <= row + 1; r++) {
            for (let c = col - 1; c <= col + 1; c++) {
                if (isInBounds(r, c, matrix) && matrix[r][c] > 0) {
                    matrix[r][c] = Math.max(0, matrix[r][c] - bombValue);
                }
            }
        }
    }

    // Calculate the initial kills for the bomb bunnies and explode them
    for (let [row, col] of bombCoords) {
        if (matrix[row][col] > 0) {
            snowballDamage += matrix[row][col];
            snowballKills++;
            explodeBomb(row, col, matrix);
        }
    }

    // Calculate Snowball's damage and kills for remaining bunnies
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] > 0) {
                snowballDamage += matrix[row][col];
                snowballKills++;
            }
        }
    }

    console.log(snowballDamage);
    console.log(snowballKills);
}
  
  // Test examples
//   bunnyKill(['5 10 15 20',

//     '10 10 10 10',
    
//     '10 15 10 10',
    
//     '10 10 10 10',
    
//     '2,2 0,1']); // Expected Output: 70 7
 bunnyKill(['10 10 10',

    '10 10 10',
    
    '10 10 10',
    
    '0,0']); // Expected Output: 60 6 