function sumDigits(number) {
  let sum = 0;
  let numberStr = `${number}`;
  for (let i = 0; i < numberStr.length; i++) {
    let curDigit = Number(numberStr[i]);
    sum += curDigit;
  }
  console.log(sum);
}
sumDigits(245678);
sumDigits(97561);
sumDigits(543);
