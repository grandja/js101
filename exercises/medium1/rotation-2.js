function rotateRightmostDigits(number, count) {
  // Get array from input number
  let numArray = String(number).split('');

  // Split array into left and right side based on count number
  let arrayLeft = numArray.slice(0, numArray.length - count);
  let arrayRight = numArray.slice(numArray.length - count);
  
  // Rotate right side
  arrayRight = rotateArray(arrayRight);

  // Join arrays, and return with typeof number
  return Number(arrayLeft.concat(arrayRight).join(''));
}

// Use function from previous exercise to rotate right half
function rotateArray(input) {
  // Check if input is array, else return undefined
  if (!Array.isArray(input)) return undefined;

  // Check for empty array
  if (input.length === 0) return [];

  // Make copy, shift zeroth index, then push it on the back
  let rotatedArray = input.slice();
  let zeroth = rotatedArray.shift();
  rotatedArray.push(zeroth);

  return rotatedArray;
}


// Tests
console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917

/* Solution
function rotateRightmostDigits(number, count) {
  let numberString = String(number);
  let firstPart = numberString.slice(0, numberString.length - count);
  let secondPart = numberString.slice(numberString.length - count);
  let resultString = firstPart + rotateString(secondPart);

  return Number(resultString);
}

function rotateString(string) {
  return string.slice(1) + string[0];
}
*/