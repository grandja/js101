function xor(arg1, arg2) {
  if ((arg1 && !arg2) || (arg2 && !arg1)) {
    return true;
  }
  return false;
}

// Tests
console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);

/* Solution
function xor(value1, value2) {
  return !!((value1 && !value2) || (value2 && !value1));
}
*/