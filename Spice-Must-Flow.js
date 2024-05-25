function spiceMustFlow(startingYield) {
  let days = 0;
  let totalSpice = 0;

  while (startingYield >= 100) {
    totalSpice += startingYield;
    startingYield -= 10;
    totalSpice -= 26;
    days++;
  }

  if (totalSpice >= 26) {
    totalSpice -= 26;
  }

  console.log(days);
  console.log(totalSpice);
}
spiceMustFlow(111);
//spiceMustFlow(450);
