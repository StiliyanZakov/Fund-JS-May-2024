function primeNumChecker(num) {
  let result = "";

  if (num <= 1) {
    result = false;
  } else {
    result = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        result = false;
        break;
      }
    }
  }

  console.log(result);
}
primeNumChecker(7);
primeNumChecker(8);
primeNumChecker(81);
