// Write a function that takes a string argument and returns a new string that 
// contains the value of the original string with all consecutive duplicate 
// characters collapsed into a single character.

function crunch(string) {
  if (string === '') return string; 

  let filtered = '';
  let temp = '';

  // Loop through input string
  // Check if is duplicate
  // Add to string if not duplicate
  for (let i = 0; i < string.length; i++) {
    if (string[i] === temp) continue;

    filtered += string[i];
    temp = string[i];
  }

  return filtered;
}

// Test cases
console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""


/* Solution
function crunch(text) {
  let index = 0;
  let crunchText = '';

  while (index <= text.length - 1) {
    if (text[index] !== text[index + 1]) {
      crunchText += text[index];
    }

    index += 1;
  }

  return crunchText;
}
*/