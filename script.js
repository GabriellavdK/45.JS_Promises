// // Opdracht promises om te leren hoe een promise in elkaar zit. 
// const sinterklaasIsGul = false; // Pas deze waarde aan om de uitkomst te beinvloeden. 

// // Promise maken (dit hoeven jullie dus niet te leren, dit is aan de API (back-end) kant)
// const krijgIkEenNieuweiPhone = new Promise(
// 	(resolve, reject) => {
// 		if (sinterklaasIsGul) {
// 			const smartphone = {
// 				merk: 'Apple',
// 				type: 'iPhone 11'
// 			};
// 			resolve(smartphone);
// 		} else {
// 			const metWelkeReden = new Error('Je bent stout geweest, geen cadeaus voor jou');
// 			reject(metWelkeReden);
// 		}

// 	}
// );

// // Promise aanroepen, of "consumeren" (dit zullen je dus wel doen en moeten leren)
// const vraagAanSinterklaas = () => {
// 	krijgIkEenNieuweiPhone
// 		.then(function (resolved) {
// 			// yay, je hebt een nieuwe smartphone
// 			console.log(resolved);
// 		})
// 		.catch(function (error) {
// 			// oeps, geen Sinterklaas cadeau dit jaar
// 			console.log(error.message);
// 		});
// }

// vraagAanSinterklaas();





/*
Exercise 1:
Write a function testNum that takes a number as an argument and returns a Promise that tests if the value 
is less than or greater than the value 10. Log the result to the console.
*/

const testNum = (number) => {
	return new Promise((resolve, reject) => {
		if (number > 10) {
			resolve(`${number} is greater than 10`);
		} else {
			reject(`${number} is less than 10`);
		}
	})
};

testNum(8)
	.then(result => console.log(result))
	.catch(error => console.log(error));

testNum(50)
	.then(result => console.log(result))
	.catch(error => console.log(error));

/*
Exercise 2:
Write two functions that use Promises that you can chain! The first function, makeAllCaps(), will take in an array 
of words and capitalize them, and then the second function, sortWords(), will sort the words in alphabetical order. 
If the array contains anything but strings, it should throw an error.
Then call these functions by *chaining* the promises
*/

const makeAllCaps = array => {
	return new Promise((resolve, reject) => {
		if (array.every(item => typeof item === 'string')) {
			resolve(sortWords(array.map(item => item.toUpperCase())));
		} else {
			reject("Error! Not a string.");
		}
	})
};

const sortWords = (array) => {
	return new Promise((resolve, reject) => {
		if (array) {
			resolve(array.sort());
		} else {
			reject("Strings only!")
		}
	})
};

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

// call both functions, chain them together and log the result to the console
makeAllCaps(arrayOfWords)
	.then(sortWords(arrayOfWords))
	.then(result => console.log(result))
	.catch(error => console.log(error));

makeAllCaps(complicatedArray)
	.then(sortWords(arrayOfWords))
	.then(result => console.log(result))
	.catch(error => console.log(error));



  //QUESTIONS: 
//What is .then() used for, and what is .catch() used for?
  //.then() is triggered when fetch gets a successful response from the server. 
  //.catch() is triggered when something went wrong with the request.

//What are good use cases for Promises?
  //Good use cases for Promises are - converting XMLHttpRequests to a promise-based task, anytime there is a chance that an asynchronous action will be taken.

//What other libraries/functions can you find that uses Promises?
  //AngularJS uses promises for async operations. 
  //Some methods that help us utilize promises are: .resolve(), .all(), .race(), .reject()
