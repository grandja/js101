function centerOf(string) {
  if (string.length % 2 === 0) {
    return string[(string.length / 2) - 1] + string[string.length / 2];
  } else {
    return string[Math.floor(string.length / 2)];
  }
}

// Tests
console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"

// Solution
// function centerOf(string) {
//   if (string.length % 2 === 1) {
//     let centerIndex = (string.length - 1) / 2;
//     return string[centerIndex];
//   } else {
//     let leftIndex = string.length / 2 - 1;
//     return string.substring(leftIndex, leftIndex + 2);
//   }
// }