let rlSync = require('readline-sync');

// Get input for integer
// Get input for product or sum
let number = Number(rlSync.question('Please enter an integer greater than 0: '));
let method = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');
let result;

// If 's' calculate sum
if (method === 's') {
  result = 0;
  for (let i = 1; i <= number; i += 1) {
    result += i;
  }
  return console.log(`The sum of the integers between 1 and ${number} is ${result}.`);
}

// If 'p' calculate product
else if (method === 'p') {
  result = 1;
  for (let i = 1; i <= number; i += 1) {
    result *= i;
  }
  return console.log(`The product of the integers between 1 and ${number} is ${result}.`);
}

// Not 's' or ''
else {
  return console.log('Woops, there seems to be an error. Try again.');
}


/* Solution
function computeSum(targetNum) {
  let total = 0;

  for (let num = 1; num <= targetNum; num += 1) {
    total += num;
  }

  return total;
}

function computeProduct(targetNum) {
  let total = 1;

  for (let num = 1; num <= targetNum; num += 1) {
    total *= num;
  }

  return total;
}

let readlineSync = require("readline-sync");

console.log("Please enter an integer greater than 0");
let number = parseInt(readlineSync.prompt(), 10);

console.log("Enter 's' to compute the sum, 'p' to compute the product.");
let operation = readlineSync.prompt();

if (operation === "s") {
  let sum = computeSum(number);
  console.log(`The sum of the integers between 1 and ${number} is ${sum}.`);
} else if (operation === "p") {
  let product = computeProduct(number);
  console.log(
    `The product of the integers between 1 and ${number} is ${product}.`
  );
} else {
  console.log("Oops. Unknown operation.");
}
*/