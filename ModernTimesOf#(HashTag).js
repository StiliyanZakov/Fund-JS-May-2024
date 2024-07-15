function extractHashtags(text) {
  //   // Split the input string into words
  //   const words = input.split(" ");

  //   // Filter out words that start with # and consist only of letters
  //   const hashtags = words
  //     .filter((word) => word.startsWith("#") && /^[a-zA-Z]+$/.test(word.slice(1)))
  //     .map((word) => word.slice(1));

  //   // Print each valid hashtag on a new line
  //   hashtags.forEach((tag) => console.log(tag));
  // }

  // // Test examples
  // const input1 =
  //   "Nowadays everyone uses # to tag a #special word in #socialMedia";
  // extractHashtags(input1);
  // Output:
  // special
  // socialMedia

  // const input2 =
  //   "The symbol # is known #variously in English-speaking #regions as the #number sign";
  // extractHashtags(input2);
  // Output:
  // variously
  // regions
  // number

  const words = text.split(" ");
  const hashWords = words.filter(
    (word) => word.startsWith("#") && word.length > 1
  );

  const pattern = /\b[A-Za-z]+\b/;
  for (let hashtag of hashWords) {
    hashtag = hashtag.substring(1);

    if (pattern.test(hashtag)) {
      console.log(hashtag);
    }
  }
}

extractHashtags(
  "Nowadays everyone uses # to tag a #special word in #socialMedia"
);
extractHashtags(
  "The symbol # is known #variously in English-speaking #regions as the #number sign"
);
