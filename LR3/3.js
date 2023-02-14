"use strict";

const number1 = 1;
const number2 = 2;
const number3 = 2;
const number4 = 1;

if (number1 >= number2 && number1 >= number3 && number1 >= number4) {
  console.log("Число max", number1);
} else if (number2 >= number1 && number2 >= number3 && number2 >= number4) {
  console.log("Число max", number2);
} else if (number3 >= number1 && number3 >= number2 && number3 >= number4) {
  console.log("Число max", number3);
} else console.log("Число max", number4);
