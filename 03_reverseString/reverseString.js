const reverseString = function(string) {

    let reversed = "";
    for (let index = string.length - 1; index >= 0; index--) {

        reversed += string[index];        
    }

    return reversed;

};

console.log(reverseString("hello"));

// Do not edit below this line
module.exports = reverseString;
