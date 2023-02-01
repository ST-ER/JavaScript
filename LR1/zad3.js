//Написать генератор нечётных случайных чисел в диапазоне между n и m включительно.
//Учесть, что n и m могут быть отрицательными, а также может быть n > m или n < m.
//Вывести результат с помощью console.log. (Не используя ветвление)

"use strict";
const n = 5;
const m = 10;
const min = Math.min(n, m);
const count = Math.max(n, m) - min;
console.log("count:", count);

const rand = Math.floor(Math.random() * count + min);
console.log(rand * 2 + 1);
