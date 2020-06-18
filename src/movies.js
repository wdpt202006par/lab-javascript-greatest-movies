// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    let directors = movies.map( movie => movie.director);
    return directors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies){
 let stevenMovies = movies.filter(function (el) {
   return el.director === "Steven Spielberg" && el.genre.includes("Drama")
})
    return stevenMovies.length
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies){
    filteredMovies = movies.filter(function(movie){
        return typeof(movie.rate) === "number" 
    })

    var result = filteredMovies.reduce(function(ratesAverage, movie){
        return movie.rate + ratesAverage      
    }, 0) / movies.length;

    if(movies.length === 0 ){
        return 0
    }
    else{
        return Number(result.toFixed(2));
    }    
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
    filteredDramas = movies.filter(function(drama){
        return drama.genre.includes("Drama") 
    })
    var resultDrama = filteredDramas.reduce(function(ratesDramaAverage, drama){
        return drama.rate + ratesDramaAverage      
    }, 0) / filteredDramas.length;

    if(filteredDramas.length === 0 ){
        return 0
    }
    else{
        return Number(resultDrama.toFixed(2));
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear (movies) {

    let result = movies.slice().sort(function(a, b){

        if (a.year === b.year) {

            if (a.title > b.title) {
                return 1
            } else {
                return -1;
            } 
        }else {
            return a.year - b.year;
        }
    })
    return result
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (movies) {
    let titles = []
    
    for (movie of movies) {
      titles.push(movie.title)
    }  
    
    let result = titles.sort()    
    if (result.length < 20){
        return result
    } else {
        return result.slice(0,20)
    }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies){

    let moviesWithMins = movies.map(

        function(movie) {

            duration = movie.duration.split(' ')
            hours = Number(duration[0].split('h')[0])
            mins = Number(duration[1].split("min")[0])
            movie.duration = mins + (hours * 60)

            return movie
        }
    )

    return moviesWithMins
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function getMovieYears(movies){

    let movieYears = movies.reduce((accum, movie) => {
        if (!accum.includes(movie.year)){accum.push(movie.year)}
        return accum
      }, []).sort( (a,b) => a-b);    

    return movieYears 
}

function bestYearAvg(movies) {

    let years = getMovieYears(movies)

    let yearByAvg = []
    for (year of years){

        let moviesFilteredByYear = movies.filter(movie => year === movie.year)

        let avgOfYear = moviesFilteredByYear.reduce(
            (accum, movie) => accum + movie.rate, 0) / moviesFilteredByYear.length

            yearByAvg.push( {year : year, average: avgOfYear})
    }
    
    let bestYear = yearByAvg.sort((a, b) => b.average - a.average )[0] 

    return `The best year was ${bestYear.year} with an average rate of ${bestYear.average}`

    
}
  

