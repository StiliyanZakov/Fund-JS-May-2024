function checkTickets(arr) {
  // Define winning symbols
  const winningSymbols = ["@", "#", "$", "^"];

  // Split the input by commas and trim white spaces
  let tickets = arr.split(/\s*,\s*/);

  // Process each ticket
  tickets.forEach((ticket) => {
    if (ticket.length !== 20) {
      console.log("invalid ticket");
      return;
    }

    // Split the ticket into two halves
    let leftHalf = ticket.substring(0, 10);
    let rightHalf = ticket.substring(10, 20);

    // Check for winning symbols in both halves
    let winningSymbol = "";
    let maxMatchLength = 0;

    winningSymbols.forEach((symbol) => {
      let leftMatch = leftHalf.match(new RegExp(`\\${symbol}{6,10}`));
      let rightMatch = rightHalf.match(new RegExp(`\\${symbol}{6,10}`));

      if (leftMatch && rightMatch) {
        let matchLength = Math.min(leftMatch[0].length, rightMatch[0].length);
        if (matchLength > maxMatchLength) {
          maxMatchLength = matchLength;
          winningSymbol = symbol;
        }
      }
    });

    if (maxMatchLength >= 6 && maxMatchLength <= 9) {
      console.log(`ticket "${ticket}" - ${maxMatchLength}${winningSymbol}`);
    } else if (maxMatchLength === 10) {
      console.log(
        `ticket "${ticket}" - ${maxMatchLength}${winningSymbol} Jackpot!`
      );
    } else {
      console.log(`ticket "${ticket}" - no match`);
    }
  });
}

// Example inputs
checkTickets("Cash$$$$$$Ca$$$$$$sh");
checkTickets("$$$$$$$$$$$$$$$$$$$$, aabb , th@@@@@@eemo@@@@@@ey");
checkTickets("validticketnomatch:(");
