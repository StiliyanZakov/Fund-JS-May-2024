function factorialDivision(num1, num2) {
  function calculateFactorial(num) {
    let factorial = 1;

    for (let factor = 2; factor <= num; factor++) {
      factorial *= factor;
    }
    return factorial;
  }
  const factorial1 = calculateFactorial(num1);
  const factorial2 = calculateFactorial(num2);
  const quotion = factorial1 / factorial2;
  console.log(quotion.toFixed(2));
}
factorialDivision(5, 2);
factorialDivision(6, 2);
