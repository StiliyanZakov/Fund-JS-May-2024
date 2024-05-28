function biggestOf3Numbers(num1, num2, num3) {
    let biggest = num1;
  
    if (num2 > biggest) {
      biggest = num2;
    }
  
    if (num3 > biggest) {
      biggest = num3;
    }
  
    console.log(biggest);
  }
  biggestOf3Numbers(-2, 7, 3);
  biggestOf3Numbers(130, 5, 99);
  biggestOf3Numbers(43, 43.2, 43.3);
  biggestOf3Numbers(2, 2, 2);
  