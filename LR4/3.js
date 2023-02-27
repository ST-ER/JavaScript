"use strict";

const roadMines = [true, true, false, false, true, true, true, true, true, true];
let position = 0;
let mines = 0;

console.log("Танк начал двежение");

for (let i = 0; i < roadMines.length; i++) {
    position++;
    if (roadMines[i]) console.log("танк переместился на ",position,"позицию");
    else { 
        mines++;
        if (mines > 1) {console.log("танк унечтожен на ",position,"позиции");break;}
        else {console.log("танк повреждён на ",position,"позиции");}
    }
}
mines <2 ?console.log("Победа!") : console.log("Поражении...");
console.log("Игра окончена");