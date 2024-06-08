function dungeonestDark(arr) {
  const roomsString = arr[0];
  const rooms = roomsString.split("|");

  let health = 100;
  let coins = 0;
  let roomCount = 1;

  for (let room of rooms) {
    const roomElements = room.split(" ");
    const text = roomElements[0];
    const value = Number(roomElements[1]);

    if (text === "potion") {
      let healthAdded = value;

      if (health + healthAdded > 100) {
        healthAdded = 100 - health;
      }
      health += healthAdded;
      console.log(`You healed for ${healthAdded} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (text === "chest") {
      coins += value;
      console.log(`You found ${value} coins.`);
    } else {
      const monsterName = text;
      const monsterAttack = value;
      health -= monsterAttack;

      if (health > 0) {
        console.log(`You slayed ${monsterName}.`);
      } else {
        console.log(`You died! Killed by ${monsterName}.`);
        console.log(`Best room: ${roomCount}`);
        break;
      }
    }
    roomCount++;
  }
  if (health > 0) {
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
//dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);

//function dungeonestDark(dungeonRooms) {
//let health = 100;
//let coins = 0;
//const rooms = dungeonRooms[0].split("|");

//for (let i = 0; i < rooms.length; i++) {
// const [entity, number] = rooms[i].split(" ");
// const value = parseInt(number, 10);

//if (entity === "potion") {
// const healed = Math.min(value, 100 - health);
// health += healed;
// console.log(`You healed for ${healed} hp.`);
//console.log(`Current health: ${health} hp.`);
//} else if (entity === "chest") {
// coins += value;
//console.log(`You found ${value} coins.`);
//} else {
//  health -= value;
// if (health > 0) {
//    console.log(`You slayed ${entity}.`);
// } else {
//   console.log(`You died! Killed by ${entity}.`);
//    console.log(`Best room: ${i + 1}`);
//  return;
//  }
// }
// }

// console.log("You've made it!");
// console.log(`Coins: ${coins}`);
// console.log(`Health: ${health}`);
//}

// Example usage:
//dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
// Output:
// You slayed rat.
// You slayed bat.
// You healed for 10 hp.
// Current health: 80 hp.
// You slayed rat.
// You found 100 coins.
// You died! Killed by boss.
// Best room: 6

//dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
// Output:
// You slayed cat.
// You healed for 10 hp.
// Current health: 100 hp.
// You slayed orc.
// You found 10 coins.
// You slayed snake.
// You found 110 coins.
// You've made it!
// Coins: 120
// Health: 65
