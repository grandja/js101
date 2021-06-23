function doubleConsonants(string) {
  const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
                'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  let doubled = [];

  for (let i = 0; i < string.length; i++) {
    doubled.push(string[i]);

    // Check to see if letter is consonant
    // toLowerCase to check capitals
    if (CONSONANTS.indexOf(string[i].toLowerCase()) >= 0) {
      doubled.push(string[i]);
    }
  }

  return doubled.join('');
}

// Tests
console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""