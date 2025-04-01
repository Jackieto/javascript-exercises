const removeFromArray = function(arr, numbers) {


   for (let i = 1; i < arguments.length; i++) {
        while(arr.includes(arguments[i])){
            let index = arr.indexOf(arguments[i],0);
             arr.splice(index,1);
            
        }
    }
    

    return arr;

};

console.log(removeFromArray([1, 2, 3, 4], 3, 2));


// Do not edit below this line
module.exports = removeFromArray;
