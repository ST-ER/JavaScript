"use strict";
const year = 2000;
const month = 2;
let vis;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  vis = "Високосный год";
} else {
  vis = "Не високосный год";
}

if (
  month === 1 ||
  month === 3 ||
  month === 5 ||
  month === 7 ||
  month === 8 ||
  month === 10 ||
  month === 12
) {
  console.log("31-день");
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
  console.log("30-дней");
} else if (month === 2 && vis === "Високосный год") {
  console.log("29-дней");
} else {
  console.log("28-дней");
}
