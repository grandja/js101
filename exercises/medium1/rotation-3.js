function maxRotation(number) {
  let numberDigits = String(number).length;

  // count >= 2 because last digit cannot be rotated
  for (let count = numberDigits; count >= 2; count--) {
    number = rotateRightmostDigits(number, count);
  }

  return number;
}

// Functions from rotation-2.js
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

// Tests
console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845