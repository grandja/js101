function isBlockword(string) {
  let blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];
  let letters = word.split("");

  for (let i = 0; i < letters.length; i++) {
    let matchingBlock = blocks.filter(block => {
      return block.indexOf(letters[i].toUpperCase()) > -1;
    })[0];

    if (matchingBLock === undefined) {
      return false;
    } else {
      blocks.splice(blocks.indexOf(matchingBlock), 1);
    }
  }

  return true;
}

// Tests
console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false

/* Solution
function isBlockWord(word) {
  let blocks = [/B|O/gi, /X|K/gi, /D|Q/gi, /C|P/gi, /N|A/gi,
                /G|T/gi, /R|E/gi, /F|S/gi, /J|W/gi, /H|U/gi,
                /V|I/gi, /L|Y/gi, /Z|M/gi];

  return blocks.every(regExp => {
    return (word.match(regExp) || []).length < 2;
  });
}
*/