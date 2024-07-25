function starEnigma(input) {
  const numberOfMessages = Number(input[0]);
  const attackedPlanets = [];
  const destroyedPlanets = [];

  for (let i = 1; i <= numberOfMessages; i++) {
    const encryptedMessage = input[i];
    const decryptionKey = (encryptedMessage.match(/[star]/gi) || []).length;
    const decryptedMessage = encryptedMessage
      .split("")
      .map((char) => String.fromCharCode(char.charCodeAt(0) - decryptionKey))
      .join("");

    const regex =
      /@([A-Za-z]+)[^@\-!:>]*:(\d+)[^@\-!:>]*!([AD])![^@\-!:>]*->(\d+)/;
    const match = decryptedMessage.match(regex);

    if (match) {
      const [, planetName, population, attackType, soldierCount] = match;
      if (attackType === "A") {
        attackedPlanets.push(planetName);
      } else if (attackType === "D") {
        destroyedPlanets.push(planetName);
      }
    }
  }

  attackedPlanets.sort((a, b) => a.localeCompare(b));
  destroyedPlanets.sort((a, b) => a.localeCompare(b));

  console.log(`Attacked planets: ${attackedPlanets.length}`);
  attackedPlanets.forEach((planet) => console.log(`-> ${planet}`));

  console.log(`Destroyed planets: ${destroyedPlanets.length}`);
  destroyedPlanets.forEach((planet) => console.log(`-> ${planet}`));
}

// Example usage:
const input1 = [
  "2",
  "STCDoghudd4=63333$D$0A53333",
  "EHfsytsnhf?8555&I&2C9555SR",
];

const input2 = [
  "3",
  "tt(''DGsvywgerx>6444444444%H%1B9444",
  "GQhrr|A977777(H(TTTT",
  "EHfsytsnhf?8555&I&2C9555SR",
];

starEnigma(input1);
// Expected Output:
// Attacked planets: 1
// -> Alderaa
// Destroyed planets: 1
// -> Cantonica

starEnigma(input2);
// Expected Output:
// Attacked planets: 0
// Destroyed planets: 2
// -> Cantonica
// -> Coruscant
