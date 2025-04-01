const convertToCelsius = function(temp) {

  // 	x_C = (x − 32) × ⁠5/9⁠ °C 
  let res = (temp - 32) * (5/9);
  let rounded_res = (Math.round(res * 10) / 10);
  return rounded_res 


};

const convertToFahrenheit = function(temp) {

  // 	x_f = (x × ⁠9/5⁠ + 32) °F 
  let res = 0;
  if(temp < 0){
    res = (1.8 * temp) + 32;
  }else{
     res = (temp  * (9/5) + 32 );
  }

  let rounded_res = (Math.round(res * 10) / 10);


  return rounded_res

};

convertToCelsius(100);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
