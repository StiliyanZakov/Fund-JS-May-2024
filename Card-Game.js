function cardGame(input) {
    const cardValues = {
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      10: 10,
      J: 11,
      Q: 12,
      K: 13,
      A: 14,
    };
  
    const cardTypes = {
      S: 4,
      H: 3,
      D: 2,
      C: 1,
    };
  
    const players = new Map();
  
    input.forEach((entry) => {
      const [name, cards] = entry.split(": ");
      const cardArray = cards.split(", ");
  
      if (!players.has(name)) {
        players.set(name, new Set());
      }
  
      const playerCards = players.get(name);
      cardArray.forEach((card) => playerCards.add(card));
    });
  
    const results = [];
  
    players.forEach((cards, name) => {
      let totalValue = 0;
  
      cards.forEach((card) => {
        const power = card.slice(0, -1);
        const type = card.slice(-1);
        totalValue += cardValues[power] * cardTypes[type];
      });
  
      results.push(`${name}: ${totalValue}`);
    });
  
    results.forEach((result) => console.log(result));
  }
  
  // Example usage
  const input1 = [
    "Peter: 2C, 4H, 9H, AS, QS",
    "Tomas: 3H, 10S, JC, KD, 5S, 10S",
    "Andrea: QH, QC, QS, QD",
    "Tomas: 6H, 7S, KC, KD, 5S, 10C",
    "Andrea: QH, QC, JS, JD, JC",
    "Peter: JD, JD, JD, JD, JD, JD",
  ];
  
  const input2 = [
    "John: 2C, 4H, 9H, AS, QS",
    "Slav: 3H, 10S, JC, KD, 5S, 10S",
    "Alex: 6H, 7S, KC, KD, 5S, 10C",
    "Thomas: QH, QC, JS, JD, JC",
    "Slav: 6H, 7S, KC, KD, 5S, 10C",
    "Thomas: QH, QC, JS, JD, JC",
    "Alex: 6H, 7S, KC, KD, 5S, 10C",
    "Thomas: QH, QC, JS, JD, JC",
    "John: JD, JD, JD, JD",
  ];
  
  cardGame(input1); // Expected Output: Peter: 167, Tomas: 175, Andrea: 197
  cardGame(input2); // Expected Output: John: 167, Slav: 175, Alex: 115, Thomas: 125
  