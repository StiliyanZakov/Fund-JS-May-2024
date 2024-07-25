function processRace(input) {
  const participants = input[0].split(", ");
  const raceData = input.slice(1, input.indexOf("end of race"));
  const racerDistances = {};

  raceData.forEach((data) => {
    const name = (data.match(/[A-Za-z]/g) || []).join("");
    const distance = (data.match(/\d/g) || []).reduce(
      (sum, num) => sum + parseInt(num),
      0
    );

    if (participants.includes(name)) {
      if (!racerDistances[name]) {
        racerDistances[name] = 0;
      }
      racerDistances[name] += distance;
    }
  });

  const sortedRacers = Object.keys(racerDistances)
    .sort((a, b) => racerDistances[b] - racerDistances[a])
    .slice(0, 3);

  const places = ["1st", "2nd", "3rd"];

  sortedRacers.forEach((racer, index) => {
    console.log(`${places[index]} place: ${racer}`);
  });
}

// Example usage:
const input1 = [
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
];

const input2 = [
  "Ronald, Bill, Tom, Timmy, Maggie, Michonne",
  "Mi*&^%$ch123o!#$%#nne787)",
  "%$$B(*&&)i89ll)*&)",
  "R**(on%^&ald992)",
  "T(*^^%immy77)",
  "Ma10**$#g0g0g0i0e",
  "end of race",
];

processRace(input1);
// Expected Output:
// 1st place: George
// 2nd place: Peter
// 3rd place: Tom

processRace(input2);
// Expected Output:
// 1st place: Michonne
// 2nd place: Ronald
// 3rd place: Bill
