function twice(number) {
  let stringNumber = String(number);
  
  // Check if there is an even number of integers
  if (stringNumber.length % 2 !== 0) {
    return stringNumber * 2;
  }

  let stringLeft = stringNumber.substr(0, (stringNumber.length / 2));
  let stringRight = stringNumber.substr((stringNumber.length / 2), stringNumber.length);

  if (stringLeft !== stringRight) {
    return number * 2;
  } else {
    return number;
  }
}

// Tests
console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676

/* Solution
function twice(number) {
  if (isDoubleNumber(number)) {
    return number;
  } else {
    return number * 2;
  }
}

function isDoubleNumber(number) {
  let stringNumber = String(number);
  let center = Math.floor(stringNumber.length / 2);
  let leftNumber = stringNumber.substring(0, center);
  let rightNumber = stringNumber.substring(center);

  return leftNumber === rightNumber;
}
*/