function cleanUp(string) {
  let cleanText = '';

  for (let i = 0; i < string.length; i++) {
    if (isLowerCaseLetter(string[i]) || isUpperCaseLetter(string[i])) {
      cleanText += string[i];
    } else if (cleanText[cleanText.length - 1] !== " ") {
      cleanText += " ";
    }
  }

  return cleanText;
}

function isLowerCaseLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isUpperCaseLetter(char) {
  return char >= 'A' && char <= 'Z';
}

// Test
console.log(cleanUp("---what's my +*& line?"));           // " what s my line "
console.log(cleanUp("aalsd;ri7u209398a;sdlkqm230-"));     // "aalsd ri u a sdlkqm "

/* Solution
function cleanUp(text) {
  return text.replace(/[^a-z]/gi, " ").replace(/\s+/gi, " ");
}
*/