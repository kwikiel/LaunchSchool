const readlineSync = require('readline-sync');

const length = readlineSync.question('Enter the length of the room in meters:');
const width = readlineSync.question('Enter the length of the room in meters:');

const area = parseInt(length) * parseInt(width);
const M2TOFEET2 = 10.76;

console.log(`The area of the room is ${area} square meters (${area*M2TOFEET2} square feet)`);
