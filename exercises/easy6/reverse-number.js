function reverseNumber(num) {
  let numStringArr = String(num).split('');
  let reversedNumString = numStringArr.reverse().join('');

  return parseInt(reversedNumString, 10);
}

// Tests
console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1