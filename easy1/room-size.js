let rlSync = require('readline-sync');

// Get input for length and width in meters
let lengthM = rlSync.question('Enter the length of the room in meters:\n');
let widthM = rlSync.question('Enter the width of the room in meters:\n');

// Calculate area in meters and also in feet
// Stop at 2 decimal places
let areaM = (lengthM * widthM).toFixed(2);
let areaFt = (areaM * 10.7639).toFixed(2);

// Log results to console
console.log(`The area of the room is ${areaM} square meters (${areaFt} square feet).`);



/* Solution
let readlineSync = require("readline-sync");

const SQMETERS_TO_SQFEET = 10.7639;

console.log("Enter the length of the room in meters:");
let length = readlineSync.prompt();
length = parseInt(length, 10);

console.log("Enter the width of the room in meters:");
let width = readlineSync.prompt();
width = parseInt(width, 10);

let areaInMeters = (length * width);
let areaInFeet = (areaInMeters * SQMETERS_TO_SQFEET);

console.log(
  `The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`
);
*/

