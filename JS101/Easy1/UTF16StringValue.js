// PEDAC 
// Problem 
// Example 
// Data Structure 
// Algo
// Code 

// Problem: For given string, write a function that calculates the sum of UTF16 values 
// Implementation: String.prototype.codePointAt() gives single character UTF16 
// Data structure: variable holding the sum: total [integer]
// Algo: iterating over each character using for of construct 

function utf16Value(input){
    let total = 0; 
    // What to return for empty string? Docs says 0 so total may default to 0 
    for(const c of input){
        total = total + c.codePointAt(0); 
    }

    return total;
}
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)

console.log(utf16Value(OMEGA + OMEGA + OMEGA));