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
    var sum = reducer.reduce(function (accumulator, cucurrentValue) {
      return (accumulator + cucurrentValue)
      });
    return Math.round((sum/reducer.length)*100)/100
  }
}
  console.log(ratesAverage(movies));
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
  let dramaMovies=[];
  for (let j=0; j<movies.length; j++){
    for(let i=0; i<movies[j].genre.length ; i++){
      if (movies[j].genre[i]=== "Drama"){
        if(movies[j].rate>0){
          dramaMovies.push(movies[j].rate)
        }else{
          dramaMovies.push(0)
        }
      }else{
        continue;
      }
    }
  }
  console.log(dramaMovies);
  if(dramaMovies.length===0){
    return 0;
  }else{  
    var sum = dramaMovies.reduce(function (accumulator, cucurrentValue) {
      return (accumulator + cucurrentValue)
      });
    return Math.round((sum/dramaMovies.length)*100)/100
  }
}
  console.log(dramaMoviesRate(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies){
  var moviesCopy= movies.slice();
  moviesCopy.sort((a, b) => a.title.localeCompare(b.title));
  moviesCopy.sort(function (a, b) {
    return a.year - b.year;
  });
  return moviesCopy
}

console.log(orderByYear(movies))
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
  var moviesCopy= movies.slice();
  moviesCopy.sort((a, b) => a.title.localeCompare(b.title));
  let topTitle=[];
  for (let i=0; i<moviesCopy.length; i++){
    topTitle.push(moviesCopy[i].title)
  }
  if (topTitle.length>20){
    return topTitle.slice(0,20);
  }else{
  return topTitle
  }
}
console.log(orderAlphabetically(movies))
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies){
  var moviesCopy= movies.slice();
  var durationCopy=[];
  var h;
  var m;
  for(i=0; i<moviesCopy.length; i++){
    durationCopy=(moviesCopy[i].duration.split(' '));
    h=parseInt(durationCopy[0]);
    if(durationCopy.length>1){
      m=parseInt(durationCopy[1]);
    }else {
      m=0;
    }
    
    moviesCopy[i].duration=(h*60)+m;
    
  }
  return moviesCopy
}
turnHoursToMinutes(movies)

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies){
  if(movies.length===0){
    return null
  }else{
    let ordredMovies=orderByYear(movies);
    console.log(ordredMovies);
    var year=ordredMovies[0].year;
    var averageRate=ordredMovies[0].rate;
    var bestAverage=0;
    var bestYear=0;
    for (i=1; i<ordredMovies.length; i++){
      if(ordredMovies[i].year===year){
        averageRate= (averageRate+ ordredMovies[i].rate)/2;
      }else {
        if(bestAverage< averageRate){
          bestAverage=averageRate;
          bestYear=year;
        }
        year=ordredMovies[i].year;
        averageRate=ordredMovies[i].rate;
      }
    }
    console.log(`The best year was ${bestYear} with an average rate of ${bestAverage}`)
  }
}
bestYearAvg(movies)