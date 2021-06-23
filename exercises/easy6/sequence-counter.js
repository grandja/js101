function sequence(count, number) {
  let sequenceArr = [];
  let sum = number;

  for (let i = 0; i < count; i++) {
    sequenceArr.push(sum);
    sum += number;
  }

  return sequenceArr;
}

// Tests
console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []

// Solution 
// function sequence(count, startNum) {
//   let result = [];
//   for (let num = 1; num <= count; num++) {
//     result.push(num * startNum);
//   }
//   return result;
// }