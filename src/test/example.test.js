const { checkInteger, isPositive, divisionTwoNumbers } = require('../math');

// son casos hipoteticos

// la función debe devolver true cuando le pasemos un 5
// la función debe devolver false si le pasamos 'javascript'
// la función debe devolver false si le pasamos 5.8
// la función debe devolver false si le pasamos { a: 1 }
// la función debe devolver false cuando le pasamos "-5";

// describe('La función debe devolver ', () => {
//   test('true cuando le pasemos un 5', () => {
//     let value = 5;

//     let result = checkInteger(value);

//     expect(result).toBe(true);
//   });

//   test('false cuando le pasemos un javascript', () => {
//     let value = 'javascript';

//     let result = checkInteger(value);

//     expect(result).toBe(false);
//   });

//   test('false cuando le pasemos un 5.8', () => {
//     let value = 5.8;

//     let result = checkInteger(value);

//     expect(result).toBe(false);
//   });

//   test('false cuando le pasemos un { a: 5 }', () => {
//     let value = { a: 5 };

//     let result = checkInteger(value);

//     expect(result).toBe(false);
//   });

//   test('false cuando le pasemos un 5', () => {
//     let value = '5';

//     let result = checkInteger(value);

//     expect(result).toBe(false);
//   });
// });

// describe('La función debe devolver ', () => {
//   test('true cuando le pasemos un 5', () => {
//     let value = 5;

//     let result = isPositive(value);

//     expect(result).toBe(true);
//   });

//   test('false cuando le pasemos un javascript', () => {
//     let value = 'javascript';

//     let result = isPositive(value);

//     expect(result).toBe(false);
//   });

//   test('false cuando le pasemos un -5.8', () => {
//     let value = -5.8;

//     let result = isPositive(value);

//     expect(result).toBe(false);
//   });

//   test('false cuando le pasemos un { a: -5 }', () => {
//     let value = { a: -5 };

//     let result = isPositive(value);

//     expect(result).toBe(false);
//   });

//   test('false cuando le pasemos un -5', () => {
//     let value = '-5';

//     let result = isPositive(value);

//     expect(result).toBe(false);
//   });
// });

describe('La función debe devolver ', () => {
  test('true cuando le pasemos un 5 y 2', () => {
    let a = 5;
    let b = 2;

    let result = divisionTwoNumbers(a, b);

    expect(result).toBe(true);
  });
  
  test('true cuando le pasemos un 5 y -2', () => {
    let a = 5;
    let b = -2;

    let result = divisionTwoNumbers(a, b);

    expect(result).toBe(true);
  });

  test('true cuando le pasemos un -5 y -2', () => {
    let a = -5;
    let b = -2;

    let result = divisionTwoNumbers(a, b);

    expect(result).toBe(true);
  });

  test('false cuando le pasemos un 5 y hola', () => {
    let a = 5;
    let b = 'hola';

    let result = divisionTwoNumbers(a, b);

    expect(result).toBe(false);
  });

  test('false cuando le pasemos un hola y 2', () => {
    let a = 'hola';
    let b = 2;

    let result = divisionTwoNumbers(a, b);

    expect(result).toBe(false);
  });

  test('false cuando le pasemos un hola y adios', () => {
    let a = 'hola';
    let b = 'adios';

    let result = divisionTwoNumbers(a, b);

    expect(result).toBe(false);
  });

  // test('false cuando le pasemos un string vacio y un 2', () => {
  //   let a = '';
  //   let b = 2;

  //   console.log(!isNaN(''));

  //   let result = divisionTwoNumbers(a, b);

  //   expect(result).toBe(false);
  // });

});

// 1.- Probar una función que indique si un número es positivo
// 2.- Probar una función que divida dos números
// 3.- Probar una función que reciba un arreglo de números y saque el promedio