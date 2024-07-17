//function matchDates(input) {
  // Define the regex pattern
//   const regex =
//     /\b(?<day>\d{2})(?<separator>[./-])(?<month>[A-Z][a-z]{2})\k<separator>(?<year>\d{4})\b/g;

//   // Get all matches
//   const matches = input[0].matchAll(regex);

//   // Iterate over each match and print the required format
//   for (const match of matches) {
//     const { day, month, year } = match.groups;
//     console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
//   }
// }


function matchDates(input) {
  // Define the regex pattern
  const regex = /\b(?<day>\d{2})(?<separator>[./-])(?<month>[A-Z][a-z]{2})\k<separator>(?<year>\d{4})\b/g;
  
  let match;
  // Use a while loop to find all matches
  while ((match = regex.exec(input[0])) !== null) {
      const { day, month, year } = match.groups;
      console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
  }
}
// Test cases
matchDates([
  "13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016",
]);
matchDates(["1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014"]);
 