// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

// Operation functions
function addition(number1, number2) {
  return number1 + number2;
}
function subtraction(number1, number2) {
  return number1 - number2;
}
function multiplication(number1, number2) {
  return number1 * number2;
}
function division(number1, number2) {
  return number1 / number2;
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function prompt(message) {
  console.log(`=> ${message}`);
}

let rlSync = require('readline-sync');
prompt('Welcome to Calculator!');

// Get numbers
prompt("What's the first number?");
let num1 = rlSync.question();

while (invalidNumber(num1)) {
  prompt("Hmm... that doesn't look like a valid number.");
  num1 = rlSync.question();
}

prompt("What's the second number?");
let num2 = rlSync.question();

while (invalidNumber(num2)) {
  prompt("Hmm... that doesn't look like a valid number.");
  num2 = rlSync.question();
}

// Get operation
prompt("What operation would you like to perform?");
prompt("1) Add 2) Subtract 3) Multiply 4) Divide ");
let operation = rlSync.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must choose 1, 2, 3, or 4');
  operation = rlSync.question();
}

// Convert nums from String to Number values
// Perform operation on numbers
let result;
num1 = Number(num1);
num2 = Number(num2);
debugger;
switch (operation) {
  case '1':
    result = addition(num1, num2);
    break;
  case '2':
    result = subtraction(num1, num2);
    break;
  case '3':
    result = multiplication(num1, num2);
    break;
  case '4':
    result = division(num1, num2);
    break;
  default:
    break;
}

// Log result
console.log(`The result is: ${result}`);