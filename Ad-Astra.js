function adAstra(input) {
  const text = input[0];
  const pattern = /(#|\|)([A-Za-z\s]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d{1,5})\1/g;
  let match;
  let totalCalories = 0;
  const foodItems = [];

  while ((match = pattern.exec(text)) !== null) {
    const itemName = match[2];
    const expirationDate = match[3];
    const calories = +match[4]; // Using unary plus to convert string to number

    totalCalories += calories;
    foodItems.push({
      itemName,
      expirationDate,
      calories,
    });
  }

  const days = Math.floor(totalCalories / 2000);

  console.log(`You have food to last you for: ${days} days!`);
  foodItems.forEach((item) => {
    console.log(
      `Item: ${item.itemName}, Best before: ${item.expirationDate}, Nutrition: ${item.calories}`
    );
  });
}

// Example input
adAstra([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);
// adAstra([
//   "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
// ]);
// adAstra(["Hello|#Invalid food#19/03/20#450|$5*(@"]);
