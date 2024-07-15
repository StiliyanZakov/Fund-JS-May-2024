function treasureFinder(inputArray) {
  // Extract the key from the input array
  let key = inputArray[0].split(" ").map(Number);
  let messages = inputArray.slice(1, -1);

  messages.forEach((message) => {
    let decryptedMessage = "";
    for (let i = 0; i < message.length; i++) {
      // Calculate the ASCII value adjustment using the key
      let keyIndex = i % key.length;
      let decryptedChar = String.fromCharCode(
        message.charCodeAt(i) - key[keyIndex]
      );
      decryptedMessage += decryptedChar;
    }

    // Extract the treasure type and coordinates from the decrypted message
    let typeMatch = decryptedMessage.match(/&([^&]+)&/);
    let coordinatesMatch = decryptedMessage.match(/<([^>]+)>/);

    if (typeMatch && coordinatesMatch) {
      let type = typeMatch[1];
      let coordinates = coordinatesMatch[1];
      console.log(`Found ${type} at ${coordinates}`);
    }
  });
}

// Example calls
treasureFinder([
  "1 2 1 3",
  "ikegfp'jpne)bv=41P83X@",
  "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
  "find",
]); // Expected output: Found gold at 10N70W, Found Silver at 32S43W

treasureFinder([
  "1 4 2 5 3 2 1",
  'Ulgwh"jt$ozfj!\'kqqg(!bx"A3U237GC',
  "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
  "'stj)>34W68Z@",
  "find",
]); // Expected output: Found gold at 0S123E, Found gold at 102N43W, Found ore at 23S43W
