function softUniBarIncome(arr) {
  let regex =
    /%(?<costumer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^\d|$%.]*(?<price>\d+\.?\d+)\$/;
  let total = 0;
  let line = arr.shift();

  while (line !== "end of shift") {
    let isValid = line.match(regex);

    if (!isValid) {
      line = arr.shift();
      continue;
    }
    let costumerName = isValid.groups.costumer;
    let productName = isValid.groups.product;
    let count = isValid.groups.count;
    let price = isValid.groups.price;
    let currentTotal = Number(count) * Number(price);
    total += currentTotal;

    console.log(`${costumerName}: ${productName} - ${currentTotal.toFixed(2)}`);
    line = arr.shift();
  }
  console.log(`Total income: ${total.toFixed(2)}`);
}

// Example usage:
softUniBarIncome([
  "%George%<Croissant>|2|10.3$",
  "%Peter%<Gum>|1|1.3$",
  "%Maria%<Cola>|1|2.4$",
  "end of shift",
]);

softUniBarIncome([
  "%InvalidName%<Croissant>|2|10.3$",
  "%Peter%<Gum>1.3$",
  "%Maria%<Cola>|1|2.4",
  "%Valid%<Valid>valid|10|valid20$",
  "end of shift",
]);
