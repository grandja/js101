function swap(string) {
  let tmp = string.split(" ");

  for (let i = 0; i < tmp.length; i++) {
    tmp[i] = tmp[i].split("").reverse().join("");
  }

  return tmp.join(" ");
}

// Tests
console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"