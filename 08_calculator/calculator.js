const add = function(x,y) {

  return x + y;

};

const subtract = function(x,y) {
	return x - y;
};

const sum = function(arr) {
	
  if(arr == undefined || arr.length == 0){
      return 0;
  }

  if(arr.length == 1){
    return arr[0];
  }

  if(arr.length == 2){
    return arr[0] + arr[1];
  }else{

    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
      sum += arr[index];
    }
    return sum;

  }

};

const multiply = function(...args) {
  // If the argument is an array, flatten it into individual numbers
  if (Array.isArray(args[0])) {
    args = args[0];
  }

  let total = 1;
  
  for (let index = 0; index < args.length; index++) {
    total *= args[index];
  }

  return total;
};

const power = function(x,y) {
	return x**y;
};

const factorial = function(number) {
  total = 1
  while (number > 0) {
    total *= number
    number = number - 1
  }
  return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
