function partyTime(arr) {
  let command = arr.shift();

  const VIPGuests = [];
  const regularGuests = [];
  let guestsCount = 0;

  while (command !== "PARTY") {
    const firstSymbol = command[0];
    if (firstSymbol.charCodeAt(0) >= 48 && firstSymbol.charCodeAt(0) <= 57) {
      VIPGuests.push(command);
    } else {
      regularGuests.push(command);
    }

    command = arr.shift();
  }

  for (const guest of arr) {
    const firstSymbol = guest[0];
    if (firstSymbol.charCodeAt(0) >= 48 && firstSymbol.charCodeAt(0) <= 57) {
      const index = VIPGuests.indexOf(guest);
      if (index !== -1) {
        VIPGuests.splice(index, 1);
      }
    } else {
      const index = regularGuests.indexOf(guest);
      if (index !== -1) {
        regularGuests.splice(index, 1);
      }
    }
  }

  guestsCount = VIPGuests.length + regularGuests.length;

  console.log(guestsCount);

  VIPGuests.forEach((guest) => {
    console.log(guest);
  });

  regularGuests.forEach((guest) => {
    console.log(guest);
  });
}

partyTime([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);

partyTime([
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "xys2FYzn",
  "MDzcM9ZK",
  "PARTY",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
]);
