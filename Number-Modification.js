function modifyNumber(num) {
    // Convert the number to a string for easier manipulation
    let numStr = num.toString();

    // Helper function to calculate the average of the digits
    function calculateAverage(number) {
        let sum = 0;
        for (let i = 0; i < number.length; i++) {
            sum += parseInt(number[i]);
        }
        return sum / number.length;
    }

    // Loop to append '9' until the average is higher than 5
    while (calculateAverage(numStr) <= 5) {
        numStr += '9';
    }

    // Print the final modified number
    console.log(numStr);
}

// Test the function with provided examples
modifyNumber(101); // Output: 1019999
modifyNumber(5835); // Output: 5835