//Массив (особый тип данных) предназначен для хранения упорядоченных данных

//Объявление
// let array = []
// let fruits = ['Яблоко', 'Апельсин', 'Груша', 'Банан', 'Манго'];
// console.log(fruits[0], fruits[4])
// console.log(fruits[fruits.length -1])



// //  массив с вариантами привествий 
// let greetings = ['hello', 'good morning', 'good evhing', 'good afternoon']

// console.log(greetings[2]); //опечатка 
// // исправим опечатку
// greetings[2] = 'good evening';


// console.log(greetings[2]); // теперь все хорошо 


// push добавляет элемент в конец массива
array.push('56');
// pop удаляет последний элемент массива
array.pop()

//unshift добавляет элемент в начало массива
array.unshift('new item')
// shift удаляет элемент в начале, сдвигая очередь, так что второй элемент становится первым
array.shift()

//Методы push/pop выполняются быстро, а методы shift/unshift – медленно.


let alphabet = [];

// добавить в конец массива
alphabet.push('Г');
alphabet.push('Д');
alphabet.push('Е', 'Ж', 'З');

// добавить в начало
alphabet.unshift('В');
alphabet.unshift('А', 'Б');

console.log(alphabet);


alphabet.length; // 8
// Используется часто в циклах и для вывода последнего элемента массива

//Перебор элементов массива

// for (начало; условие; шаг) {
//   // ... тело цикла ...
// }

// let arr = ["Яблоко", "Апельсин", "Груша"];

// for (let i = 0; i < arr.length; i++) {
//   console.log( i );
//   console.log( arr[i] );
// }

// let fibo = [];

// fibo.push(1); 
// fibo.push(1);  
// fibo.push(2); // 1+1
// fibo.push(3); // 1+2
// fibo.push(5); // 2+3
// fibo.push(8); // 3+5
// fibo.push(13); // 5+8

// // и т.д

// let fibo = [1, 1];

// for (let i = 1; i < 49; ++i) {
//     fibo.push(fibo[i] + fibo[i - 1]);
// }

// // 1) let i = 1;
// // 2)

// console.log(fibo);

// цикл, который никогда не завершится и повесит вашу программу
for (; ;) console.log('Вечный цикл');



//for of -  не предоставляет доступа к номеру текущего элемента, только к его значению
let fruits = ['Яблоко', 'Банан', 'Апельсин', 'Ананас', 'Дыня'];

console.log('Сегодня съел:');
for (let fruit of fruits) {
    console.log(fruit);
}


// // fruit = 'Яблоко'

//for in - предоставляет доступа к номеру текущего элемента
// let rating = ['Катя', 'Вася', 'Маша', 'Петя', 'Лена'];
let rating = [15, 20, 0];

console.log('Рейтинг студентов:');

// for (let i = 0 in rating) {
//     // console.log(i)
//     console.log(typeof(i));
//     console.log(`${i + 1} место: ${rating[i]}`);
// }

//Цикл while выполняет выражения пока условие истинно

// while (условие) {
//   // код
//   // также называемый "телом цикла"
//   //i = i + 1; 
// }

// var i = 0

// while (i < 5) {
//     console.log(i);
//     i = i + 1;  
// }
// console.log('Конец цикла');



// let teaVolume = 200;

// console.log('Вы налили себе' + teaVolume + 'мл чая');

// while (teaVolume > 0) {
//     teaVolume -= 10;
//     console.log('В чашке осталось ' + teaVolume + 'мл чая');
// }
// console.log('Вы выпили весь чай');

//Цикл do...while повторяется пока заданное условие истинно
// do {
//   // тело цикла
// } while (условие);

// для простоты примера представим, что в пистолете 5 патронов
// вероятность выстрела - 20%
// do {
//     console.log('Нажимаем на курок');
// } while (Math.random() > 0.2);

// console.log('Похоже, вам не повезло');


//Инструкция continue прерывает выполнение текущей итерации текущего или отмеченного цикла, и продолжает его выполнение на следующей итерации (цикл не прерывается, а переходит к следующей итерации )

// break - прерывает выполнение текущего цикла (выход из цикла) 



// do {
//     console.log('вытаскиваем карту');
// } while (Math.random() > 0.2);

// console.log('Похоже, вам не повезло');




  let array = ['туз','король','10','дама','туз','король']
  let schet = false


  for (i = 0;i < array.length; i++){
    console.log("Взяли карту",array[i])
    if (array[i] == 'король'){
      schet = true
      break
    } 
  }
  schet?console.log("В колоде есть король"):console.log("В колоде нет короля")
