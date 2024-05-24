function leapYear(year) {
  condition1 = year % 4 === 0 && year % 100 !== 0;
  condition2 = year % 400 === 0;

  if (condition1 || condition2) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
leapYear(1984);
//leapYear(2003);
//leapYear(4);
