// This function gets [bcde, cde, de, e] and feeds to leadingSubstrings
function substrings(string) {
  let substrings = [];

  for (let i = 0; i < string.length; i++) {
    let substring = string.substring(i);
    substrings = substrings.concat(leadingSubstrings(substring));
  }

  return substrings;
}

// This function takes arg and gets all substrings 
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
console.log(substrings('abcde'));
// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]