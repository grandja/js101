function greeting() {
  // Get name
  let rlSync = require('readline-sync');
  let name = rlSync.question('What is your name? ');

  // Test to see if there is a '!' 
  if (name[name.length - 1] === '!') {
    // Convert name to upper case
    // Trim exclamtion point off name string
    name = name.slice(0, -1);
    name = name.toUpperCase();
    console.log(`HELLO ${name}. WHY ARE WE SCREAMING?`);
  } else {
    console.log(`Hello ${name}.`);
  }
}

greeting();

/* Solution
let readlineSync = require("readline-sync");

let name = readlineSync.question("What is your name?\n");

if (name[name.length - 1] === "!") {
  name = name.slice(0, -1);
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE YOU SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}
*/