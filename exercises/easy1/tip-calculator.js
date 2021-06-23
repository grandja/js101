let rlSync = require('readline-sync');

// Prompt user for bill and tip percentage
let bill = rlSync.question('What is the bill? ');
let percentage = rlSync.question('What is the tip percentage? ');

// Convert string input to number
// Convert percentage integer to fraction
bill = Number(bill);
percentage = Number(percentage / 100);

console.log(typeof(bill));
console.log(typeof(percentage));

// Calculate tip and bill
// Use two decimal places because money
let tip = bill * percentage;
let total = bill + tip;

// Output
console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);


/* Solution
let readlineSync = require("readline-sync");

let bill = parseFloat(readlineSync.question("What is the bill?\n"));

let percentage = parseFloat(
  readlineSync.question("What is the tip percentage??\n")
);

let tip = bill * (percentage / 100);

let total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);
*/