// ### PEDAC 
//  
// ## Problem:
// Write a program that asks the user to enter an 
// integer greater than 0, then asks whether the user wants to determine 
// the sum or the product of all numbers between 1 and the entered integer,
// inclusive.

// ## Expected input: 
// Integer, Character 

// Example: (5, 's') meaning sum of integers from 1 to 5 
// Example: (6, 'p') meaning product of integers from 1 to 6 //  720 factorial 

// ## Data structure
// DS: Two variables holding Integer and Character 
// DS: Variable holding the result of computation


// ## Algorithm 
// Branching on whether second variable is 'p' or 's'
// N-th partial sum of the series is given by n(n-1)/2 ( IF 's' )
// N-th product of integers is factorial ( IF 'p') 


// ## Code & Implementation details 
// How to get the input from the user? 
// > const i = readlineSync.question('Input: ');
// How to import the library? 
// > const readlineSync = require('readline-sync');
// How to install readline-sync? 
// > npm install readline-sync
// Does javascript has built-in factorial? Or it's in math lib? 

// Taken from: https://developer.mozilla.org/pl/docs/Web/JavaScript/Guide/Functions
const factorial = function fac(n) { return n<2 ? 1 : n*fac(n-1) };


// ## Implementation 

const readlineSync = require('readline-sync');
const n = parseInt(readlineSync.question('Please enter an integer greater than 0: '));
const option = readlineSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

if(option == 's'){
    // console.log(0.5*(n**2+n));
    console.log(n*(n+1));
}
if(option == 'p'){
    console.log(factorial(n)); 
}
