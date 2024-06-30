function processSequences(input) {
    let uniqueArrays = new Map();

    // Parse input strings and store unique arrays
    input.forEach(str => {
        let arr = JSON.parse(str).sort((a, b) => a - b);
        let key = JSON.stringify(arr);
        if (!uniqueArrays.has(key)) {
            uniqueArrays.set(key, arr);
        }
    });

    // Convert the map values to an array and sort by length
    let sortedArrays = Array.from(uniqueArrays.values()).sort((a, b) => a.length - b.length);

    // Print each array in descending order
    sortedArrays.forEach(arr => {
        console.log(`[${arr.sort((a, b) => b - a).join(', ')}]`);
    });
}

// Example usage
const input1 = [
    "[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"
];
processSequences(input1);

// const input2 = [
//     "[7.14, 7.180, 7.339, 80.099]",
//     "[7.339, 80.0990, 7.140000, 7.18]",
//     "[7.339, 7.180, 7.14, 80.099]"
// ];
// processSequences(input2);
