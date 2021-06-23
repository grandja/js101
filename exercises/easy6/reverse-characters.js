function reverseWords(string) {
  let words = string.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      words[i] = words[i].split('').reverse().join('');
    }
  }

  return words.join(" ");
}

// Tests
console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"

// Solution
// function reverseWords(string) {
//   let words = string.split(' ');
//   let reversedWords = [];

//   for (let idx = 0; idx < words.length; idx += 1) {
//     let currentWord = words[idx];
//     if (currentWord.length >= 5) {
//       reversedWords.push(reverseWord(currentWord));
//     } else {
//       reversedWords.push(currentWord);
//     }
//   }

//   return reversedWords.join(' ');
// }

// function reverseWord(word) {
//   return word.split('').reverse().join('');
// }