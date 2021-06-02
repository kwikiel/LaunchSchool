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

## Travel 

todo 

## Passcode 

```javascript
let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

// Write some code here.
// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'
console.log(passcode.join("-")); 

```

## Checking items off the grocery list 

```
let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

while(groceryList.length > 0 ){
		console.log(groceryList.shift());
}

console.log(groceryList); // [] 
```
