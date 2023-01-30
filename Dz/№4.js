"use strict";
let number1 = (Math.random() * 10).toFixed(2);
let number2 = (Math.random() * 10).toFixed(2);
let number3 = (Math.random() * 10).toFixed(2);
console.log(
  "Первое число:",
  number1,
  "\nВторое число:",
  number2,
  "\nТретье число:",
  number3
);
number1 = Math.abs(parseFloat(number1));
number2 = Math.abs(parseFloat(number2));
number3 = Math.abs(parseFloat(number3));
let arithmetic = (number1 ** 3 + number2 ** 3 + number3 ** 3) / 3;
console.log("Средне арифметическое: ", arithmetic);
let geometric = (number1 ** 2 * number2 ** 2 * number3 ** 2) ** -3;
console.log("Средне арифметическое: ", geometric);
