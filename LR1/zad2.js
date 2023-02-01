//Вычислите дробные части чисел a и b с точностью n.
// Выведите получившиеся числа с помощью console.log.
// Выведите результаты их сравнения >, <, ≥, ≤, ===, ≠ с помощью console.log.

"use strict";
const a = Math.random();
const b = Math.random();
const n = 5;
console.log("firstNumber:", a, "\nsecondNumber:", b);

const A = Math.trunc((a - Math.floor(a)) * 10 ** n);
const B = Math.trunc((b - Math.floor(b)) * 10 ** n);
console.log("firstNumber:", A, "\nsecondNumber:", B);

console.log("A === B:", A === B);
console.log("A > B:", A > B);
console.log("A < B:", A < B);
console.log("A >= B:", A >= B);
console.log("A <= B:", A <= B);
console.log("A!== B:", A !== B);
