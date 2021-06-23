// Required dependency
const readlineSync = require('readline-sync');

// How to use readline-sync
// var length =
// readlineSync.question("Enter the length of the room in meters:");

// Exercise
// What is the bill? 200
// What is the tip percentage? 15

// The tip is $30.00
// The total is $230.00

const bill = readlineSync.question('What is the bill? ');
const percentage = readlineSync.question('What is the tip percentage? ');

const tip = parseInt(bill) * parseInt(percentage)/100;
const total = parseInt(bill) + tip;

console.log(`The tip is $${tip}`);
console.log(`The total is $${total}`);
