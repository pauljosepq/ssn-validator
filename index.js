const prompt = require('prompt-sync')()

console.log("Welcome")

// User input of the SSN
const ssn = prompt("Introduce a Social Security Number: ")

// Expression to validate SSN
const regex = /((?!000|666)[0-8]\d{2})-((?!00)\d{2})-((?!0000)\d{4})/g

// Conditional that validates a SSN
if (regex.test(ssn)) {
	console.log("Valid")
} else {
	console.log("Invalid")
}