"use strict";
const year = 2022;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("Високосный год");
} else {
  console.log("Не високосный год");
}
