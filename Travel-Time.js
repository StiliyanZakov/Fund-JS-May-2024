function organizeTravelDestinations(destinations) {
  let travelData = {};

  // Process each destination entry
  destinations.forEach((entry) => {
    let [country, town, cost] = entry.split(" > ");
    cost = Number(cost);

    if (!travelData[country]) {
      travelData[country] = {};
    }

    if (!travelData[country][town] || travelData[country][town] > cost) {
      travelData[country][town] = cost;
    }
  });

  // Sort countries alphabetically
  let sortedCountries = Object.keys(travelData).sort((a, b) =>
    a.localeCompare(b)
  );

  // Prepare the result in the required format
  let result = [];
  sortedCountries.forEach((country) => {
    let sortedTowns = Object.entries(travelData[country])
      .sort((a, b) => a[1] - b[1])
      .map(([town, cost]) => `${town} -> ${cost}`);

    result.push(`${country} -> ${sortedTowns.join(" ")}`);
  });

  return result.join("\n");
}

// Example usage
const destinations1 = [
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 800",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 200",
];

// const destinations2 = [
//     'Bulgaria > Sofia > 25000',
//     'Bulgaria > Sofia > 25000',
//     'Kalimdor > Orgrimar > 25000',
//     'Albania > Tirana > 25000',
//     'Bulgaria > Varna > 25010',
//     'Bulgaria > Lukovit > 10'
// ];

console.log(organizeTravelDestinations(destinations1));
//console.log(organizeTravelDestinations(destinations2));
