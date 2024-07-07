function arenaTier(commands) {
  let gladiators = {};

  for (let command of commands) {
    if (command === "Ave Cesar") {
      break;
    }

    if (command.includes("->")) {
      let [gladiator, technique, skill] = command.split(" -> ");
      skill = Number(skill);

      if (!gladiators[gladiator]) {
        gladiators[gladiator] = {};
      }

      if (
        !gladiators[gladiator][technique] ||
        gladiators[gladiator][technique] < skill
      ) {
        gladiators[gladiator][technique] = skill;
      }
    } else if (command.includes("vs")) {
      let [glad1, glad2] = command.split(" vs ");

      if (gladiators[glad1] && gladiators[glad2]) {
        let glad1Techniques = Object.keys(gladiators[glad1]);
        let glad2Techniques = Object.keys(gladiators[glad2]);
        let commonTechniques = glad1Techniques.filter((tech) =>
          glad2Techniques.includes(tech)
        );

        if (commonTechniques.length > 0) {
          let glad1TotalSkill = Object.values(gladiators[glad1]).reduce(
            (a, b) => a + b,
            0
          );
          let glad2TotalSkill = Object.values(gladiators[glad2]).reduce(
            (a, b) => a + b,
            0
          );

          if (glad1TotalSkill > glad2TotalSkill) {
            delete gladiators[glad2];
          } else if (glad2TotalSkill > glad1TotalSkill) {
            delete gladiators[glad1];
          }
        }
      }
    }
  }

  // Calculate total skill for each gladiator
  let gladiatorsTotalSkills = {};
  for (let gladiator in gladiators) {
    let totalSkill = Object.values(gladiators[gladiator]).reduce(
      (a, b) => a + b,
      0
    );
    gladiatorsTotalSkills[gladiator] = totalSkill;
  }

  // Sort gladiators by total skill descending, then by name ascending
  let sortedGladiators = Object.keys(gladiatorsTotalSkills).sort(
    (a, b) =>
      gladiatorsTotalSkills[b] - gladiatorsTotalSkills[a] || a.localeCompare(b)
  );

  // Prepare the output
  let result = [];
  sortedGladiators.forEach((gladiator) => {
    result.push(`${gladiator}: ${gladiatorsTotalSkills[gladiator]} skill`);
    let sortedTechniques = Object.entries(gladiators[gladiator]).sort(
      (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
    );
    sortedTechniques.forEach(([technique, skill]) => {
      result.push(`- ${technique} <!> ${skill}`);
    });
  });

  return result.join("\n");
}

// Example usage
const input1 = [
  "Peter -> BattleCry -> 400",
  "Alex -> PowerPunch -> 300",
  "Stefan -> Duck -> 200",
  "Stefan -> Tiger -> 250",
  "Ave Cesar",
];

// const input2 = [
//     'Peter -> Duck -> 400',
//     'Julius -> Shield -> 150',
//     'Gladius -> Heal -> 200',
//     'Gladius -> Support -> 250',
//     'Gladius -> Shield -> 250',
//     'Peter vs Gladius',
//     'Gladius vs Julius',
//     'Gladius vs Maximilian',
//     'Ave Cesar'
// ];

console.log(arenaTier(input1));
//console.log(arenaTier(input2));
