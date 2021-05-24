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
Initialize a variable weather with a string value being "sunny", "rainy", or anything else.

Write an if statement that logs:

"It's a beautiful day!" if weather is assigned to the string "sunny",
"Grab your umbrella." if weather is assigned to the string "rainy", and
"Let's stay inside." otherwise.
Test your code with different values for weather.


console.log(weather === "sunny": ""It's a beautiful day!": "Grab your umbrella.")

```javascript
let weather = "tornado";

if (weather === "sunny") {
    console.log("It's a beautiful day");
} else if (weather == "rainy") {
    console.log("Grab your umbrella");
} else {
    console.log("Let's stay inside")
}

```

## Switch

```javascript 
let animal = 'horse';

switch (animal) {
  case 'duck':
    console.log('quack');
  case 'squirrel':
    console.log('nook nook');
  case 'horse':
    console.log('neigh');
  case 'bird':
    console.log('tweet tweet');
  default:
    console.log('*cricket*');
}


// Code will print: 
// neigh 
// tweet tweet 
// *cricket* 


```

What happens if I forgot a break?
If you forget a break then the script will run from the case where the criterion is met and will run the cases after that regardless if a criterion was met.

See example here: ( from MDN documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch ) 
```javascript 
var foo = 0;
switch (foo) {
  case -1:
    console.log('negative 1');
    break;
  case 0: // foo is 0 so criteria met here so this block will run
    console.log(0);
    // NOTE: the forgotten break would have been here
  case 1: // no break statement in 'case 0:' so this case will run as well
    console.log(1);
    break; // it encounters this break so will not continue into 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log('default');
}

```

## Check the Weather, Part 2

Understand the problem: convert code below to the switch case 
Example/Test case: Code above contains example of switch statement
Data structure: Case switch 
Algorithm: convert code inside  if ( ) to switch 
Code with intent; 




```javascript
let weather = "tornado";

if (weather === "sunny") {
    console.log("It's a beautiful day");
} else if (weather == "rainy") {
    console.log("Grab your umbrella");
} else {
    console.log("Let's stay inside")
}

let weather = "tornado";

switch(weather) {
	case "sunny": {
		 console.log("It's a beautiful day");
		 break; 
	}
	case "rainy": {
		 console.log("Grab your umbrella");
		 break; 
	}
	default: {
		console.log("Let's stay inside")
	}

}

```

## Logical Conditions 1
## Logical Conditions 2
## Logical Conditions 3	
## Are we moving?	
