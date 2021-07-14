function isUppercase(string) {

  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) > 90) return false;
  }

  return true;
}

// Tests
console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true

/* Solution 
function isUppercase(string) {
  return string.toUpperCase() === string;
}
*/