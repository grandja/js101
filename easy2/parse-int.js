function stringToInteger(string) {
  let result = 0;
  let digitPlace = 0;

  for (let i = string.length - 1; i >= 0; i -= 1) {
    switch (string[i]) {
      case '0':
        result += 0 * (10 ** digitPlace);
        break;
      case '1':
        result += 1 * (10 ** digitPlace);
        break;
      case '2':
        result += 2 * (10 ** digitPlace);
        break;
      case '3':
        result += 3 * (10 ** digitPlace);
        break;
      case '4':
        result += 4 * (10 ** digitPlace);
        break;
      case '5':
        result += 5 * (10 ** digitPlace);
        break;
      case '6':
        result += 6 * (10 ** digitPlace);
        break;
      case '7':
        result += 7 * (10 ** digitPlace);
        break;
      case '8':
        result += 8 * (10 ** digitPlace);
        break;
      case '9':
        result += 9 * (10 ** digitPlace);
        break;
      default:
        break;
    }
    digitPlace += 1;
  }

  if (string[0] === '-') {
    return result * -1;
  }
  return result;
}

// Tests
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("-570") === -570); // logs true
console.log(stringToInteger("+100") === 100); // logs true


/* Solution
function stringToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
  return value;
}

function stringToSignedInteger(string) {
  switch (string[0]) {
    case "-":
      return -stringToInteger(string.slice(1, string.length));
    case "+":
      return stringToInteger(string.slice(1, string.length));
    default:
      return stringToInteger(string);
  }
}
*/


