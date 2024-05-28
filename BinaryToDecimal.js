function binaryToDecimal(binaryStr) {
  if (binaryStr.length !== 8) {
  }

  const decimal = parseInt(binaryStr, 2);

  console.log(decimal);
}
binaryToDecimal('00001001');
binaryToDecimal('11110000');
