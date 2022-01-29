const ftoc = function(Fahrenheit) {
  Celsius = (Fahrenheit - 32) * (5/9)
  temperature = Math.round(Celsius * 10) / 10
  return temperature
};

const ctof = function(Celsius) {
  Fahrenheit = (Celsius * (9/5)) + 32
  temperature = Math.round(Fahrenheit * 10) / 10
  return temperature
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
