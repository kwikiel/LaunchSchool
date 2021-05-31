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

