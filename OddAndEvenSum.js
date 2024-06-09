function oddAndEvenSum (number) {
    // Convert the number to a string to iterate over each digit
    let numStr = number.toString();
    
    // Initialize sums for odd and even digits
    let oddSum = 0;
    let evenSum = 0;

    // Iterate over each character in the string
    for (let i = 0; i < numStr.length; i++) {
        // Convert the character back to a number
        let digit = parseInt(numStr[i]);
        
        // Check if the digit is even or odd and add to the corresponding sum
        if (digit % 2 === 0) {
            evenSum += digit;
        } else {
            oddSum += digit;
        }
    }

    // Print the result
    console.log("Odd sum = " + oddSum + ", Even sum = " + evenSum);
}
oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);
oddAndEvenSum(532752752275);