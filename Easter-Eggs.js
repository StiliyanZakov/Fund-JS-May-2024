function findEasterEggs(input) {
    const text = input[0];
    const regex = /[@#]+([a-z]{3,})[@#]+[^a-zA-Z0-9]*\/(\d+)\//g;
    const results = [];
    let match;
  
    while ((match = regex.exec(text)) !== null) {
      const color = match[1];
      const amount = match[2];
      results.push(`You found ${amount} ${color} eggs!`);
    }
  
    results.forEach((result) => console.log(result));
  }
  
  // Example usage
  findEasterEggs([
    "@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/",
  ]);
  //findEasterEggs(['#@##@red@#/8/@rEd@/2/#@purple@////10/']);
  