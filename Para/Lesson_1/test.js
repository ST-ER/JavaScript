"use strict";
const number = "123";

//if (typeof number === "number") {
if (isNaN(number)) {
  if (number % 2 == 0) {
    console.log("Чётное число:", number);
  } else {
    console.log("Нечётное число:", number);
  }
} else console.log("no");
