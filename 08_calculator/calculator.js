const add = function(a,b) {
	return a + b
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(array) {
	const answer = array.reduce((total, item) => {
    return total += item
  }, 0);
  return answer
};

const multiply = function(array) {
  const answer =  array.reduce((total, item) => {
      return total *= item;
  }, 1);
  return answer
};

const power = function(a,b) {
	return a**b
};

const factorial = function(a) {
	let answer = 1
  if (a == 1 || a == 0) {
    return 1
  } 
  for (i = 2; i <= a; i++) {
    answer = answer * i
  }
  return answer
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
