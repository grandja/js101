// (n1 + n2 + n3 + ... )**2 - (n1**2 + n2**2 + n3**2 + ... )
// ( sum )**2 - (sumOfSquares)
 sumSquareDifference(count) {
  let sum = 0;
  let sumOfSquares = 0;

  for (let i = 1; i <= count; i++) {
    sum += i;
    sumOfSquares += Math.pow(i, 2);
  }

  return Math.pow(sum, 2) - sumOfSquares;
}

// Tests
console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150