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
  var sumRate = movies
    .filter((el) => {
      return el.rate > 0;
    })
    .reduce(function (acc, currentValue) {
      return acc + currentValue.rate;
    }, 0);

  var avg = sumRate / movies.length;
  console.log(avg);
  return Number(avg.toFixed(2)) || 0;
}

// ratesAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  var dramaSum = movies
    .filter(function (el) {
      // .filter() returns an array with the condition included.
      return el.genre.includes("Drama"); //WARNING: .includes() returns a boolean value and NOT an array therefore .length does not work = infinity.
    })
    .reduce(function (acc, currentValue) {
      return acc + currentValue.rate;
    }, 0);
  var dramaMovieNum = movies.filter(function (el) {
    return el.genre.includes("Drama");
  }).length;
  var dramaRate = dramaSum / dramaMovieNum;
  return Number(dramaRate.toFixed(2)) || 0;
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  var sortedMovies = movies.slice(0); // .slice(<startingIndexNumber>) copy an array. Why not using .map() ?
  return sortedMovies.sort(function (a, b) {
    // return a.year - b.year;
    if (a.year < b.year) return -1;
    if (a.year > b.year) return 1;
    if (a.year === b.year)
      //{
      //   sortedMovies.sort(function (a, b) {
      //     var nameA = a.name.toUpperCase();
      //     var nameB = b.name.toUpperCase();
      //     if (nameA < nameB) return -1;
      //     if (nameA > nameB) return 1;
      //     if (nameA === nameB) return 0;
      //   });
      // }
      return 0;
  });
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

/*
1- GET ALL MOVIE TITLES ORDERED FROM A - Z
2- RETURN AN ARRAY WITH THE 20 FIRST TITLE ORDERED
3- IF LESS THAN 20 MOVIES AVAILABLE IN THE ARRAY PRINT THEM ALL
*/

function orderAlphabetically(movies) {
  var alphaBMovies = movies.slice(0);
  var titleList = [];
  var orderedTitle = alphaBMovies.sort(function (a, b) {
    var nameA = a.name;
    var nameB = b.name;
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    if (nameA === nameB) return 0;
  });
  orderedTitle.map(function (el) {
    return titleList.push(el.title);
  });
  if (titleList.length > 20) {
    var shortenList = titleList.slice(0, 20);
    return shortenList;
  } else {
    return titleList;
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
