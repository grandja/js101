function staggeredCase(string) {
  let staggeredStr = '';

  string.split('').forEach((char, index) => {
    if (index % 2 === 0) {
      staggeredStr += char.toUpperCase();
    } else {
      staggeredStr += char.toLowerCase();
    }
  });


  console.log(staggeredStr);
  return staggeredStr;
}

// Tests
staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"

/* Solution
function staggeredCase(string) {
  return string
    .split("")
    .map((char, index) => {
      if (index % 2 === 0) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    })
    .join("");
}
*/