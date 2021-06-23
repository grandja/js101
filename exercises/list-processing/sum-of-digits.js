function sum(number) {
  let sum = 0;
  let numberArr = String(number).split('');

  for (let i = 0; i < numberArr.length; i++) {
    sum += Number(numberArr[i]);
  }

  console.log(sum);
  return sum;
}

// Tests
sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45

// Solution 
// function sum(number) {
//   return String(number)
//     .split("")
//     .reduce((accum, digit) => accum + Number(digit), 0);
// }