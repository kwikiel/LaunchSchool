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

The code below will log 1 to the console. No gotcha here. 
```javascript


function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction();

```


Another gotcha: 

```javascript


function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();


```
