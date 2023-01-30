"use strict";
let number = Math.floor(Math.random() * 900 + 100);
console.log("Рандомно число:", number);
let num1 = number % 10;
let num2 = Math.floor((number % 100) / 10); //Math.floor - деление без остатка
let num3 = Math.floor(number / 100);
console.log("Сумма цифр числа:", num1 + num2 + num3);
console.log("Произведение цифр числа:", num1 * num2 * num3);
