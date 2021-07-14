function fibonacci(nth) {
  let previousTwo = [1, 1];

  for (let i = 3; i <= nth; i++) {
    previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]];
  }

  return previousTwo[1];
}

// Tests
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050