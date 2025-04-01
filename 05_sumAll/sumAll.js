const sumAll = function(x,y) {
    if(x < 0 || y < 0){
        return "ERROR";
    }

    if(Number.isInteger(x) == false || Number.isInteger(y) == false){
        return "ERROR";
    }

    let sum = 0;

    for (let index = Math.min(x,y); index <= Math.max(x,y); index++) {
        sum += index;        
    }

return sum;
};

 // returns the sum of 1 + 2 + 3 + 4 which is 10
console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
