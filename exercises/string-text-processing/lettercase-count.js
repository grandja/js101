function letterCaseCount(string) {
  let info = {
    lowercase:  0,
    uppercase:  0,
    neither:    0
  };

  string.split('').forEach(char => {
    if ((char >= 'a') && (char <= 'z')) {
      info.lowercase++;
    } else if ((char >= 'A') && (char <= 'Z')) {
      info.uppercase++;
    } else {
      info.neither++;
    }
  });

  console.log(info);
  return info;
}

// Tests
letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }

/* Solution
function letterCaseCount(string) {
  let lowercaseChars = string.match(/[a-z]/g) || [];
  let uppercaseChars = string.match(/[A-Z]/g) || [];
  let neitherChars = string.match(/[^a-z]/gi) || [];

  return {
    lowercase: lowercaseChars.length,
    uppercase: uppercaseChars.length,
    neither: neitherChars.length
  };
}
*/