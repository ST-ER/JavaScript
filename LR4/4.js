"use strict";
let j = 1;
let q = 0;
let arr = [];
let arr2 = [понедельник, вторник,среда,четверг,пятница,суббота,воскресенье];


for (let i = 0; i < 31; i++) {
    arr[i] = j;
    j++;
}

for (let i = 0; i < 31; i++) {
    console.log(arr[i],"января",arr2[i]);
    q++;
    //if (q ===7) q = 0;
    
}