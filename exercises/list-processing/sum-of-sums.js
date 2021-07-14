// function sumOfSums(array) {
//   let sum = 0;

//   while (array.length > 0) {
//     for (let i = 0; i < array.length; i++) {
//       sum += array[i];
//     }

//     array.pop();
//   }

//   console.log(sum);
//   return sum;
// }

function sumOfSums(array) {
  let sum = 0;

  while (array.length > 0) {
    array.forEach(number => {
      sum += number;
    });

    array.pop();
  }

  console.log(sum);
  return sum;
}

// Tests
sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35

/* Solution 1
function sumOfSums(numbers) {
  let sumTotal = 0;
  for (let idx = 1; idx <= numbers.length; idx++) {
    sumTotal += numbers.slice(0, idx).reduce((accum, num) => accum + num);
  }
  return sumTotal;
}
*/

/* Solution 2
function sumOfSums(numbers) {
  return numbers
    .map((_, idx) =>
      numbers.slice(0, idx + 1).reduce((sum, value) => sum + value)
    )
    .reduce((sum, value) => sum + value);
}
*/
