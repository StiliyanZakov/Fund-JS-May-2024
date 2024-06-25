function decodeMessage(input) {
    const n = parseInt(input[0], 10); // size of the template matrix
    const template = [];
    const encodedMessage = [];
    
    // Extract the template matrix
    for (let i = 1; i <= n; i++) {
        template.push(input[i].split(' ').map(Number));
    }

    // Extract the encoded message matrix
    for (let i = n + 1; i < input.length; i++) {
        encodedMessage.push(input[i].split(' ').map(Number));
    }

    const messageRows = encodedMessage.length;
    const messageCols = encodedMessage[0].length;
    const templateRows = template.length;
    const templateCols = template[0].length;
    
    const alphabet = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // Initialize the decoded message as a 2D array
    let decodedMessage = Array.from(Array(messageRows), () => Array(messageCols).fill(' '));

    for (let startRow = 0; startRow < messageRows; startRow += templateRows) {
        for (let startCol = 0; startCol < messageCols; startCol += templateCols) {
            for (let i = 0; i < templateRows; i++) {
                for (let j = 0; j < templateCols; j++) {
                    const msgRow = startRow + i;
                    const msgCol = startCol + j;
                    if (msgRow < messageRows && msgCol < messageCols) {
                        const sum = encodedMessage[msgRow][msgCol] + template[i][j];
                        const charIndex = sum % alphabet.length;
                        decodedMessage[msgRow][msgCol] = alphabet[charIndex];
                    }
                }
            }
        }
    }

    // Flatten the 2D array to a single string and trim trailing spaces
    const decodedString = decodedMessage.flat().join('').trim();
    console.log(decodedString);
}

// Example usage:
decodeMessage([
    '2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22'
]);  // Expected output: I CAME I SAW I CONQUERED

decodeMessage([
    '2',
    '31 32',
    '74 37',
    '19 0 23 25',
    '22 3 12 17',
    '5 9 23 11',
    '12 18 10 22'
]);  // Expected output: WE COME IN PEACE