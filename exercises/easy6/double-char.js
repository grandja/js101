function repeater(string) {
  let doubled = [];
  for (let i = 0; i < string.length; i++) {
    doubled.push(string[i], string[i]);
  }

  return doubled.join('');
}

// Tests
console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""

// Alt Solution
// function repeater(string) {
//   return string.split("").map(char => char + char).join("");
// }