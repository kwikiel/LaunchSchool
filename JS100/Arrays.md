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
