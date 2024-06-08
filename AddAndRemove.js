function addRemove(commands) {
    let result = [];
    let currentNumber = 1;

    for (let command of commands) {
        if (command === 'add') {
            result.push(currentNumber);
        } else if (command === 'remove') {
            result.pop();
        }
        currentNumber++;
    }

    if (result.length === 0) {
        console.log('Empty');
    } else {
        console.log(result.join(' '));
    }
}

// Test cases
addRemove(['add', 'add', 'add', 'add']);  // Output: 1 2 3 4
addRemove(['add', 'add', 'remove', 'add', 'add']);  // Output: 1 4 5
addRemove(['remove', 'remove', 'remove']);  // Output: Empty