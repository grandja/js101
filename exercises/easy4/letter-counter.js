function wordSizes(string) {
  // Empty string edge case
  if (string.length === "") return {};
  
  let wordInfo = {};

  // Split string into array of words
  let words = string.split(" ");

  // Loop each word for letter count, then add one to wordTotal
  for (let i = 0; i < words.length; i++) {
    let wordLength = removeNonLetters(words[i].toLowerCase()).length;

    if (!wordInfo[wordLength]) {
      wordInfo[wordLength] = 0;
    }
    
    wordInfo[wordLength] += 1;
  }

  return wordInfo;
}

// Uses isLetter function to parse word and return new copy with only letters
function removeNonLetters(string) {
  let result = '';

  for (let i = 0; i < string.length; i ++) {
    if (isLetter(string[i])) {
      result += string[i];
    }
  }

  return result;
}

// Check lower-case string between a-z
function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

// Test
console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}