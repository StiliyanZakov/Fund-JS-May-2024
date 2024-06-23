function adventureGame(input) {
  let days = Number(input[0]);
  let players = Number(input[1]);
  let energy = Number(input[2]);
  let waterPerDayPerPerson = Number(input[3]);
  let foodPerDayPerPerson = Number(input[4]);

  let totalWater = days * players * waterPerDayPerPerson;
  let totalFood = days * players * foodPerDayPerPerson;

  for (let i = 0; i < days; i++) {
    let energyLoss = Number(input[5 + i]);
    energy -= energyLoss;

    if (energy <= 0) {
      console.log(
        `You will run out of energy. You will be left with ${totalFood.toFixed(
          2
        )} food and ${totalWater.toFixed(2)} water.`
      );
      return;
    }

    if ((i + 1) % 2 === 0) {
      energy *= 1.05;
      totalWater *= 0.7;
    }

    if ((i + 1) % 3 === 0) {
      energy *= 1.1;
      totalFood -= totalFood / players;
    }
  }

  console.log(
    `You are ready for the quest. You will be left with - ${energy.toFixed(
      2
    )} energy!`
  );
}

// Test cases
adventureGame([
  "10",
  "7",
  "5035.5",
  "11.3",
  "7.2",
  "942.3",
  "500.57",
  "520.68",
  "540.87",
  "505.99",
  "630.3",
  "784.20",
  "321.21",
  "456.8",
  "330",
]);

// adventureGame([
//     "12",
//     "6",
//     "4430",
//     "9.8",
//     "5.5",
//     "620.3",
//     "840.2",
//     "960.1",
//     "220",
//     "340",
//     "674",
//     "365",
//     "345.5",
//     "212",
//     "412.12",
//     "258",
//     "496"
// ]);
