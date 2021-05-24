# Array Element Access


Locate the documentation for the Array built-in object on MDN.

How can we access the element 'and' in the array ['fish', 'and', 'chips']?

Answer: something[1] 


# Out of Bounds
What happens if we take the array ['fish', 'and', 'chips'] and try to access the element at index position 10? Try this in your JavaScript console.

> undefined 

# Property vs Method

What are the return values of the statements on lines 3 to 5? Refer to the MDN documentation about the Array object for help.
```javascript
let trees = ['birch', 'pine', 'sequoia', 'palm tree'];

trees[trees.length - 1];
trees.pop();
trees[trees.length - 1];
```

Solution: 

trees[trees.length - 1] // palm tree ( if arrays are 0 indexed ) 
trees.pop() // removes last element and returns it 'palm tree '

trees[trees.lenth - 1] // this time only sequoia because last element is removed 
