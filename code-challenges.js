// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Run the file with the following command: $ node code-challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a function that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:


// --------------------1)  Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

const combinedArray = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)

console.log(combinedArray.length)


// Pseudo code:

// input: two arrays
// output: return the length of the combined arrays
// evaulate: how to combinded them properly with a outcome of 9
// used concat to combined both array and use length to count the ammount of value in the combined array


// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.


const currentCohort = "LEARN 2023"
// Expected output: "3202 NRAEL"
console.log(currentCohort.split("").reverse("").join(""))

// Pseudo code:
// input: the data type would be a string
// output: will reverse the string to read "NRAEL 3202"
// evauluate: that the answers are 
// can use .split to turn the string into an array
// split without any other comandes give the same resault 
//  must add "quotation marks" inside of ()
//  need to revert array back into a string to get proper outcome  add .join for proper outcome


// --------------------3) Use a for loop to log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: 13 5 -5 27

// Pseudo code:
// input array 
// output odd numbers from the variable
// evailuate: use a for-loop to use the array useing bracket notation to recive the value 
// if the value is odd it will print the odd numbers by useing a modulo % if remainder the value is going to be 1 or -1 

for (let i = 0; i < stockExchange.length; i++) { 
    if (stockExchange[i] % 2 === 1 || stockExchange[i] % 2 === -1) { 
        console.log(stockExchange[i])
    }
}
