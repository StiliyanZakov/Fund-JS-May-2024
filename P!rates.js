function pirates(input) {
    let towns = {};
    let index = 0;

    // Initial processing of towns before "Sail" command
    while (input[index] !== "Sail") {
        let [town, population, gold] = input[index].split("||");
        population = Number(population);
        gold = Number(gold);

        if (!towns[town]) {
            towns[town] = { population, gold };
        } else {
            towns[town].population += population;
            towns[town].gold += gold;
        }

        index++;
    }

    index++; // Move past the "Sail" command

    // Processing events until "End" command
    while (input[index] !== "End") {
        let [command, town, param1, param2] = input[index].split("=>");

        if (command === "Plunder") {
            let people = Number(param1);
            let gold = Number(param2);

            towns[town].population -= people;
            towns[town].gold -= gold;

            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);

            if (towns[town].population <= 0 || towns[town].gold <= 0) {
                console.log(`${town} has been wiped off the map!`);
                delete towns[town];
            }
        } else if (command === "Prosper") {
            let gold = Number(param1);

            if (gold < 0) {
                console.log("Gold added cannot be a negative number!");
            } else {
                towns[town].gold += gold;
                console.log(`${gold} gold added to the city treasury. ${town} now has ${towns[town].gold} gold.`);
            }
        }

        index++;
    }

    // Final output
    let remainingTowns = Object.keys(towns);
    if (remainingTowns.length > 0) {
        console.log(`Ahoy, Captain! There are ${remainingTowns.length} wealthy settlements to go to:`);
        remainingTowns.forEach(town => {
            console.log(`${town} -> Population: ${towns[town].population} citizens, Gold: ${towns[town].gold} kg`);
        });
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
}

// Example inputs
pirates([
    "Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"
]);

// pirates([
//     "Nassau||95000||1000",
//     "San Juan||930000||1250",
//     "Campeche||270000||690",
//     "Port Royal||320000||1000",
//     "Port Royal||100000||2000",
//     "Sail",
//     "Prosper=>Port Royal=>-200",
//     "Plunder=>Nassau=>94000=>750",
//     "Plunder=>Nassau=>1000=>150",
//     "Plunder=>Campeche=>150000=>690",
//     "End"
// ]);

 