function manageBooks(arr) {
  let shelves = {};

  arr.forEach((line) => {
    if (line.includes(" -> ")) {
      let [shelfId, shelfGenre] = line.split(" -> ");
      if (!shelves[shelfId]) {
        shelves[shelfId] = { genre: shelfGenre, books: [] };
      }
    } else if (line.includes(": ")) {
      let [bookPart, bookInfo] = line.split(": ");
      let [bookAuthor, bookGenre] = bookInfo.split(", ");

      let bookTitle = bookPart;
      let bookAuthorTrimmed = bookAuthor.replace(/^\s+|\s+$/g, "");
      let bookGenreTrimmed = bookGenre.replace(/^\s+|\s+$/g, "");

      for (let shelfId in shelves) {
        if (shelves[shelfId].genre === bookGenreTrimmed) {
          shelves[shelfId].books.push({
            title: bookTitle,
            author: bookAuthorTrimmed,
          });
          break;
        }
      }
    }
  });

  let sortedShelves = Object.keys(shelves).sort(
    (a, b) => shelves[b].books.length - shelves[a].books.length
  );

  sortedShelves.forEach((shelfId) => {
    shelves[shelfId].books.sort((a, b) => a.title.localeCompare(b.title));
  });

  sortedShelves.forEach((shelfId) => {
    let shelf = shelves[shelfId];
    console.log(`${shelfId} ${shelf.genre}: ${shelf.books.length}`);
    shelf.books.forEach((book) => {
      console.log(`--> ${book.title}: ${book.author}`);
    });
  });
}

// Example usage:
let input1 = [
  "1 -> history",
  "1 -> action",
  "Death in Time: Criss Bell, mystery",
  "2 -> mystery",
  "3 -> sci-fi",
  "Child of Silver: Bruce Rich, mystery",
  "Hurting Secrets: Dustin Bolt, action",
  "Future of Dawn: Aiden Rose, sci-fi",
  "Lions and Rats: Gabe Roads, history",
  "2 -> romance",
  "Effect of the Void: Shay B, romance",
  "Losing Dreams: Gail Starr, sci-fi",
  "Name of Earth: Jo Bell, sci-fi",
  "Pilots of Stone: Brook Jay, history",
];

// let input2 = [
//     '1 -> mystery', '2 -> sci-fi', 'Child of Silver: Bruce Rich, mystery',
//     'Lions and Rats: Gabe Roads, history', 'Effect of the Void: Shay B, romance',
//     'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi'
// ];

manageBooks(input1);
//manageBooks(input2);
