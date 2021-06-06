let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

  // Write a function that checks whether or not a particular destination is included within destinations, 
  //without using the built-in method Array.prototype.includes().

function contains(city, destinations) {
    let result = false; 
    for(var c of destinations){
        if(c == city){
            return true; 
        }
    }
    return false;
}


console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false