var words = 'launch school tech & talk';

var s = words.split(" "); 
var output = ""; 
s.forEach(element => {
    output += " "+ element[0].toUpperCase() + element.slice(1);
    element = element.toUpperCase();
});

//console.log(s.concat(" "));
console.log(output.trim(" "));

