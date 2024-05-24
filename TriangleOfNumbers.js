function triangleOfNumbers(num) {
  let text = "";

  for (let i = 1; i <= num; i++) {
    text = `${i} `;
    for (let a = 1; a < i; a++) {
      text += `${i} `;
    }
    console.log(text);
  }
}
//triangleOfNumbers(3);
triangleOfNumbers(5);
//triangleOfNumbers(6);
//triangleOfNumbers(8);
