function houseParty(arr) {
  let guestList = [];

  for (let command of arr) {
    let parts = command.split(" ");
    let name = parts[0];
    let action = parts.slice(1).join(" ");

    if (action === "is going!") {
      if (guestList.includes(name)) {
        console.log(`${name} is already in the list!`);
      } else {
        guestList.push(name);
      }
    } else if (action === "is not going!") {
      if (guestList.includes(name)) {
        guestList = guestList.filter((guest) => guest !== name);
      } else {
        console.log(`${name} is not in the list!`);
      }
    }
  }

  guestList.forEach((guest) =>  console.log(guest));
}

// Example usage:
houseParty([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);

// Output:
// John is not in the list!
// Allie

//houseParty([ "Tom is going!", "Annie is going!","Tom is going!","Garry is going!","Jerry is going!",]);
//Output
//Tom is already in the list!
// Tom
// Annie
// Garry
// Jerry
