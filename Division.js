function division(num) {
  let divisors = [10, 7, 6, 3, 2];

  for (let i = 0; i < divisors.length; i++) {
    let divisor = divisors[i];

    if (num % divisor === 0) {
      console.log(`The number is divisible by ${divisor}`);
      return;
    }
  }

  console.log("Not divisible");
}
division(30);
//division(15);
//division(12);
//division(1643);
