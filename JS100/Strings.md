## Length
Determine the length of the string "These aren't the droids you're looking for.".

Length is a method 
```javascript

"These aren't the droids you're looking for.".length 

```

## ALL CAPS 

toUpperCase() is a function 

```javascript

'confetti floating everywhere'.toUpperCase();

```

## Repeat 

The goal is to implement function that works as the following: 

```javascript

function repeat(input, num) {
    out = "";
    while(num > 0 ){
          out = out + input; 
          num--; 
    }
    return out;
}

repeat(3, 'ha'); // 'hahaha'

```

## Multi line string 

```javascript
var mls = "A pirate I was meant to be!\nTrim the sails and roam the sea!"
```
## Case sensitive inequality 

```javascript
string1 == string2
false
string1.toLowerCase() == string2.toLowerCase()
true
```

## Contains character 

```javascript
let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

```

## Contains character solution 
```javascript
byteSequence.indexOf("x");  // index of or -1 if not found 
byteSequence.includes("x"); // true or false 
```

## Blank version 1 
```javascript
isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true
``` 

```javascript
function isBlank(a){
    if(a){
        return false; 
    } else {
        return true; 
    }
} 
```

## Blank version 2 

Change your isBlank function from the previous exercise to return true if the string is empty or only contains whitespace. For example:

```javascript

function isBlank(a){
 mystring.replace(' ','');
           
    if(a){
        return false; 
    } else {
            mystring.replace(' ','');  
        return true; 
    }
} 


isBlank('mars'); // false
isBlank('  ');   // true
isBlank('');     // true
```

gotcha: The String.prototype.trim() method removes whitespaces from both ends of a string. Once we removed those whitespaces, we can use the same strategy as in the previous exercise.



