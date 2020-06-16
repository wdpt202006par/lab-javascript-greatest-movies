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


const directors = movies.map(function(el){
  return el.director;
  });
const uniqueDirectors = directors.filter(function(el, index){
  return (index === directors.indexOf(el));  
});

console.log(uniqueDirectors);




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
      return resultFinal.toFixed(2) //afficher le résultat avec 2 décimals
  }

  ratesAverage(movies);



  
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){        //filtrer sur les films Drama                           
var dramaMovie = movies.filter(function(el) {
        return el.genre.includes('Drama')
        });

var rate=dramaMovie.reduce(function(acc,value){ //Cumuler les rates des films drama 
        return acc+ value.rate;
}, 0);

var avgRate=rate/dramaMovie.length; //Calculer la moyenne des rates des films drama
        return avgRate.toFixed(2) // afficher le resultat avec 2 decimals
}
dramaMoviesRate(movies);


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies){
  var copy = movies.slice();        //copie du tableau  
  var mute = copy.map(function(el){  //muter le tableau avec les years
   return el.year });

  var muteTitle = copy.map(function(el){  //muter le tableau avec les titres
     return el.title});
  
  var ascendingOrder = mute.sort(function(a, b){ //ranger par ordre croissant en fonction des years
    if (a < b)return -1;
    if (a > b)return 1;
    if(a === b) return 0;
  })
  console.log (ascendingOrder);
  }
  
  orderByYear(movies)



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  const copy = array.map(function(el) {
    return el;
  })
  const newArray = copy.sort(function(a,b){
    return a.year - b.year;
  })
  return newArray
}
orderByYear(movies);


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array){
  const newArray = array.sort(function(a,b){
    return a.title.localeCompare(b.title);  
  })
  const newArray2 = newArray.map(function(el) {
      return el.title;
    })
  const newArray3 = newArray2.filter(function(el,index) {
    return index < 20;
  })
  return newArray3;
  
}
console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {
  const durations = array.map(function(el){
    const durationString = el.duration;
    let indexH = durationString.indexOf("h");
    let indexMin = durationString.indexOf("min");
    let hours = Number(durationString.substring(0, indexH));
    let minutes = 0;
    if (indexMin > 0) {
      minutes = Number(durationString.substring(indexH+1, indexMin));
    }
    return hours * 60 + minutes;
  });
  return durations;
}

turnHoursToMinutes(movies);


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
