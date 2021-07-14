// PEDAC

// ## Problem:  Write a program that prompts the user for two positive integers,
// and then prints the results of the following operations:
// - addition
// - substraction
// - product
// - quotient
// - remainder
// - power


// ## Example
// ==> Enter the first number:
// 23
// ==> Enter the second number:
// 17
// ==> 23 + 17 = 40
// ==> 23 - 17 = 6
// ==> 23 * 17 = 391
// ==> 23 / 17 = 1
// ==> 23 % 17 = 6
// ==> 23 ** 17 = 1.4105003956066297e+23

const readlineSync = require('readline-sync');

const first = readlineSync.question('Enter the length of the room in meters:');
const second = readlineSync.question('Enter the length of the room in meters:');

// readline-sync is required for getting the data from the user
// usage is as follows:
// Import library
// Declare constants const first = readlineSync.question('Provide input');
// Do bizlogic on code
