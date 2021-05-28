Title	Status
## Sum
Traditional: 

```javascript
function sum(a,b) {
	return a + b; 
}
```

## Log Quote

```javascript 
function brendanEichQuote() {
	console.log("Always bet on Javascript.")
}
```

If there is no return statement, the return value is ```undefined```

## Cite the Author

```javascript 
function cite(author, quote){
	console.log(author + " said: " + '"' + quote + '"');
}
```

Gotcha on quotes. 

Better solution 

```javascript 
function cite(author, quote) {
  console.log(`${author} said: "${quote}"`);
}
```

## Squared Number

```javascript

function squaredNumber(num) {
	return num * num; 
}

```

## Display Division

```javascript

function multiplesOfThree() {
  let divisor = 1;

  for (let dividend = 3; dividend <= 30; dividend += 3) {
    console.log(dividend + ' / ' + divisor + ' = 3');
    divisor += 1;
  }
}

multiplesOfThree;

```

Gotcha: code above will print nothing as the function is not properly invoked 

## Three-way comparison

Task: 
compareByLength('patience', 'perseverance'); // -1
compareByLength('strength', 'dignity');      //  1
compareByLength('humor', 'grace');           //  0

```javascript

function compareByLength(a,b){
    if(a.length < b.length ) {
    	return -1;
    }
    if(a.length > b.length) {
    	return 1;
    }
    return 0; 
}

//But it was slightly harder to  write correctly :) 
```

## Transformation

```javascript
'Captain Ruby'.replace("Ruby", "Javascript")
```
## Internationalization 1

```javascript

function greet(locale){
	switch(locale) {
		case 'en': return "Hi!"; 
		case 'fr': return "Salut!"; 
	}
}


```

## Locale Part 2
## Locale Part 1
## Internationalization 2	
