
let vehicle = {
    manufacturer: 'Tesla',
    model: 'Model X',
    year: 2015,
    range: 295,
    seats: 7
  };
  

/*
for(const [k,v] of Object.entries(vehicle)){
    keys.push(k);
}
*/

keys = Object.keys(vehicle);

console.log(keys); 