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

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
