// function letterPercentages(string) {
//   let percentages = {
//     lowercase:  0,
//     uppercase:  0,
//     neither:    0,
//   };

//   string.split('').forEach(letter => {
//     if (letter >= 'a' && letter <= 'z') {
//       percentages.lowercase += 1;
//     } else if (letter >= 'A' && letter <= 'Z') {
//       percentages.uppercase += 1;
//     } else {
//       percentages.neither += 1;
//     }
//   });

//   return console.log(percentages);
// }

function letterPercentages(string) {
  let count = string.length;

  function percentage(regex) {
    let matchingChars = string.match(regex) || [];
    return ((matchingChars.length / count) * 100).toFixed(2);
  }

  return {
    lowercase:  percentage(/[a-z]/g),
    uppercase:  percentage(/[A-Z]/g),
    neither:    percentage(/[^a-z]/gi),
  };
}

// Tests
console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }