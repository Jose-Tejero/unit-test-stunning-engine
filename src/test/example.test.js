const { checkInteger } = require('../math');

// son casos hipoteticos

// la función debe devolver true cuando le pasemos un 5
// la función debe devolver false si le pasamos 'javascript'
// la función debe devolver false si le pasamos 5.8
// la función debe devolver false si le pasamos { a: 1 }
// la función debe devolver false cuando le pasamos "-5";

describe('La función debe devolver ', () => {
  test('true cuando le pasemos un 5', () => {
    let value = 5;

    let result = checkInteger(value);

    expect(result).toBe(true);
  });

  test('true cuando le pasemos un javascript', () => {
    let value = 'javascript';

    let result = checkInteger(value);

    expect(result).toBe(false);
  });

  test('true cuando le pasemos un 5.8', () => {
    let value = 5.8;

    let result = checkInteger(value);

    expect(result).toBe(false);
  });

  test('true cuando le pasemos un { a: 5 }', () => {
    let value = { a: 5 };

    let result = checkInteger(value);

    expect(result).toBe(false);
  });

  test('true cuando le pasemos un 5', () => {
    let value = '5';

    let result = checkInteger(value);

    expect(result).toBe(false);
  });
});
