
let student = {
    name: 'Carmen',
    age: 14,
    grade: 10,
    courses: ['biology', 'algebra', 'composition', 'ceramics'],
    gpa: 3.75,
  };

let jane = {
    firstName: 'Jane',
    lastName: 'Harrelson',
    age: 32,
    location: {
      country: 'Denmark',
      city: 'Aarhus'
    },
    occupation: 'engineer',
  }; 

console.log(student.courses);
console.log(student.locker); // undefined 
console.log(jane.location.country)

let fido = {
    name: 'Fido',
    species: 'Labrador Retriever',
    color: 'brown',
    weight: 16,
  };


// Add property 'age'.
// Add property 'favorite food'.
fido.age = 21; 
fido["favourite food"] = "pizza"; 

console.log("Add a property"); 

console.log(fido.age);
console.log(fido.favourite_food);