function multisum(number) {
  let sum = 0;

  // Iterate from 1 - number
  // If number is multiple of 3 or 5, add it to sum value
   for (let i = 0; i <= number; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
   }

   return sum;
}

// Tests
console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168


/* Solution 
function isMultiple(number, divisor) {
  return number % divisor === 0;
}

function multisum(maxValue) {
  let sum = 0;

  for (let number = 1; number <= maxValue; number += 1) {
    if (isMultiple(number, 3) || isMultiple(number, 5)) {
      sum += number;
    }
  }

  return sum;
}
*/