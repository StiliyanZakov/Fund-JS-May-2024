function deckOfCards(input) {
  let deck = input[0].split(", ");
  let numCommands = Number(input[1]);
  let commands = input.slice(2, 2 + numCommands);

  for (let command of commands) {
    let parts = command.split(", ");
    let action = parts[0];
    let cardName, index;

    switch (action) {
      case "Add":
        cardName = parts[1];
        if (deck.includes(cardName)) {
          console.log("Card is already in the deck");
        } else {
          deck.push(cardName);
          console.log("Card successfully added");
        }
        break;

      case "Remove":
        cardName = parts[1];
        if (deck.includes(cardName)) {
          deck.splice(deck.indexOf(cardName), 1);
          console.log("Card successfully removed");
        } else {
          console.log("Card not found");
        }
        break;

      case "Remove At":
        index = Number(parts[1]);
        if (index >= 0 && index < deck.length) {
          deck.splice(index, 1);
          console.log("Card successfully removed");
        } else {
          console.log("Index out of range");
        }
        break;

      case "Insert":
        index = Number(parts[1]);
        cardName = parts[2];
        if (index >= 0 && index < deck.length) {
          if (deck.includes(cardName)) {
            console.log("Card is already added");
          } else {
            deck.splice(index, 0, cardName);
            console.log("Card successfully added");
          }
        } else {
          console.log("Index out of range");
        }
        break;
    }
  }

  console.log(deck.join(", "));
}

// Test cases
deckOfCards([
  "Ace of Diamonds, Queen of Hearts, King of Clubs",
  "3",
  "Add, King of Diamonds",
  "Insert, 2, Jack of Spades",
  "Remove, Ace of Diamonds",
]);

// deckOfCards([
//     "Two of Clubs, King of Spades, Five of Spades, Jack of Hearts",
//     "2",
//     "Add, Two of Clubs",
//     "Remove, Five of Hearts"
// ]);

// deckOfCards([
//     "Jack of Spades, Ace of Clubs, Jack of Clubs",
//     "2",
//     "Insert, -1, Queen of Spades",
//     "Remove At, 1"
// ]);
