const add = function (...arr) {
  return arr.reduce((total, current) => total + current, 0);
};

const subtract = function (...arr) {
  return arr.reduce((total, current) => total - current);
};

const sum = function (arr) {
  return arr.reduce((total, current) => total + current, 0);
};

const multiply = function (arr) {
  return arr.reduce((product, current) => product * current, 1);
};

const power = function (base, exponent) {
  return base ** exponent;
};

const factorial = function (num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
