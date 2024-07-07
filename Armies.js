function manageArmies(input) {
  const leaders = {};

  input.forEach((entry) => {
    if (entry.includes("arrives")) {
      const leader = entry.split(" arrives")[0];
      if (!leaders[leader]) {
        leaders[leader] = {};
      }
    } else if (entry.includes(":")) {
      const [leader, armyInfo] = entry.split(": ");
      if (leaders[leader]) {
        const [armyName, armyCount] = armyInfo.split(", ");
        leaders[leader][armyName] = Number(armyCount);
      }
    } else if (entry.includes(" + ")) {
      const [armyName, armyCount] = entry.split(" + ");
      for (const leader in leaders) {
        if (leaders[leader][armyName] !== undefined) {
          leaders[leader][armyName] += Number(armyCount);
          break;
        }
      }
    } else if (entry.includes("defeated")) {
      const leader = entry.split(" defeated")[0];
      delete leaders[leader];
    }
  });

  const sortedLeaders = Object.entries(leaders)
    .map(([leader, armies]) => ({
      leader,
      armies,
      totalArmyCount: Object.values(armies).reduce((a, b) => a + b, 0),
    }))
    .sort((a, b) => b.totalArmyCount - a.totalArmyCount);

  sortedLeaders.forEach(({ leader, armies, totalArmyCount }) => {
    console.log(`${leader}: ${totalArmyCount}`);
    const sortedArmies = Object.entries(armies).sort(([, a], [, b]) => b - a);
    sortedArmies.forEach(([armyName, armyCount]) => {
      console.log(`>>> ${armyName} - ${armyCount}`);
    });
  });
}

// Example usage
const input1 = [
  "Rick Burr arrives",
  "Fergus: Wexamp, 30245",
  "Rick Burr: Juard, 50000",
  "Findlay arrives",
  "Findlay: Britox, 34540",
  "Wexamp + 6000",
  "Juard + 1350",
  "Britox + 4500",
  "Porter arrives",
  "Porter: Legion, 55000",
  "Legion + 302",
  "Rick Burr defeated",
  "Porter: Retix, 3205",
];

// const input2 = [
//     'Rick Burr arrives',
//     'Findlay arrives',
//     'Rick Burr: Juard, 1500',
//     'Wexamp arrives',
//     'Findlay: Wexamp, 34540',
//     'Wexamp + 340',
//     'Wexamp: Britox, 1155',
//     'Wexamp: Juard, 43423'
// ];

manageArmies(input1);
//console.log('---');
//manageArmies(input2);
