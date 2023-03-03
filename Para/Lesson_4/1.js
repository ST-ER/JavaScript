"use strict";
const card=['tuz','king','1','4'];
let carta = '1';
function Cards(card,carta = 'tuz'){
    let flag = false;
    for (let i = 0; i <= card.length; i++ ){
        if (card[i]===carta){
            console.log('Карта найденна');
            flag = true; 
            break
        }
    }
    if(!flag) console.log("Карта не найденна");
}
Cards(card,carta);