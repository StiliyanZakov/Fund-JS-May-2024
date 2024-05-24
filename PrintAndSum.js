function printAndSum(start, end) {
  let sum = 0;
  let allNUms = '';
  for (let curNum = start; curNum <= end; curNum++) {
    sum += curNum;
    allNUms += curNum + ' ';
    
  }
  console.log(allNUms);
  console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
//printAndSum(0, 26);
//printAndSum(50, 60);
