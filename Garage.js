function storeCarsInGarages(input) {
  const garages = {};

  input.forEach((entry) => {
    const [garageNumber, carInfo] = entry.split(" - ");
    if (!garages[garageNumber]) {
      garages[garageNumber] = [];
    }
    garages[garageNumber].push(carInfo);
  });

  for (const [garageNumber, cars] of Object.entries(garages)) {
    console.log(`Garage № ${garageNumber}`);
    cars.forEach((car) => {
      const carDetails = car
        .split(", ")
        .map((detail) => detail.split(": ").join(" - "))
        .join(", ");
      console.log(`--- ${carDetails}`);
    });
  }
}

// Example usage
const input1 = [
  "1 - color: blue, fuel type: diesel",
  "1 - color: red, manufacture: Audi",
  "2 - fuel type: petrol",
  "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
];

// const input2 = [
//   "1 - color: green, fuel type: petrol",
//   "1 - color: dark red, manufacture: WV",
//   "2 - fuel type: diesel",
//   "3 - color: dark blue, fuel type: petrol",
// ];

storeCarsInGarages(input1);
//console.log("---");
//storeCarsInGarages(input2);
