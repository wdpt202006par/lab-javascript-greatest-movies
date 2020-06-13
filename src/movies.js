// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
	const directors = movies.map(movie => movie.director);
	return directors;
}
getAllDirectors(movies);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// function removeDuplicates(originalArray, prop) {
// 	let newArray = [];
// 	let lookupObject  = {};

// 	for(let i in originalArray) {
// 		 lookupObject[originalArray[i][prop]] = originalArray[i];
// 	}

// 	for(i in lookupObject) {
// 			newArray.push(lookupObject[i]);
// 	}
// 	 return newArray;
// }

// let uniqueArray = removeDuplicates(movies, "director");
// console.log("uniqueArray is: " + JSON.stringify(uniqueArray));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
	const stevenDrama = movies.filter(movie => movie.director === 'Steven Spielberg').filter(movie => movie.genre.includes('Drama')).length;
	return stevenDrama;
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
	const totalMovies = movies.length;
	let sumAverage = movies.reduce((acc, key) => {
		if (key.rate) {
			return acc + key.rate;
		} else {
			return acc;
		}
	}, 0);
	if (movies.length === 0) {
		return 0;
	} else {
		return Math.round((sumAverage / totalMovies) * 100) / 100;
	}
}
ratesAverage(movies);


// Iteration 4: Drama movies - Get the average of Drama er(key) Movies

function dramaMoviesRate(movies) {
	const dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));
	const averageRateDrama = ratesAverage(dramaMovies);
	return averageRateDrama;
}
dramaMoviesRate(movies);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
	let newArray = [...movies];
	newArray.sort(function(a, b) {
		if (a.year === b.year) {
			return (a.title).localeCompare(b.title);
		} else {
			return (a.year - b.year);
		}
	})
	return newArray;
}
orderByYear(movies);


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
	let titleArray = [...movies];
	const orderedTitle = titleArray.sort(function (a, b) {
		return (a.title).localeCompare(b.title);
	})
	const twenty = orderedTitle.map(function(movie) {
		return movie.title;
	})
	return twenty.slice(0, 20);
}
orderAlphabetically(movies);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average