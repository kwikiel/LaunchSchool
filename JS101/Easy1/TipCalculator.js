// Required dependency 
let readlineSync = require("readline-sync");

// How to use readline-sync
// var length = readlineSync.question("Enter the length of the room in meters:");

// Exercise 
//What is the bill? 200
//What is the tip percentage? 15

//The tip is $30.00
//The total is $230.00

let bill = readlineSync.question("What is the bill? ");
let percentage = readlineSync.question("What is the tip percentage? ");

let tip = parseInt(bill) * parseInt(percentage)/100; 
let total = parseInt(bill) + tip; 

console.log(`The tip is $${tip}`);
console.log(`The total is $${total}`);