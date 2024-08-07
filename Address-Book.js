function addressBook(input) {
  let addressbook = {};
  for (let line of input) {
    let [name, address] = line.split(":");
    addressbook[name] = address;
  }
  let sorted = Object.entries(addressbook);
  sorted.sort((a, b) => a[0].localeCompare(b[0]));
  
   // Print the result
   for (let [name, address] of sorted) {
    console.log(`${name} -> ${address}`);
}

}

addressBook([
  "Tim:Doe Crossing",

  "Bill:Nelson Place",

  "Peter:Carlyle Ave",

  "Bill:Ornery Rd",
]);

// addressBook([
//   "Bob:Huxley Rd",

//   "John:MilwaukeeCrossing",

//   "Peter:Fordem Ave",

//   "Bob:Redwing Ave",

//   "George:MestaCrossing",

//   "Ted:Gateway Way",

//   "Bill:Gateway Way",

//   "John:Grover Rd",

//   "Peter:Huxley Rd",

//   "Jeff:Gateway Way",

//   "Jeff:Huxley Rd",
// ]);
