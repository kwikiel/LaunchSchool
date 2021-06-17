// Goal to write a function that takes one integer
// Argument may be positive, negative or zero 
// Return true if the value is odd 
// One may assume that argument is a valid integer

const isOdd  = function(num){
    if(Math.abs(num) % 2 == 1){
        return true;
    }
    return false;
}

// Test harness 


console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true