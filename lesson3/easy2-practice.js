//////////////////////////////

let advice = "Few things in life are as important as house training your pet dinosaur.";
advice = advice.replace('important', 'urgent');

console.log(advice);

//////////////////////////////

let numbers = [1, 2, 3, 4, 5];
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

let numbersCopy = numbers.slice();
numbersCopy.reverse();
console.log(numbersCopy);


let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);
console.log(sortedArray);


let reversedArray = [];
numbers.forEach((number) => {
  reversedArray.unshift(number);
});
console.log(reversedArray);

//////////////////////////////

let list = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];
let num1 = 8;
let num2 = 95;

console.log(list.includes(num1));
console.log(list.includes(num2));

//////////////////////////////

let famousWords = "seven years ago...";
let startString = "Four score and ";

let newString = startString + famousWords;
let newString2 = startString.concat(famousWords);

console.log(newString);
console.log(newString2);

//////////////////////////////

let array = [1, 2, 3, 4, 5];
array.splice(2, 1);

console.log(array);

//////////////////////////////

let flintstones2 = ["Fred", "Wilma"];
flintstones2.push(["Barney", "Betty"]);
flintstones2.push(["Bambam", "Pebbles"]);

let newFlintstones = [];
flintstones2.forEach(element => {
  newFlintstones = newFlintstones.concat(element);
});

// let newFlintstones = flintstones2.flat();

let flintstones = [];
flintstones.push('Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles');

console.log(flintstones);
console.log(newFlintstones);

//////////////////////////////

let flintstones3 = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
let entries = Object.entries(flintstones3);
console.log(entries[2]);

//Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift();

//////////////////////////////

let nums = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

console.log(Array.isArray(nums));
console.log(Array.isArray(table));

//////////////////////////////

let title = "Flintstone Family Members";
let padding = Math.floor((40 - title.length) / 2);
title.padStart(padding + title.length);
console.log(title);

//////////////////////////////

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

let ans1 = statement1.split('').filter(char => char === 't').length;
let ans2 = statement2.split('').filter(char => char === 't').length;

console.log(ans1);
console.log(ans2);

//////////////////////////////



