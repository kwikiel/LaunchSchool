```javascript
first(['Earth', 'Moon', 'Mars']); // 'Earth'

function first(ar){
   if(ar.length > 0){
      return ar[0];
   }
}
```
last(['Earth', 'Moon', 'Mars']); // 'Mars'

```javascript
function first(ar){
   if(ar.length > 0){
      return ar[ar.lenth-1];
   }
}
```

## Add + Delete 
```javascript
let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

energy.shift(); // removes fossil 
energy.push("geothermal")

```

## Alphabet
```javascript
alphabet.split("");
```

## Filter 
```javascript 
scores.filter(x => x > 100).length

```

## Vocabulary 

Gotcha: For Python devs it's natural to write for in loop, but javascript has for of loop instead

```javascript
let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

for(var row of vocabulary) {
   for(var word of row){
      console.log(word);
   }
}
```
