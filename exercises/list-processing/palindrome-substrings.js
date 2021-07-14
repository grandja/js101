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

// Checks if word is palindrome
function isPalindrome(word) {
  return word.length > 1 && word === word.split("").reverse().join("");
}

// Filters out list of substrings for those that are palindromes
function palindromes(string) {
  return substrings(string).filter(isPalindrome);
}

// Tests
console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]





