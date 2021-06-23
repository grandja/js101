let rlSync = require('readline-sync');

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

let age = rlSync.question('What is your age? ');
while (invalidNumber(age)) {
    prompt("Hmm... that doesn't look like a valid number.");
    age = rlSync.question();
}

let retireAge = rlSync.question('At what age would you like to retire? ');
while (invalidNumber(retireAge)) {
    prompt("Hmm... that doesn't look like a valid number.");
    retireAge = rlSync.question();
}

console.log();

const year = 2021;
let remainingYears = retireAge - age;
let retirementYear = year + remainingYears;

console.log(`It's 2021. You will retire in ${retirementYear}.`);
console.log(`You only have ${remainingYears} years of work to go!`);

/* Solution
let readlineSync = require("readline-sync");

let currentAge = Number(readlineSync.question("What is your age?\n"));
let retirementAge = Number(
  readlineSync.question("At what age would you like to retire?\n")
);

let today = new Date();

let currentYear = today.getFullYear();

let workYearsToGo = retirementAge - currentAge;
let retirementYear = currentYear + workYearsToGo;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}. `);
console.log(`You have only ${workYearsToGo} years of work to go!`);
*/
