// Iteration 1: All directors? - Get the array of all directors.
// utiliser map et function callback  getAllDirectors(tableau)
  
function getAllDirectors(movieList){
  return movieList.map(function(movie){
    return movie.director;
 })
}
const result = getAllDirectors(movies);

console.log(result);


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies){
    return movies
      .filter(function(el) {
        return el.director==="Steven Spielberg"
        })
      .filter(function(el) {
        return el.genre.includes('Drama')
        })
      .length
  }

  howManyMovies(movies)

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    var result=movies.reduce(function(acc,value){
      return acc+ value.rate;
    }, 0);
  
    var resultFinal= result/movies.length;
    console.log(resultFinal);
  //afficher le résultat avec 2 décimals
    return resultFinal.toFixed(2)
  }
  
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
  //filtrer sur les films Drama
var dramaMovie = movies.filter(function(el) {
        return el.genre.includes('Drama')
        });
//Cumuler les rates des films drama 
var rate=dramaMovie.reduce(function(acc,value){
  return acc+ value.rate;
}, 0);
//Calculer la moyenne des rates des films drama
var avgRate=rate/dramaMovie.length;

// afficher le resultat avec 2 decimals
return avgRate.toFixed(2)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies){
  //copie du tableau 
  var copy = movies.slice();
  //muter le tableau avec les years 
  var mute = copy.map(function(el){
   return el.year });
   //muter le tableau avec les titres
  var muteTitle = copy.map(function(el){
     return el.title});
  //ranger par ordre croissant en fonction des years
  var ascendingOrder = mute.sort(function(a, b){
    if (a < b)return -1;
    if (a > b)return 1;
    if(a === b) return 0;
  })
  console.log (ascendingOrder);
  }
  
  orderByYear(movies)

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
