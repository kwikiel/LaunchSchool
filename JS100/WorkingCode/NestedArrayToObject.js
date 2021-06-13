let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let d = {}; 

for(const x of nestedArray){
    d[x[0]] = x[1]; 
}

console.log(d); 