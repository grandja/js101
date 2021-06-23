////////////////////////////////////////
////////////////////////////////////////

// Sort number strings in descending order (large to small)
let arr1 = ['10', '11', '9', '7', '8'];
arr1.sort((a, b) => Number(b) - Number(a));
console.log(arr1);
// arr1.sort(function(a, b) { return Number(b) - Number(a) });

////////////////////////////////////////
////////////////////////////////////////

// Sort array of objects based on year of publication (earliest to latest)
let books2 = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

books2.sort((a, b) => {
  return Number(a.published) - Number(b.published);
});
console.log(books2);

////////////////////////////////////////
////////////////////////////////////////

// Access the letter 'g'
let array1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];

let array2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];

let array3 = [['abc'], ['def'], { third: ['ghi'] }];

let object1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };

let object2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}

console.log(array1[2][1][3]);
console.log(array2[1].third[0]);
console.log(array3[2].third[0][0]);
console.log(object1.b[1]);
console.log(Object.keys(object2.third)[0]);

////////////////////////////////////////
////////////////////////////////////////

// Change value 3 to 4
let arr14 = [1, [2, 3], 4];

let arr24 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];

let obj14 = { first: [1, 2, [3]] };

let obj24 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };

arr14[1][1] = 4;
console.log(arr14);

arr24[2] = 4;
console.log(arr24);

obj14.first[2][0] = 4;
console.log(obj14);

obj24.a.a[2] = 4;
console.log(obj24);

////////////////////////////////////////
////////////////////////////////////////

// Compute and display total age of male family members
let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let maleAgeSum = 0;

for (let member in munsters) {
  if (munsters[member].gender === 'male') {
    maleAgeSum += munsters[member].age;
  }
}

console.log(maleAgeSum);

// let memberDetails = Object.values(munsters);
// let totalMaleAge = 0;

// memberDetails.forEach(member => {
//   if (member.gender === 'male') {
//     totalMaleAge += member.age;
//   }
// });

////////////////////////////////////////
////////////////////////////////////////

// Print name, age, and gender of each family member 
Object.entries(munsters).forEach(entry => {
  let name = entry[0];
  let age = entry[1].age;
  let gender = entry[1].gender;

  console.log(`${name} is a ${age}-year-old ${gender}.`);
});

////////////////////////////////////////
////////////////////////////////////////

// What will values of 'a' and 'b' be?
let a = 2;
let b = [5, 8];
let arr7 = [a, b];

arr7[0] += 2;
arr7[1][0] -= a;

console.log(a);
console.log(b);
// The array is reference pointing to a and b values

////////////////////////////////////////
////////////////////////////////////////

// Use forEach to print all vowels from strings in the arrays
let obj8 = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};
let vowels = "aeiou";

Object.values(obj8).forEach(array => {
  array.forEach(word => {
    word.split('').forEach(char => {
      if (vowels.includes(char)) {
        console.log(char);
      }
    });
  });
});

////////////////////////////////////////
////////////////////////////////////////

// Return new array with values in each subarray ordered in ascending order
let arr9 = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let arr9sortAsc = arr9.map(subArr => {
  if (typeof subArr[0] === 'string') {
    return subArr.slice().sort();
  } else {
    return subArr.slice().sort((a, b) => a - b);
  }
});

console.log(arr9sortAsc);
// Uses slice so that original subArr does not get changed

////////////////////////////////////////
////////////////////////////////////////

// Sort same array as before but in descending order
let arr9sortDesc = arr9.map(subArr => {
  return subArr.slice().sort((a, b) => {
    if (typeof a === 'number') {
      return b - a;
    }

    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
});

console.log(arr9sortDesc);

////////////////////////////////////////
////////////////////////////////////////

// Increment each value by 1
let arr11 = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
let arr11inc = arr11.map (subObj => {
  let incrementedObj = {};

  // loop thru all keys and add one to the value 
  for (let key in subObj) {
    incrementedObj[key] = subObj[key] + 1;
  }

  return incrementedObj;
});

console.log(arr11inc);
console.log(arr11);

////////////////////////////////////////
////////////////////////////////////////

// Return new array identical in structure, but only multiples of 3
let arr12 = [[2], [3, 5, 7], [9], [11, 15, 18]];

let arr12new = arr12.map(subArr => {
  return subArr.filter(num => num % 3 === 0);
});

console.log(arr12new);

////////////////////////////////////////
////////////////////////////////////////

// Sort so sub-arrays are ordered on sum of odd numbers they contain
let arr13 = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr13.sort((a, b) => {
  let oddSumA = a.filter(num => num % 2 === 1)
                 .reduce((sum, next) => sum + next);
  let oddSumB = b.filter(num => num % 2 === 1)
                 .reduce((sum, next) => sum + next);

  return oddSumA - oddSumB;
});

console.log(arr13);

////////////////////////////////////////
////////////////////////////////////////

// Return an array containing: colors of fruits, sizes of veggies
// Sizes should be UPPER, colors should be Capitalized
let obj14v2 = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let capitalize = word => word[0].toUpperCase() + word.slice(1);

let obj14new = Object.values(obj14v2).map(attributes => {
  if (attributes['type'] === 'fruit') {
    return attributes['colors'].map(char => capitalize(char));
  } else {
    return attributes['size'].toUpperCase();
  }
});

console.log(obj14new);

////////////////////////////////////////
////////////////////////////////////////


// Return an array that only contains objects with all EVENS
let arr15 = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let arr15evens = arr15.filter(obj => {
  return Object.values(obj).every(subArr => {
    return subArr.every(num => num % 2 === 0);
  });
});
console.log(arr15evens);

////////////////////////////////////////
////////////////////////////////////////

// Return object where key is the first item in each subarray, value is second
let arr16 = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

let obj16 = {};
arr16.forEach(subArr => {
  let key = subArr[0];
  let value = subArr[1];

  obj16[key] = value;
});

console.log(obj16);

////////////////////////////////////////
////////////////////////////////////////

// Write function takes no args and returns string that is UUID
// UUID => 8-4-4-4-12 pattern of 0-9 and a-f
// UUID is a unique identifier with 3.4 x 10e38 possibilites

function generateUUID() {
  let characters = ['a', 'b', 'c', 'd', 'e', 'f', 
                    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let sections = [8, 4, 4, 4, 12];

  let uuid = '';
  sections.forEach((section, sectionIndex) => {
    for (let i = 1; i <= section; i++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      uuid += characters[randomIndex];
    }

    if (sectionIndex < sections.length - 1) {
      uuid += '-';
    }
  });

  return uuid;
}

console.log(generateUUID());
console.log(generateUUID());
console.log(generateUUID());

////////////////////////////////////////
////////////////////////////////////////



////////////////////////////////////////
////////////////////////////////////////