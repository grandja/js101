function isOdd(number) {
  // Edge case 
  if (number === 0) { 
    return false; 
  }
  
  // Test if even or odd
  if (Math.abs(number) % 2 === 0) {
    return false;
  }
  else {
    return true;
  }
}


// Test cases
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true


/* Solution
function isOdd(number) {
  return Math.abs(number) % 2 === 1;
}
*/