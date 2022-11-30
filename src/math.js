const suma = (a, b) => {
  return a + b;
};

const resta = (a, b) => {
  return a - b;
};

const checkInteger = (value) => {
  return Number.isInteger(value);
};

const isPositive = (value) => {
  return !isNaN(value) && value >= 0;
};

const divisionTwoNumbers = (a, b) => {
  return !isNaN(a / b);
};

module.exports = {
  suma,
  resta,
  checkInteger,
  isPositive,
  divisionTwoNumbers,
}