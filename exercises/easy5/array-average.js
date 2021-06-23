function average(numbers) {
  let sum = 0;
  let avg = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  avg = Math.floor(sum / numbers.length);
  return avg;
}

// Tests
console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40