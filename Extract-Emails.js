function extractEmails(text) {
  const emailPattern =
    /(?<=\s|^)([a-zA-Z0-9]+[a-zA-Z0-9._-]*[a-zA-Z0-9]+)@([a-zA-Z]+(?:[a-zA-Z-]*[a-zA-Z]+)*\.[a-zA-Z]+(?:\.[a-zA-Z]+)*)/g;
  let matches = text.match(emailPattern);

  if (matches) {
    matches.forEach((email) => console.log(email));
  }
}

// Example usage:
const input1 = "Please contact us at: support@github.com.";
const input2 =
  "Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.";
const input3 =
  "Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.";

extractEmails(input1);
// Expected Output:
// support@github.com

extractEmails(input2);
// Expected Output:
// s.miller@mit.edu
// j.hopking@york.ac.uk

extractEmails(input3);
// Expected Output:
// steve.parker@softuni.de
