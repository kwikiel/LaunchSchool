// PEDAC 

// Problem
// Input:
// - integer
// Output:
// - string
// Rules:
// - Explicit requirements: Number can be negative
// - Implicit requirements: 
// - Input must be valid integer

function simpleToString(num){
    var digits  = []; 
    while(num>0){
        digits.push(((a % 10 ) + 10 ) % 10);
        num = Math.trunc(num/10);
    }
    return digits;
}


function signedNumberToString(number){
    if(number > 0){
        return 
    }
}

console.log(simpleToString(2137));