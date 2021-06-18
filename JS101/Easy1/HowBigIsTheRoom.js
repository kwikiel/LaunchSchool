let readlineSync = require("readline-sync");

var length = readlineSync.question("Enter the length of the room in meters:");
var width = readlineSync.question("Enter the length of the room in meters:");

let area = parseInt(length) * parseInt(width);
const M2TOFEET2 = 10.76; 

console.log(`The area of the room is ${area} square meters (${area*m2tofeet2} square feet)`)
