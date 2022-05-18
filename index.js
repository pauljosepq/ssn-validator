const prompt = require('prompt-sync')

const ssn = prompt("Introduce your social security number");
const regex = /((?!000|666)[0-8]\d{2})-((?!00)\d{2})-((?!0000)\d{4})/g

if (regex.test(ssn)) {
	console.log("Valid")
} else{
	console.log("Invalid")
}