function catAge(age){
    switch(age){
        case 0:
            return 0;
        case 1:
            return 15; 
        case 2:
            return 15+9;
        case 3:
            return 15+9+4; // 28
        default:
            return 24 + (age - 2) * 4;




    }
}


console.log(catAge(0));
console.log(catAge(1));
console.log(catAge(2));
console.log(catAge(3));
console.log(catAge(4));