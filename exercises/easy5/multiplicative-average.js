function multiplicativeAverage(numbers) {
  let product = 1;

  for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i];
  }

  let avg = product / numbers.length;
  return avg.toFixed(3);
}

// Tests
console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"
