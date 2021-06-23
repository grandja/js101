function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

while (true) {
  prompt('---------------------------------');
  let rlSync = require('readline-sync');
  prompt('Welcome to the Mortgage Calculator!');

  // Get input for loan amount , apr, and loan duration
  prompt("What's the loan amount ($)?");
  let loan = rlSync.question();

  while (invalidNumber(loan)) {
    prompt("Hmm... that doesn't look like a valid number.");
    loan = rlSync.question();
  }

  prompt("What's the Annual Percentage Rate (APR)?");
  prompt("(Example: 5 for 5% or 2.5 for 2.5%)");
  let interestRate = rlSync.question();

  while (invalidNumber(interestRate)) {
    prompt("Hmm... that doesn't look like a valid number.");
    interestRate = rlSync.question();
  }

  // Convert apr to decimal
  // Convert annual to monthly
  apr = Number(interestRate) / 100;
  mpr = apr / 12;

  prompt("What's the loan duration (in years)?");
  let duration = rlSync.question();

  while (invalidNumber(duration)) {
    prompt("Hmm... that doesn't look like a valid number.");
    duration = rlSync.question();
  }

  let durationMonths = Number(duration) * 12;

  // Calculate montly payments
  let monthlyPayment = 0;

  // Check if APR = 0% (flat rate payments)
  if (apr === 0) {
    monthlyPayment = loan / durationMonths;
  } else {
    monthlyPayment = 
      loan * (mpr / (1 - Math.pow((1 + mpr), (-durationMonths))));
  }

  prompt(`They monthly payment is $${monthlyPayment.toFixed(2)}.`);

  // Ask if want another calculation or to exit
  prompt('Another calculation?');
  let answer = rlSync.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = rlSync.question().toLowerCase();
  }

  if (answer[0] === 'n') break;
}



/* Solution
const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function isInvalidNumber(number) {
  return number.trim() === '' ||
         Number(number) < 0   ||
         Number.isNaN(Number(number));
}

prompt('Welcome to Mortgage Calculator!');

while (true) {
  prompt('---------------------------------');

  prompt('What is the loan amount?');

  let amount = readline.question();
  while (isInvalidNumber(amount)) {
    prompt('Must enter a positive number');
    amount = readline.question();
  }

  prompt("What is the interest rate?");
  prompt("(Example: 5 for 5% or 2.5 for 2.5%)");
  let interestRate = readline.question();

  while (isInvalidNumber(interestRate)) {
    prompt('Must enter a positive number');
    interestRate = readline.question();
  }

  prompt("What is the loan duration (in years)?");
  let years = readline.question();

  while (isInvalidNumber(years)) {
    prompt('Must enter a positive number');
    years = readline.question();
  }

  let annualInterestRate = Number(interestRate) / 100;
  let monthlyInterestRate = annualInterestRate / 12;
  let months = Number(years) * 12;

  let monthlyPayment = Number(amount) *
                  (monthlyInterestRate /
                  (1 - Math.pow((1 + monthlyInterestRate), (-Number(months)))));

  prompt(`Your monthly payment is: $${monthlyPayment.toFixed(2)}`);

  prompt("Another calculation?");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] === 'n') break;
}
*/


