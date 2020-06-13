// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors (movies) {
  var directorsArray = movies.map(function(el){
    return el.director;
  });
return directorsArray;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function uniquifyArray (directorsArray) {
  let newArray = []; 
  for (let i ; i < directorsArray.length ; i++) {
    if (newArray.indexOf(directorsArray[i]) === -1) {
      newArray.push(directorsArray[i]);
    }
  }
  return newArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies (movies){
let movieFilter = movies.filter(function (el){
  return el.director === "Steven Spielberg" && el.genre.includes("Drama");
});
return movieFilter.length;
};


// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  if(movies.length === 0){
    return 0;
  }
    const sum = movies.reduce(function(sum, movies){
      return sum + movies.rate;
    }, 0);
  return Number((sum/movies.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate (movies){
  let dramaMovies = movies.filter(function (el){
    return el.genre.includes("Drama");
  })
  return ratesAverage(dramaMovies);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
let moviesOrder = movies.splice(); // [ ]
let newMovieOrder = movies.map(function (el){
  return el.year;
})

function orderByYear(newMovieOrder){
  return newMovieOrder.sort(function (a, b) {
    if (a < b) return -1;
     if (a > b) return 1;
     if (a === b) return 0;
});  
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
let moviesAlpha = movies.title.slice();

function orderAlphabetically(moviesAlpha){
  let filter = moviesAlpha.sort()
  return filter.slice(0,20);
}

/*
let filter = moviesAlpha.sort().filter(function(el){
     return el.length <= 20;
  })
  return filter;
}
*/

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
