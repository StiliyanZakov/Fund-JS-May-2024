function generateEmployeeNumbers(employees) {
  const employeeDict = {};

  employees.forEach((name) => {
    employeeDict[name] = name.length;
  });

  for (const [name, personalNumber] of Object.entries(employeeDict)) {
    console.log(`Name: ${name} -- Personal Number: ${personalNumber}`);
  }
}

// Examples
generateEmployeeNumbers([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
// generateEmployeeNumbers([
//   "Samuel Jackson",
//   "Will Smith",
//   "Bruce Willis",
//   "Tom Holland",
// ]);
