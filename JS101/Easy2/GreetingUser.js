// PEDAC 

const readlineSync = require('readline-sync');
const name = readlineSync.question('What is your name? ');

if(name.charAt(name.length-1) == "!"){
    console.log(`HELLO ${name.toUpperCase().slice(0, name.length-1)}. WHY ARE WE SCREAMING?`)
} else {
    console.log(`Hello ${name}.`)
}

