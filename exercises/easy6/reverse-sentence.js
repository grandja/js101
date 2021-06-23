function reverseSentence(string) {
  return string.split(" ").reverse().join(" ");
}

// Tests
console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"
