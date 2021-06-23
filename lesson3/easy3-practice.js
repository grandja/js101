let numbers1 = [1, 2, 3, 4];

while (numbers1.length != 0) {
  numbers1.shift();
  //numbers1.pop();
}

console.log(numbers1);

numbers1 = [1, 2, 3, 4];
numbers1.length = 0;
console.log(numbers1);

numbers1 = [1, 2, 3, 4];
numbers1.splice(0, numbers1.length);
console.log(numbers1);

//////////////////////////////

console.log([1, 2, 3] + [4, 5]);
// Output: '1,2,34,5'

//////////////////////////////

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);
// Output: 'hello there'

//////////////////////////////

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);
// Output: [{ first: 42 }, { second: 'value2' }, 3, 4, 5]

//////////////////////////////

// function isColorValid(color) {
//   if (color === "blue" || color === "green") {
//     return true;
//   } else {
//     return false;
//   }
// }

function isColorValid(color) {
  return (color === 'blue' || color === 'green');
}

// const isColorValid = color => color === 'blue' || color === 'green';
// const isColorValid = color => ['blue', 'green'].includes(color);

console.log(isColorValid('blue'));

//////////////////////////////
