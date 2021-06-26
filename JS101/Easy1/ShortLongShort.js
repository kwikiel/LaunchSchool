// PEDAC 
// Problem 
// Example / Test Case 
// Data structure 
// Algorithm 
// Coding & Implementation details 

// ## Problem 
// Write a function that takes two strings as arguments, 
// determines the length of the two strings, 
// and then returns the result of concatenating the shorter string, 
// the longer string, and the shorter string once again. 
// You may assume that the strings are of different lengths.

// ## Example 
// shortLongShort('abc', 'defgh');    // "abcdefghabc"
// shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
// shortLongShort('', 'xyz');         // "xyz"

// ## Data structure 
// function with two strings as input 
// two variables, shorter_str, longer_str 
// String formatting to return `${shorter}${longer}${shorter}`

// ## Important assumptions 
// One or more of the strings may be empty 
// Strings are of different length 

// ## Algorithm 
// create two variables, s and l for shorter and longer string respectively 
// input1 and input2 are input strings 
// If input1.length > input2.length then l = input1, s = input2 
// Else l = input2, s = input1 
// Return string formatted string  

// ## Implementation 

function shortLongShort(input1, input2){
    var s; 
    var l; 
    if(input1.length > input2.length){
         l = input1;
         s = input2; 
    }
    else {
         l = input2; 
         s = input1; 
    }
    return `${s}${l}${s}`; 
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"