function registerHeroes(input) {
  const heroes = [];

  input.forEach((line) => {
    const [name, level, items] = line.split(" / ");
    const hero = {
      name: name,
      level: Number(level),
      items: items ? items.split(", ") : [],
    };
    heroes.push(hero);
  });

  heroes.sort((a, b) => a.level - b.level);

  heroes.forEach((hero) => {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items.join(", ")}`);
  });
}

// Examples
registerHeroes([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);

// registerHeroes([
//     'Batman / 2 / Banana, Gun',
//     'Superman / 18 / Sword',
//     'Poppy / 28 / Sentinel, Antara'
// ]);
