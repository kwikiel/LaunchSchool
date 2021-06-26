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