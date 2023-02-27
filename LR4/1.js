"use strict";
let arr = [];

const n = 0;
const m = 100;
const count = 100;
const min = Math.min(n, m);
const hag = Math.max(n, m) - min;

while (arr.length < count) {
    arr.push(Math.floor(Math.random() * hag + min));
    
}
console.log(arr);