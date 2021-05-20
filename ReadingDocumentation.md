# Type of Primitive

```javascript 
typeof 23.5; "number"
typeof 'Call me Ishmael.'; "string"
typeof false; "boolean"
typeof 0; "number" 
typeof null; "object"
typeof undefined; "undefined"
```

## Return Values 

```javascript 
let tweet = "I'm learning to program! Woooot :-) #javascript #launchschool";

let words = tweet.split(' ');
let isValid = tweet.length < 140;
```

typeof tweet; // "string"
typeof words; // "object"
typeof isValid; // "boolean"

## Method Chaining

```javascript
let tweet = 'Starting to get the hang of it... #javascript #launchschool';

tweet.split(' '); // Array ["Starting", "to", "get", "the", "hang", "of", "it...", "#javascript", "#launchschool"]
tweet.split(' ').reverse(); 
tweet.split(' ').reverse().join(' ');

```

## Equality
```javascript
'8' == 8; // true 
'8' === 8; // false 
```
