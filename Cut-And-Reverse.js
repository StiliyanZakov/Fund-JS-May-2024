function cutAndReverse(input) {
  let len = input.length;
  let half = Math.floor(len / 2);

  let firstHalf = input.substring(0, half).split("").reverse().join("");
  let secondHalf = input.substring(half).split("").reverse().join("");

  console.log(firstHalf);
  console.log(secondHalf);
}

// Example usage:
cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
cutAndReverse("sihToDtnaCuoYteBIboJsihTtAdooGoSmI");
