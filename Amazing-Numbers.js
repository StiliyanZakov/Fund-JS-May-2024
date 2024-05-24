function amazingNUmbers(num) {
  let curNum = num.toString();

  let sum = 0;
  for (let i = 0; i < curNum.length; i++) {
    sum += Number(curNum[i]);
  }
  let result = sum.toString().includes("9");
  console.log(result ? `${curNum} Amazing? True` : `${curNum} Amazing? False`);
}
amazingNUmbers(1233);
amazingNUmbers(999);
