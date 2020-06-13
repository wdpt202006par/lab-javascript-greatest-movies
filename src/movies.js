// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies){
    var mappedArr = movies.map(function(movie){
       return movie['director'];
       })
       return mappedArr;
   }
   console.log(getAllDirectors(movies));
   
   // _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
   
   // Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
   function howManyMovies(movies) {
       var filterArr = movies.filter(function (el){
           return el["director"] === "Steven Spielberg";
       }).filter(function (el) {
           return el["genre"].includes("Drama")
       })
       return filterArr.length;
   }
   console.log(howManyMovies(movies));
   
   // Iteration 3: All rates average - Get the average of all rates with 2 decimals
   function ratesAverage(movies) {
       if(movies.length === 0) {
           return 0;
       }
       /*if (movies.length === 1) {
           return Number(rate)
       } // TO BE CHECKED*/
           
       var rateArr = movies.map(function(el){
           return el['rate'];
       }).reduce(function(totalRate, rate){
           return (totalRate+rate);
       }, 0)
       return Number((rateArr/movies.length).toFixed(2));
   }
   console.log(ratesAverage(movies));
   
   // Iteration 4: Drama movies - Get the average of Drama Movies
   function dramaMoviesRate (movies) {
       var dramaArr = movies.filter(function (el){
           return el["genre"].includes("Drama");
       })
       var avgDramaRate = ratesAverage(dramaArr);
       return avgDramaRate;
   }
   
   // Iteration 5: Ordering by year - Order by year, ascending (in growing order)
   function orderByYear(movies){
       var moviescopy= movies.slice();
       var filterMoviescopy = moviescopy.filter(function (el){
           return el["year"];
       }).sort(function(a,b){
           if (a < b) return -1;
           if (a > b) return 1;
           if (a === b) return 0;
       })
       return filterMoviescopy;
   }
   console.log(orderByYear(movies)); //il reste 2 tests à valider
   
   
   // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
   function orderAlphabetically(movies) {
       var mappedArr = movies.map(function (el){
           return el["title"];
       }).sort();
       if (mappedArr.length <= 20) {
           return mappedArr;
       }
       return mappedArr.slice(0,20);
   }
   
   orderAlphabetically(movies);
   // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

   function turnHoursToMinutes(movies) {
       var mappedArr = movies.map(function(el){
           return el['duration'];
       })
       var durationArr = mappedArr.map(function(el){
        var parts = el.split('h');
        var minutes = Number(parts[0])*60+Number(parts[1]);
        return minutes;
       })
       
   }
console.log(turnHoursToMinutes()); // il reste 7 tests

/*
var str = "3h30";
var parts = str.split('h');
var minutes = Number(parts[0])*60+Number(parts[1]);
alert(minutes); // 210

  */ 
   // BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
   