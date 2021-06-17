## Before running the code, determine differences 

```javascript

let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean); // ocean {"Indian": "Pacific"}
```

Dot notation doesn't allow expression: 

ocean.prefix ( prefix isn't taken from the variable )



```javascript
let ocean = {};
let prefix = 'Indian';

ocean[prefix] = 'Pacific';

console.log(ocean); // ?
```

Bracked notation accept expressions 