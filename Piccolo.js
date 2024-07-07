function manageParkingLot(input) {
  const parkingLot = new Set();

  input.forEach((entry) => {
    const [direction, carNumber] = entry.split(", ");

    if (direction === "IN") {
      parkingLot.add(carNumber);
    } else if (direction === "OUT") {
      parkingLot.delete(carNumber);
    }
  });

  if (parkingLot.size === 0) {
    console.log("Parking Lot is Empty");
  } else {
    const sortedCars = Array.from(parkingLot).sort();
    console.log(sortedCars.join("\n"));
  }
}

// Example usage
const input1 = [
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
];

const input2 = [
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "OUT, CA1234TA",
];

manageParkingLot(input1); // CA2822UU CA2844AA CA9876HH CA9999TT
manageParkingLot(input2); // Parking Lot is Empty
