const suma = (a, b) => {
  return a + b;
};

const resta = (a, b) => {
  return a - b;
};

const checkInteger = (value) => {
  return Number.isInteger(value);
};

module.exports = {
  suma,
  resta,
  checkInteger,
}