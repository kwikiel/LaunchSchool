// PEDAC 

// Problem: "Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5"
// Example: "20 -> (3,5,6,9,10,12,15,18,20)"
// Data structure: 
// Input variable [Int], variable [Int] for holding sum 
// Algorithm: For loop, with two if statements checking divisilibity by 3 or 5
// Code & Implementation 

function multisum(upper_limit){
    let sum = 0; 
    for(let i = 1; i <= upper_limit; i++){
        if(i % 3 == 0 || i % 5 == 0){
            sum = sum + i;
        }
    }
    return sum; 
}

console.log(multisum(10));
console.log(multisum(1000));

// Reflection 
// Initally I've thought to create two if statements but I've realised it would complicate the code unecessarly 