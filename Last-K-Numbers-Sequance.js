function lastKNumbersSequance(n, k) {
  const result = [1];

  for (let i = 1; i < n; i++) {
    let lastK = result.slice(-k);
    let sum = 0;

    for (let num of lastK) {
      sum += num;
    }
    result.push(sum);
  }
  console.log(result.join(" "));
}
lastKNumbersSequance(6, 3);
// lastKNumbersSequance(8, 2);
// lastKNumbersSequance(9, 5);
