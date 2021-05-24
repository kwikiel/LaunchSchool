## Truthy vs Falsy	

Javascript has only 8 null things 

Numbers: 0, -0, On 
Empty strings: "", '', \`\`

Other: undefined, -

https://developer.mozilla.org/en-US/docs/Glossary/Falsy

## Yes? No? Part 1

```javascript
let randomNumber = Math.round(Math.random());

if(randomNumber === 1){
  console.log("Yes!");
} else {
  console.log("No.");
}
```

## Yes? No? Part 2 (ternary operator)

```javascript
let randomNumber = Math.round(Math.random());

// Works but not optimal 
randomNumber ? console.log("Yes!");  : console.log("No.");

// Best 
console.log(randomNumber ? "Yes!" : "No.");
```

## Check the Weather, Part 1
## Switch	Not completed
## Check the Weather, Part 2
## Logical Conditions 1
## Logical Conditions 2
## Logical Conditions 3	
## Are we moving?	
