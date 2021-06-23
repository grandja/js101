let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(produceList) {
  let produceKeys = Object.keys(produceList);
  let selectFruits = {};

  for (let i = 0; i < produceKeys.length; i++) {
    let currentKey = produceKeys[i];
    let currentValue = produceList[currentKey];

    if (currentValue === 'Fruit') {
      selectFruits[currentKey] = currentValue;
    }
  }

  return selectFruits;
}

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }

/////////////////////////////////////////
/////////////////////////////////////////

let numbers = [1, 2, 3, 4, 5, 6];

// Returns a new array - does not edit original array
function increaseNumbers (list, value) {
  let newList = [];

  for (let i = 0; i < list.length; i++) {
    newList.push(list[i] * value);
  }

  return newList;
}

console.log(increaseNumbers(numbers, 3));
console.log(numbers);

/////////////////////////////////////////
/////////////////////////////////////////

let nums = [1, 2, 3];
let reversedNums = nums.slice().reverse();

console.log(reversedNums); // => [3, 2, 1]
console.log(nums);         // => [1, 2, 3]

/////////////////////////////////////////
/////////////////////////////////////////

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let flintObj = {};

flintstones.forEach((name, index) => {
  console.log(name, index);
  flintObj[name] = index;
});

console.log(flintObj);

/////////////////////////////////////////
/////////////////////////////////////////

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let totalAges = 0;
Object.values(ages).forEach(age => totalAges += age);
console.log(totalAges);
