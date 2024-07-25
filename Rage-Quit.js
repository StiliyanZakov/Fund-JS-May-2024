function rageQuit(arr) {
  // Join the array into a single string if it's an array
  let input = Array.isArray(arr) ? arr.join("") : arr;

  // Use a regular expression to match non-digit characters followed by digits
  let regex = /([^\d]+)(\d+)/g;
  let match;
  let message = "";
  let uniqueSymbols = new Set();

  // Find all matches
  while ((match = regex.exec(input)) !== null) {
    let str = match[1].toUpperCase(); // The non-digit part (converted to uppercase)
    let num = parseInt(match[2]); // The digit part

    // Repeat the string and add to the message
    let repeatedStr = str.repeat(num);
    message += repeatedStr;

    // Add each character to the set of unique symbols
    for (let char of repeatedStr) {
      uniqueSymbols.add(char);
    }
  }

  console.log(`Unique symbols used: ${uniqueSymbols.size}`);
  console.log(message);
}
// Example inputs
rageQuit("a3"); // Expected output: "Unique symbols used: 1\nAAA"
rageQuit("aSd2&5s@1"); // Expected output: "Unique symbols used: 5\nASDASD&&&&&S@"
//rageQuit('e-!btI17z=E:DMJ19U1Tvg VQ>11P"qCmo.-0YHYu~o%/%b.}a[=d15fz^"{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{D\'xi]-~17 *%p"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p"Z<v13fI]\'\\Iz.17*W:\\mwV`z-15g@hUYE{_$~}+X%*nytkW15'); // This is a long example, check if the output is correct in case of large input.
