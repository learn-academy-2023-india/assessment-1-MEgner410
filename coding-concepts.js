// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: .length was used to tell us what the value is inside the string and 10 charaters are inside the string

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: 4 
// b) Verify and explain: answer was o due to the vaule at the 4th index spot, this was because of it being zero-index

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer:javascript 
// b) Verify and explain: ruby was the answer, the const was asking for the 1 spot of the array, the 1 index spot is Ruby due to the zero-index again. 

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: SATURDAY, SUNDAY
// b) Verify and explain: TypeError: weekendDays.toUpperCase is not a function, .toUppercase will only work in a string data type

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: 42
// b) Verify and explain: number is the answer, due to it being a array it counted the amount of value seperated by the commas. 
// typeof is a operator to help find the data type value
