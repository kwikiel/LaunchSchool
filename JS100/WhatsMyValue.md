The following exercises are about evaluating the code without running it. 

```javascript
console.log(greeting);

var greeting = 'Hello world!';

// "greeting" is undefined 
// correct answer: undefined 
``` 


This time it will log "Hello world" but I'm not sure exactly why 
// Correct answer: ReferenceError: Cannot access 'greeting' before initialization


```javascript

console.log(greeting);

let greeting = 'Hello world!';

``` 

undefined because myValue is not declared in this scope 
// Correct answer: ReferenceError: myValue is not defined. Let variables are block scoped 


```javascript
if (true) {
  let myValue = 20;
}

console.log(myValue);
```
