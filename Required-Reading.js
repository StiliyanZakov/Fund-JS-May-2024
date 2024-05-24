function requiredReading(bookPages, pagesPerHour, daysAvailable) {
  let timeNeed = bookPages / pagesPerHour / daysAvailable;
  console.log(timeNeed);
}
requiredReading(212, 20, 2);
requiredReading(432, 15, 4);
