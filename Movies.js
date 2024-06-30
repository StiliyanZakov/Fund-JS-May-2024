function manageMovies(commands) {
  const movies = [];

  commands.forEach((command) => {
    if (command.includes("addMovie")) {
      const movieName = command.replace("addMovie ", "");
      movies.push({ name: movieName });
    } else if (command.includes(" directedBy ")) {
      const [movieName, director] = command.split(" directedBy ");
      const movie = movies.find((m) => m.name === movieName);
      if (movie) {
        movie.director = director;
      }
    } else if (command.includes(" onDate ")) {
      const [movieName, date] = command.split(" onDate ");
      const movie = movies.find((m) => m.name === movieName);
      if (movie) {
        movie.date = date;
      }
    }
  });

  movies.forEach((movie) => {
    if (movie.name && movie.director && movie.date) {
      console.log(JSON.stringify(movie));
    }
  });
}

// Examples
manageMovies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);

// manageMovies([
//     'addMovie The Avengers',
//     'addMovie Superman',
//     'The Avengers directedBy Anthony Russo',
//     'The Avengers onDate 30.07.2010',
//     'Captain America onDate 30.07.2010',
//     'Captain America directedBy Joe Russo'
// ]);
