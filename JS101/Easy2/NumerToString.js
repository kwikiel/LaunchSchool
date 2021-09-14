
function integerToString(i){
    let chars = []; 
    while(i > 1){
        let leading_digit = i % 10; 
        chars.push(leading_digit);
        // console.log(`Leading num ${leading_digit}`);
        i = Math.floor(i / 10); 
    }
    
    chars.reverse();
    
    return chars.join("")
}

console.log(integerToString(4321));        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"


console.trace(integerToString);