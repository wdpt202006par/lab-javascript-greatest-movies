// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies){
    return movies.map (element => element.director);
  }
  getAllDirectors(movies);
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
const result =directors.filter((element, indice) => directors.indexOf(element) === indice);
  console.log(result);
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies){
  var numberOfMovies=0;
  for (let i=0; i< movies.length; i++){
    for (let j=0; j< movies[i].genre.length; j++){
      if (movies[i].genre[j]=== "Drama" && movies[i].director==="Steven Spielberg"){
        console.log(movies[i]);
        numberOfMovies++;
    }
  }
  }
  return numberOfMovies;
}
console.log(howManyMovies(movies));
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies){
  if (movies.length===0){
    return 0
  }else {
    var reducer= movies.map(function(element){
      if(element.rate>0){
        return element.rate
      }else{
        return 0;
      }
      });
    console.log(reducer);  
    var average = reducer.reduce(function (accumulator, cucurrentValue) {
      return (accumulator + cucurrentValue)
      }, 0 );
    return Math.round((average/reducer.length)*100)/100
  }
}
  console.log(ratesAverage(movies));
// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
