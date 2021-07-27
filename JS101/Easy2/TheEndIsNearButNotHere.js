// PEDAC 
// Problem: Function that returns next to last word in string 
// Example: console.log(penultimate("Launch School is great!") === "is"); // logs true
// Data structure: 
// - string input: 
// - string output: 
// - intermediate representation: Array created by splicing input string 
// Algorithm : return Array[].slice(-2,-1)

function penultimate(input) {
    return input.split(" ").slice(-2,-1); 
}

console.log(penultimate("Launch School is great!"));