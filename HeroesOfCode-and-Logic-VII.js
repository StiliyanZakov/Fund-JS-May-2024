function heroesOfCodeAndLogic(input) {
  let index = 0;
  const n = parseInt(input[index++]);
  const heroes = {};

  // Reading the heroes and their stats
  for (let i = 0; i < n; i++) {
    const [heroName, hp, mp] = input[index++].split(" ");
    heroes[heroName] = {
      HP: Math.min(100, parseInt(hp)),
      MP: Math.min(200, parseInt(mp)),
    };
  }

  while (index < input.length) {
    const line = input[index++];

    if (line === "End") {
      break;
    }

    const parts = line.split(" - ");
    const command = parts[0];
    const heroName = parts[1];

    if (command === "CastSpell") {
      const mpNeeded = parseInt(parts[2]);
      const spellName = parts[3];

      if (heroes[heroName].MP >= mpNeeded) {
        heroes[heroName].MP -= mpNeeded;
        console.log(
          `${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].MP} MP!`
        );
      } else {
        console.log(
          `${heroName} does not have enough MP to cast ${spellName}!`
        );
      }
    } else if (command === "TakeDamage") {
      const damage = parseInt(parts[2]);
      const attacker = parts[3];

      heroes[heroName].HP -= damage;
      if (heroes[heroName].HP > 0) {
        console.log(
          `${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].HP} HP left!`
        );
      } else {
        console.log(`${heroName} has been killed by ${attacker}!`);
        delete heroes[heroName];
      }
    } else if (command === "Recharge") {
      const amount = parseInt(parts[2]);
      const maxMP = 200;
      const recoveredMP = Math.min(maxMP - heroes[heroName].MP, amount);
      heroes[heroName].MP += recoveredMP;
      console.log(`${heroName} recharged for ${recoveredMP} MP!`);
    } else if (command === "Heal") {
      const amount = parseInt(parts[2]);
      const maxHP = 100;
      const recoveredHP = Math.min(maxHP - heroes[heroName].HP, amount);
      heroes[heroName].HP += recoveredHP;
      console.log(`${heroName} healed for ${recoveredHP} HP!`);
    }
  }

  // Output the remaining heroes
  for (const hero in heroes) {
    console.log(hero);
    console.log(`  HP: ${heroes[hero].HP}`);
    console.log(`  MP: ${heroes[hero].MP}`);
  }
}

// Example usage:
const input1 = [
  "2",
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  "Recharge - Solmyr - 50",
  "TakeDamage - Kyrre - 66 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  "End",
];

const input2 = [
  "4",
  "Adela 90 150",
  "SirMullich 70 40",
  "Ivor 1 111",
  "Tyris 94 61",
  "Heal - SirMullich - 50",
  "Recharge - Adela - 100",
  "CastSpell - Tyris - 1000 - Fireball",
  "TakeDamage - Tyris - 99 - Fireball",
  "TakeDamage - Ivor - 3 - Mosquito",
  "End",
];

heroesOfCodeAndLogic(input1);
heroesOfCodeAndLogic(input2);
