let rlSync = require('readline-sync');

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function getSixNumbers() {
  let numberList = [];

  let num1 = rlSync.question('Enter the 1st number: ');
  while (invalidNumber(num1)) {
    num1 = rlSync.question("Hmm... that doesn't look like a valid number.");
  }

  let num2 = rlSync.question('Enter the 2nd number: ');
  while (invalidNumber(num2)) {
    num2 = rlSync.question("Hmm... that doesn't look like a valid number.");
  }

  let num3 = rlSync.question('Enter the 3rd number: ');
  while (invalidNumber(num3)) {
    num3 = rlSync.question("Hmm... that doesn't look like a valid number.");
  }

  let num4 = rlSync.question('Enter the 4th number: ');
  while (invalidNumber(num4)) {
    num4 = rlSync.question("Hmm... that doesn't look like a valid number.");
  }

  let num5 = rlSync.question('Enter the 5th number: ');
  while (invalidNumber(num5)) {
    num5 = rlSync.question("Hmm... that doesn't look like a valid number.");
  }

  let num6 = rlSync.question('Enter the last number: ');
  while (invalidNumber(num6)) {
    num6 = rlSync.question("Hmm... that doesn't look like a valid number.");
  }

  numberList.push(num1, num2, num3, num4, num5, num6);
  return numberList;
}

function checkList(list) {
  let check = false;
  let string = list.join(',');

  for (let i = 0; i < list.length - 1; i++) {
    if (list[i] === list[5]) {
      check = true;
      console.log(`The number ${list[5]} appears in ${string}.`);
    }
  }

  if (check === false) {
      console.log(`The number ${list[5]} does not appear in ${string}.`);
  }
}

function searchList() {
  numbers = getSixNumbers();
  checkList(numbers);
}

searchList();

/* Solution
let readlineSync = require("readline-sync");

let numbers = [];

console.log("Enter the 1st number:");
numbers.push(Number(readlineSync.prompt()));
console.log("Enter the 2nd number:");
numbers.push(Number(readlineSync.prompt()));
console.log("Enter the 3rd number:");
numbers.push(Number(readlineSync.prompt()));
console.log("Enter the 4th number:");
numbers.push(Number(readlineSync.prompt()));
console.log("Enter the 5th number:");
numbers.push(Number(readlineSync.prompt()));
console.log("Enter the last number:");
const lastNumber = Number(readlineSync.prompt());

if (numbers.includes(lastNumber)) {
  console.log(`The number ${lastNumber} appears in ${numbers}.`);
} else {
  console.log(`The number ${lastNumber} does not appear in ${numbers}.`);
}
*/