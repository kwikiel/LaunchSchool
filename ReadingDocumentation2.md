##  Style Guide	
```javascript 

let ice_cream_taste = 'chocolate' // snake_case => CamelCase
let ice_cream_density = 10 // same as above 

while(ice_cream_density > 0) // opening parenthesis should be in the same line 
{
    console.log('Drip...');
    ice_cream_density -= 1;
}

console.log('The '+ ice_cream_taste +' ice cream melted.') // lack of spaces between + operator  
``` 



## 	Data Types	

Primitive data types ( guess ): 
- number 
- object 
- boolean
- function 
- undefined 
- BigInt 
- string  
- Symbol 

Only Object datatype is mutable. Primitive data types are immutable 
## 	Largest Number	

Number.MAX_VALUE; // 1.7976931348623157e+308

## 	Arithmetic Operator Precedence	
- exponetiation 
- multiplication 
- division 
- remainder 
- addition
- subtraction 

For example 

```javascript 

4 * 5 + 3 ** 2 / 10 

4 * 5 + 9 / 10 

20 + 9 / 10

20.9  

```
## 	Date

```javascript 
Date.now(); // 1621593556936 - number of seconds since Jan 1 1970, 00:00:00 UTC 
```

## 	Which year is this?	

```javascript
getYear() // current year - 1900 also depreciated 
getFullYear() // returns proper 4 digit year for time between 1000 and 9999
```
## 	Argument Signatures

```javascript
join() // concatenates and returns a new string 
join(separator) // same as above but between concatenated strings a separator will be placed 
```

## 	String Concatenation

Simple approach: 
```javascript
str1 + str2 
```

Alternative approach 
```javascript 
str1.concat(str2)
```
## 	SyntaxError	

When specific language construct was expected but not found 
```javascript 
let speedLimit = 60;
let currentSpeed = 80;

if ((currentSpeed > speedLimit) && ((currentSpeed - speedLimit)) > 5) {
  console.log('"People are so bad at driving cars ' +
    'that computers don\'t have to be that good to be much better." ' +
    '-- Marc Andreessen');
}
```
Fixed code by aligning and matching brackets in the if statement 
## 	TypeError	Not completed
