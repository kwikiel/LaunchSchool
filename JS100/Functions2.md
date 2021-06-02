## Greet 1 

```javascript
function greet(greeting) {
  console.log(greeting + ', world!');
}

greet('Salutations'); // logs: Salutations, world!

greet();              // logs: undefined, world!
                      // should log: Hello, world!
                      
                      
// Solution: 
function greet(greeting = "Hello") {
  console.log(greeting + ', world!');
}

greet('Salutations'); // logs: Salutations, world!

greet();              // logs: undefined, world!
                      // should log: Hello, world!
```

## Greet 2 

```javascript

// Solution for Greet 2 

function greet(greeting = "Hello", recipient="world") {
  console.log(greeting + ", " + recipient + "!");
}

greet();                                // logs: Hello, world!
greet('Salutations');                   // logs: Salutations, world!
greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!
```

## Greet 3 

```javascript
function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}

function greet(g = greeting(), r=recipient()) {
  console.log(g + ", " + r + "!");
}




```

