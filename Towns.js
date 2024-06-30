function parseTowns(arr) {
  arr.forEach((row) => {
    let [town, latitude, longitude] = row.split(" | ");

    latitude = parseFloat(latitude).toFixed(2);
    longitude = parseFloat(longitude).toFixed(2);

    const townObject = {
      town: town,
      latitude: latitude,
      longitude: longitude,
    };

    console.log(townObject);
  });
}

// Example 1
parseTowns([
  "Sofia | 42.696552 | 23.32601",
  "Beijing | 39.913818 | 116.363625",
]);

// Example 2
// parseTowns([
//     'Plovdiv | 136.45 | 812.575'
// ])
