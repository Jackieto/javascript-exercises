const repeatString = function(string,number) {

    if (number < 0 ){
        return "ERROR";
    }
    console.log(string);
    console.log(number);

    let repeated = "";
    for (let index = 0; index < number; index++) {
        repeated += string;
    }
    return repeated;
};


console.log(repeatString("hey",3));
// Do not edit below this line
module.exports = repeatString;
