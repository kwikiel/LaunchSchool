crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');

// Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.
function crunch(a){
    for (var i = 0; i < a.length; i++){
        if(a[i] === a[i+1]){
            a = a.substring(0, i) + a.substring(i + 1, a.length);
        }
    }
}


console.log(crunch('4444abcabccba'));