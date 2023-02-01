//Запишите в переменные x и y координаты двух произвольных точек: x1, y1 — первая точка, x2, y2 — вторая точка.
// Вычислите площадь прямоугольника, противоположные углы которого представлены указанными точками.
// Выведите результат с помощью console.log.

"use strict";
const x1 = 8;
const y1 = 1;
const x2 = 5;
const y2 = 1;

const width = Math.abs(y2 - y1);
const height = Math.abs(x2 - x1);

const area = width * height;
console.log("Площадь", area);
