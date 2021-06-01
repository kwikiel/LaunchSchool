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
