const convertToCelsius = function(farValue) {
  let result = (((farValue-32)*5)/9);
  return Math.round(result *10) / 10;
};

convertToCelsius(100);

const convertToFahrenheit = function(celValue) {
  let result = (((celValue*9)/5)+32);
  return Math.round(result *10) / 10;
};
convertToFahrenheit(100)
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
