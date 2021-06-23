// function swapName(name) {
//   nameArr = name.split(' ');
//   return nameArr[1] + ', ' + nameArr[0];
// }

function swapName(name) {
  return name.split(' ').reverse().join(', ');
}

// Tests
console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Jason Grand'));    // "Grand, Jason"