function sequence(num) {
  let sequenceArr = [];

  while (num > 0) {
    sequenceArr.push(num);
    num--;
  }

  return sequenceArr;
}

// Tests
console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]