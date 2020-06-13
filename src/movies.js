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
    return acc + currentValue.rate;
  }, 0);
  var avg = sumRate / movies.length;
  console.log(avg);
  return avg.toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
