function manageComments(arr) {
  let users = [];
  let articles = [];
  let comments = {};

  arr.forEach((line) => {
    if (line.startsWith("user ")) {
      let username = line.slice(5);
      if (!users.includes(username)) {
        users.push(username);
      }
    } else if (line.startsWith("article ")) {
      let articleName = line.slice(8);
      if (!articles.includes(articleName)) {
        articles.push(articleName);
      }
    } else {
      let userPart = line.split(" posts on ")[0];
      let rest = line.split(" posts on ")[1];
      if (rest) {
        let articlePart = rest.split(": ")[0];
        let commentPart = rest.split(": ")[1];
        if (commentPart) {
          let commentTitle = commentPart.split(", ")[0];
          let commentContent = commentPart.split(", ")[1];

          let username = userPart;
          let articleName = articlePart;
          let title = commentTitle ? commentTitle : "";
          let content = commentContent ? commentContent : "";

          if (users.includes(username) && articles.includes(articleName)) {
            if (!comments[articleName]) {
              comments[articleName] = [];
            }
            comments[articleName].push({ username, title, content });
          }
        }
      }
    }
  });

  let sortedArticles = Object.keys(comments).sort(
    (a, b) => comments[b].length - comments[a].length
  );

  sortedArticles.forEach((article) => {
    console.log(`Comments on ${article}`);
    let sortedComments = comments[article].sort((a, b) =>
      a.username.localeCompare(b.username)
    );
    sortedComments.forEach((comment) => {
      console.log(
        `--- From user ${comment.username}: ${comment.title} - ${comment.content}`
      );
    });
  });
}

// Example usage:
let input1 = [
  "user aUser123",
  "someUser posts on someArticle: NoTitle, stupidComment",
  "article Books",
  "article Movies",
  "article Shopping",
  "user someUser",
  "user uSeR4",
  "user lastUser",
  "uSeR4 posts on Books: I like books, I do really like them",
  "uSeR4 posts on Movies: I also like movies, I really do",
  "someUser posts on Shopping: title, I go shopping every day",
  "someUser posts on Movies: Like, I also like movies very much",
];

// let input2 = [
//     'user Mark', 'Mark posts on someArticle: NoTitle, stupidComment', 'article Bobby',
//     'article Steven', 'user Liam', 'user Henry', 'Mark posts on Bobby: Is, I do really like them',
//     'Mark posts on Steven: title, Run', 'someUser posts on Movies: Like'
// ];

manageComments(input1);
//manageComments(input2);
