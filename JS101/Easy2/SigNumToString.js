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
        digits.push(((num % 10 ) + 10 ) % 10);
        num = Math.trunc(num/10);
    }
    return digits.reverse().join("");
}

function signedIntegerToString(number){
    if(number > 0){
        return "+" + simpleToString(number);
    }
    if(number < 0){
        return "-" + simpleToString(-number);
    }
    return "0";
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");