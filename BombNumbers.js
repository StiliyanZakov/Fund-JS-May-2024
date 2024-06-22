function bombNumbers(sequence, bombInfo) {
    const [bombNumber, power] = bombInfo;

    let index = sequence.indexOf(bombNumber);

    while (index !== -1) {
        // Determine the start and end index to remove
        const start = Math.max(0, index - power);
        const end = Math.min(sequence.length - 1, index + power);

        // Remove the elements from start to end
        sequence.splice(start, end - start + 1);

        // Find the next occurrence of the bomb number
        index = sequence.indexOf(bombNumber);
    }

    // Calculate the sum of the remaining elements
    const sum = sequence.reduce((sum, num) => sum + num, 0);

    // Print the sum of the remaining elements
    console.log(sum);
}

// Example usage:
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]); // Output: 12
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);    // Output: 5
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);       // Output: 6
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]); // Output: 4