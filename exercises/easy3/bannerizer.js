// Write a function that will take a short line of text, 
// and write it to the console log within a box.

function logInBox (string) {
  let horizontalLine = `+${"-".repeat(string.length + 2)}+`;
  let emptyLine = `|${" ".repeat(string.length + 2)}|`;

  console.log(horizontalLine);
  console.log(emptyLine);
  console.log(`| ${string} |`);
  console.log(emptyLine);
  console.log(horizontalLine);
}

// Tests
logInBox('Test string');
logInBox('To boldly go where no one has gone before.');

/* 
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
*/