let person = {
    title: 'Duke',
    name: 'Nukem',
    age: 33
  };


// The goal is to convert person object into a nested array nestedPerson 



let meta = []; 

for(const [k,v] of Object.entries(person)){
    //keys.push(k);
    //values.push(v); 
    meta.push([k,v]); 
}

console.log(meta); 

// Or simpler 

let meta2 = Object.entries(person);

console.log(meta2); 