// PEDAC 
// Problem
// Example 
// Data structure 
// Algo 
// Implementation quirks

// ## Problem: Create a function that takes 2 arguments: array and tan object. 
// Array will contain 2 or more elements that, when combined with adjoining spaces, will produce person's name. 
// The Object will contain two keys: "title" and "occupation"
// Function should return a greeting that uses the person's full name, and mentions the person's title 

// ## Example 
// 
//console.log(
//    greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
//  );
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

// ## Data structure 
// function ([Array], [Object]) => [String]

// ## Algorithm 
// Concatenate array elements 
// Add "Nice to have a" string 
// Access object key "title"
// Access object key "occupation"

// Using string formatting `${}` return outcome 

function greetings(personal_data, occupation){
    return `Hello, ${personal_data.join(" ")}! Nice to have a ${occupation.title} ${occupation.occupation} around.` 
}


console.log(
    greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
  );
// logs Hello, John Q Doe! Nice to have a Master Plumber around.