function isBalanced(string) {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(') {
      count++;
    } else if (string[i] === ')') {
      count--;
    }

    if (count < 0) return false;
  }

  return count === 0;
}

// Tests
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
