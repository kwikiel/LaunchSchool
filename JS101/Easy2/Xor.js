// PEDAC 

// Problem 
// Example 
// Data structure 
// Algo 
// Code ( Implementation ) 

// Problem 

// Function named xor that takes two arguments
// - returns true if exactly once of it's arguments is truthy, false otherwise 


// Example 

// xor true if just a single value is truthy 
console.log(xor(5, 0) === true); 
console.log(xor(false, true) === true);

// xor false if both are true 

console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);


// Data structure
// Function xor(a,b) 
// Number of truthy values, count ( integer ) 

// Algo
// If count === 1 return true 
// else false 

// Implementation 

function xor(a, b){
    let count = 0; 
    if(a){
        count++;
    }
    if(b){
        count++;
    }
    if(count === 1){
        return true;
    }
    return false;
}