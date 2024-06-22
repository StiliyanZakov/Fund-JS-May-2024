function manOWar(input) {
  const pirateSHip = input.shift().split(">").map(Number);
  const warShip = input.shift().split(">").map(Number);
  const maxHealthCapacity = Number(input.shift());
  const critical = maxHealthCapacity * 0.2;

  for (const el of input) {
    if (el === "Retire") {
      break;
    }
    const tokens = el.split(" ");
    const command = tokens.shift();

    switch (command) {
      case "Fire":
        const index = Number(tokens[0]);
        const warShipDmg = Number(tokens[1]);

        if (warShip[index]) {
          if (warShip[index] - warShipDmg < 0) {
            warShip[index] = 0;
          } else {
            warShip[index] -= warShipDmg;
          }
        }
        if (warShip.includes(0)) {
          console.log(`You won! The enemy ship has sunken.`);
          return;
        }
        break;
      case "Defend":
        const startIndex = Number(tokens[0]);
        const endIndex = Number(tokens[1]);
        const pirateShipDmg = Number(tokens[2]);

        if (pirateSHip[startIndex] >= 0 && pirateSHip[endIndex] >= 0) {
          for (let index = startIndex; index <= endIndex; index++) {
            if (pirateSHip[index] - pirateShipDmg <= 0) {
              pirateSHip[index] = 0;
            } else {
              pirateSHip[index] -= pirateShipDmg;
            }
          }
        }

        if (pirateSHip.includes(0)) {
          console.log("You lost! The pirate ship has sunken.");
          return;
        }
        break;
      case "Repair":
        const repairIndex = Number(tokens[0]);
        const health = Number(tokens[1]);

        if (pirateSHip[repairIndex]) {
          if (pirateSHip[repairIndex] + health > maxHealthCapacity) {
            pirateSHip[repairIndex] = maxHealthCapacity;
          } else {
            pirateSHip[repairIndex] += health;
          }
        }
        break;
      case "Status":
        const allSectionForRepair = pirateSHip.filter((s) => s < critical);
        console.log(`${allSectionForRepair.length} sections need repair.`);
        break;
    }
  }
  let pirateShipStatus = 0;
  for (const ship of pirateSHip) {
    pirateShipStatus += ship;
  }
  let warShipStatus = 0;
  for (const ship of warShip) {
    warShipStatus += ship;
  }
  console.log(`Pirate ship status: ${pirateShipStatus}`);
  console.log(`Warship status: ${warShipStatus}`);
}
//  manOWar([
//   "2>3>4>5>2",
//   "6>7>8>9>10>11",
//   "20",
//   "Status",
//   "Fire 2 3",
//   "Defend 0 4 11",
//   "Repair 3 18",
//   "Retire",
// ]);
manOWar([
  "12>13>11>20>66",
  "12>22>33>44>55>32>18",
  "70",
  "Fire 2 11",
  "Fire 8 100",
  "Defend 3 6 11",
  "Defend 0 3 5",
  "Repair 1 33",
  "Status",
  "Retire",
]);
// manOWar([
//   "2>3>4>5>2",
//   "6>7>8>9>10>11",
//   "20",
//   "Status",
//   "Fire 2 3",
//   "Defend 0 4 11",
//   "Repair 3 18",
//   "Retire",
// ]);
