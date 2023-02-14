"use strict";

const number = 10;
const number2 = 20;
const operator = "**";

switch (operator) {
  case "+":
    console.log(number + number2);
    break;
  case "-":
    console.log(number - number2);
    break;
  case "*":
    console.log(number * number2);
    break;
  case "/":
    console.log(number / number2);
    break;
  default:
    console.log("Неизвестная операция!");
    break;
}
