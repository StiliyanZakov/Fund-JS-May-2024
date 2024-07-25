function furniture(input) {
  let pattern =
    />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)/;
  let totalPrice = 0;
  let command = input.shift();
  let item = [];

  while (command !== "Purchase") {
    let match = command.match(pattern);
    if (match) {
      let { name, price, quantity } = match.groups;
      item.push(name);
      let furniturePrice = Number(price) * Number(quantity);
      totalPrice += furniturePrice;
    }
    command = input.shift();
  }
  console.log("Bought furniture:");
  item.forEach((item) => console.log(item));

  console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}

furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);

furniture([
  ">>Laptop<<312.2323!3",
  ">>TV<<300.21314!5",
  ">Invalid<<!5",
  ">>TV<<300.21314!20",
  ">>Invalid<!5",
  ">>TV<<30.21314!5",
  ">>Invalid<<!!5",
  "Purchase",
]);

furniture([">Invalid<<!4", ">Invalid<<!2", ">Invalid<<!5", "Purchase"]);
