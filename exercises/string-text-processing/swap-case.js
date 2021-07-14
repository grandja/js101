function swapCase(string) {
  let swapped = "";

  string.split('').forEach(char => {
    if (char >= 'a' && char <= 'z') {
      swapped += char.toUpperCase();
    } else if (char >= 'A' && char <= 'Z') {
      swapped += char.toLowerCase();
    } else {
      swapped += char;
    }
  });

  console.log(swapped);
  return swapped;
}

// Tests
swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"

/* Solution 
function swapCase(string) {
  return string
    .split("")
    .map(char => {
      if ((char >= 'a') && (char <= 'z')) {
        return char.toUpperCase();
      } else if ((char >= 'A') && (char <= 'Z')) {
        return char.toLowerCase();
      } else {
        return char;
      }
    })
    .join("");
}
*/