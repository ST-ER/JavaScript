"use strict";
let number = (Math.random() * 10).toFixed(2);
number = parseFloat(number);
let number2 = (Math.random() * 10).toFixed(2);
number2 = parseFloat(number2);
console.log("Первое число: ", number, "\nВторое число: ", number2);
let average = (number + number2) / 2;
console.log("Средне арифметическое: ", average);
average = average % 10;
console.log("Дробная часть: ", average);
