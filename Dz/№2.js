"use strict";
let number = Math.floor(Math.random() * 90 + 10);
console.log("Рандомно число:", number);
let num1 = number % 10;
let num2 = Math.floor(number / 10);
num1 = num1.toString();
num2 = num2.toString();
console.log("Результат: ", num1 + num2);
