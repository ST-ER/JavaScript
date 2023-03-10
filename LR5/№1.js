// Напишите функцию filter(), которая создаёт массив email-адресов, не попавших в чёрный список. 
// В качестве аргументов функция должна принимать: массив строк с исходными email адресами, массив строк с email адресами в чёрном списке.
"use strict";
function filter(email,blackEmail){
    let cleanEmail = [];
    let chek = 0;
    for(let i = 0;i<email.length; i++){
        for(let j=0; j<blackEmail.length;j++){
            if(email[i] === blackEmail[j]){
                chek++;
            } 
        }
        if(chek === 0){cleanEmail.push(email[i]);}
        chek =0;
    }
    return cleanEmail;
}


let email = [
    'newi@mail.ru',
    'ewifnk@yandex.ru',
    'dlsmv@gmail.com',
    'dsk@outlook.com',
    'mdfksm@mail.ru'
]

let blackEmail = [
    'dsk@outlook.com',
    'newi@mail.ru',
    'mdfksm@mail.ru'
]

console.log(filter(email,blackEmail));
