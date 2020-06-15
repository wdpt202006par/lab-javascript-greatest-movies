function getAllDirectors(movies) {
  var getAllDirectors = movies.map(function (el) {
    return el.director;
  });
  return getAllDirectors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  return movies
    .filter(function (el) {
      return el.director === "Steven Spielberg";
    })
    .filter(function (el) {
      return el.genre.includes("Drama");
    }).length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  var sumRate = movies.reduce(function (acc, currentValue) {
    return acc + currentValue.rate; // How to return 0 if a movie doesn't have rate - Fallback probably but where to place it ?
  }, 0);
  var avg = sumRate / movies.length;
  console.log(avg);
  return Number(avg.toFixed(2)) || 0;
}

// ratesAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  var dramaSum = movies
    .filter(function (el) { // .filter() returns an array with the condition included.
      return el.genre.includes("Drama"); //WARNING: .includes() returns a boolean value and NOT an array therefore .length does not work = infinity.
    })
    .reduce(function (acc, currentValue) {
      return acc + currentValue.rate;
    }, 0);
  var dramaMovieNum = movies
    .filter(function (el) {
      return el.genre.includes("Drama");
    }).length;
  var dramaRate = dramaSum / dramaMovieNum;
  return Number(dramaRate.toFixed(2)) || 0;
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  var sortedMovies = movies.map(function (el) {
    return el.sort(function (a, b) {
      if (a < b) return -1;
      if (a > b) return 1;
      if (a = b) return 0;
    })
  })
  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average