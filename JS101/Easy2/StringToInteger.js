function CharToDigit(c){
    switch(c){
        case '0':
            return 0;
        case '1':
            return 1;
        case '2':
            return 2;
        case '3':
            return 3;
        case '4':
            return 4;
        case '5':
            return 5;
        case '6':
            return 6;
        case '7':
            return 7;
        case '8':
            return 8;
        case '9':
            return 9;
        default:
            throw "Illegal character: " + c;
    }
}

function stringToInteger(raw_string){
    let num_raw = raw_string; 
    multiplier = 1
    sum = 0; 
    for(let i = num_raw.length-1; i >= 0; i--){
        // console.log(CharToDigit(num_raw[i]) * multiplier);
        sum = sum + CharToDigit(num_raw[i]) * multiplier; 
        multiplier = multiplier * 10;
    }
    return sum;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true