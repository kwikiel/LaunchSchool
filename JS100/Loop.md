## Loop and Log

```javascript
for (let i = 0; i <= 10; i += 2) {
  console.log(i) 
}
// 0, 2, 4, 6, 8 ,10
```

## Countdown
```javascript
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log("Launch!");
```
## Triple Greeting
```javascript
var greeting = 'Aloha';
var i = 3; 
while(i > 0){
  console.log(greeting);
  i--;
}
```
## Take Two
```javascript

for(let i = 1; i< 100; i++){
  console.log(i*2);
}

```
## Looping over Array Elements
```javascript
for(let i = 1; i< 100; i++){
  console.log(i*2);
}

var index = 0;
while (index <= 3 ) { 
    console.log(array[index]); 
    index++
}

```
## Continue
```javascript
for(x in cities){
  if(cities[x]){
      console.log(cities[x]);}
  else {
      continue;
   }
}

```
## And on and on and on
```javascript
// loop forever 
for (let i = 0; ; i += 1) {
  console.log("and on");
}


// stops after first iteration 
for (let i = 0; i<1 ; i += 1) {
  console.log("and on");
}
```
## That's Odd
```javascript

var i = 2; 
while(i < 40 ){
   if(i % 2 == 1){
         console.log(i);
      }
 i++; 
}
```
## Finding Nemo
## Do...While

Important difference. 

In while loop the condition is evaluated BEFORE

in do while - it's checked after the execution of the code block. 

So the first snippet will print nothing and the second would print "Woooot" and would mutate the state of the counter to  -1 

```javascript

let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}

let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);
```

