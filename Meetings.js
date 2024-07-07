function meetings(input) {
  let meetings = {};
  for (let line of input) {
    let [weekday, name] = line.split(" ");
    if (meetings.hasOwnProperty(weekday)) {
      console.log(`Conflict on ${weekday}!`);
    } else {
      meetings[weekday] = name;
      console.log(`Scheduled for ${weekday}`);
    }
  }
  // Print the final schedule
  for (let weekday in meetings) {
    console.log(`${weekday} -> ${meetings[weekday]}`);
  }
}

meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);

// meetings(["Friday Bob", "Saturday Ted", "Monday Bill", "Monday John", "Wednesday George",]);
