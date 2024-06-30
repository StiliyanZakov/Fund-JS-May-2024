function flightSchedule(flightsData) {
  const flights = flightsData[0];
  const updatedStatuses = flightsData[1];
  const statusToCheck = flightsData[2][0];

  let flightDict = {};

  // Initialize flight dictionary with default status "Ready to fly"
  flights.forEach((flight) => {
    let [flightNumber, ...destination] = flight.split(" ");
    destination = destination.join(" ");
    flightDict[flightNumber] = {
      Destination: destination,
      Status: "Ready to fly",
    };
  });

  // Update the flight statuses based on the second array
  updatedStatuses.forEach((statusUpdate) => {
    let [flightNumber, ...newStatus] = statusUpdate.split(" ");
    newStatus = newStatus.join(" ");
    if (flightDict[flightNumber]) {
      flightDict[flightNumber].Status = newStatus;
    }
  });

  let result = [];

  // Filter flights based on the status to check
  for (let flightNumber in flightDict) {
    if (flightDict[flightNumber].Status === statusToCheck) {
      result.push({
        Destination: flightDict[flightNumber].Destination,
        Status: statusToCheck,
      });
    }
  }

  // Print the results in the required format
  result.forEach((flight) =>
    console.log(
      `{ Destination: '${flight.Destination}', Status: '${flight.Status}' }`
    )
  );
}

// Define the input examples
const exampleInput1 = [
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK430 Cancelled",
  ],
  ["Cancelled"],
];

// const exampleInput2 = [
//     [
//         'WN269 Delaware',
//         'FL2269 Oregon',
//         'WN498 Las Vegas',
//         'WN3145 Ohio',
//         'WN612 Alabama',
//         'WN4010 New York',
//         'WN1173 California',
//         'DL2120 Texas',
//         'KL5744 Illinois',
//         'WN678 Pennsylvania'
//     ],
//     [
//         'DL2120 Cancelled',
//         'WN612 Cancelled',
//         'WN1173 Cancelled',
//         'SK330 Cancelled'
//     ],
//     ['Ready to fly']
// ];

// Call the function with input examples
flightSchedule(exampleInput1); // Expected output for 'Cancelled' status
//flightSchedule(exampleInput2); // Expected output for 'Ready to fly' status
