function bitcoinMining(arr) {
  let bitcoinCount = 0;
  let firstBitcoinDay = 0;
  let totalmoney = 0;
  let curDay = 1;

  for (let i = 0; i < arr.length; i++) {
    let gold = arr[i];

    if (curDay % 3 === 0) {
      gold *= 0.7;
    }

    let moneyFromGold = gold * 67.51;

    totalmoney += moneyFromGold;

    while (totalmoney >= 11949.16) {
      if (bitcoinCount === 0) {
        firstBitcoinDay = curDay;
      }

      bitcoinCount++;
      totalmoney -= 11949.16;
    }
    curDay++;
  }
  console.log(`Bought bitcoins: ${bitcoinCount}`);

  if (bitcoinCount > 0) {
    console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
  }

  console.log(`Left money: ${totalmoney.toFixed(2)} lv.`);
}
//bitcoinMining([100, 200, 300]);
//bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);
