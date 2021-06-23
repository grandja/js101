// Using multiply function from previous
function multiply(num1, num2) {
  return num1 * num2;
}

// Calculate square
function square(num) {
  return multiply(num, num);
}

// Tests
console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true