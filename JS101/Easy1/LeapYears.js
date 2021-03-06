// PEDAC 
// Problem 
// Example / Test Case 
// Data structure / Variables 
// Algorithm 
// Code & Implementation 

// Problem "Paraphrase in my own words"
// Function isLeapYear(year) -> bool depending 
// if it's a leap year 

// Leap year definition:
// divisible by 4 except if 100 
// leap year if divisible by 400 

// Data structure / Variables 
// Single integer with a year 

// Algorithm 
// Divisilibity checks by 400, 100, 4 

// IF year % 400 == 0  => return true 
// IF year % 100 == 0  => return false 
// IF year % 4 == 0  => return true ELSE return false 

// Implementation 
function isLeapYear(year) {
    if(year <= 1752){
        if(year % 4 == 0){
            return true;
        } else {
            return false; 
        }
    }
    if(year % 400 === 0){
        return true; 
    }
    if(year % 100 === 0){
        return false;
    }
    if(year % 4 === 0){
        return true;
    } else{
        return false;
    }
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true