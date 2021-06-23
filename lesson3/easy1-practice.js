let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];

//////////////////////////////

let str1 = "Come over here!";
let str2 = "What's up, Doc?"; 

console.log(str1.endsWith('!'));
console.log(str2.endsWith('!'));

//////////////////////////////

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

console.log(ages.hasOwnProperty("Spot"));

//////////////////////////////

let munsterDescription = "the Munsters are CREEPY and Spooky.";
munsterDescription = munsterDescription.charAt(0).toUpperCase() +
                     munsterDescription.substring(1).toLowerCase();

console.log(munsterDescription);

//////////////////////////////

console.log(false == '0');
console.log(false === '0');

//////////////////////////////

let additionalAges = { Marilyn: 22, Spot: 237 };
ages = Object.assign(ages, additionalAges);

console.log(ages);

//////////////////////////////

let string1 = "Few things in life are as important as house training your pet dinosaur.";
let string2 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(string1.includes('Dino'));
console.log(string2.includes('Dino'));

//////////////////////////////

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push('Dino', 'Hoppy');

console.log(flintstones);

//////////////////////////////

let advice = "Few things in life are as important as house training your pet dinosaur.";

advice = advice.slice(0, advice.indexOf('house'));

console.log(advice);



