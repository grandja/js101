function leadingSubstrings(string) {
  let substringArr = [];
  let substring = '';

  for (let i = 0; i < string.length; i++) {
    substring += string[i];
    substringArr.push(substring);
  }

  return substringArr;
}

// Tests
console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

/* Solution
function leadingSubstrings(string) {
  let substrings = [];
  for (let length = 1; length <= string.length; length += 1) {
    substrings.push(string.slice(0, length));
  }

  return substrings;
}
*/
