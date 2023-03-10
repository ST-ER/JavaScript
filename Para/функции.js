//Функции вида "function declaration statement"
// функцию можно вызвать и до её объявления


// nameFunction()
// function nameFunction() {
//     //тело функции
//     console.log('Вызвана 1-я функция')
// }



//Функции вида "function definition expression"
//присваиваем функцию переменной, название функции можно опустить
// функцию можно вызвать только после её объявления

// let functionName = function() {
//         //тело функции
//         console.log('Вызвана 2-я функция')
//     }
//     //используем название переменной


//Стрелочная функция
// const funcName = () => {
//     //тело функции
//     console.log('Вызвана 3-я функция')
// }
// funcName()


// function nameFunction(name) {
//     console.log(`Привет, ${name}`)
// }


// nameFunction('Vika')
// nameFunction('Vikahghhghghghg')
// nameFunction()


// function nameFunction(name = 'незнакомец') {
//     console.log(`Привет, ${name}`)
// }
// nameFunction('Vika')
// nameFunction('Polina')
// nameFunction()



// //функция с двумя аргументами
// const test2 = (name, surname) => {
//     console.log(name + ' ' + surname);
// }
// test2('Иван', 'Иванов')

// const test3 = (name) => {
//     console.log(name);
// }
// test3('Иван')

// const test4 = name => {
//     console.log(name);
// }
// test4('Пётр')


// //колода
// // написать функцию, входными параметрами корой будет массив и карта, которую нужно найти (по умолчанию ищем Туз)

//Оператор return завершает выполнение текущей функции и возвращает её значение

// function func(num) {
//     console.log(num * num);
// }

// func(3);

// Если мы хотим не выводить значение на экран, а записать в какую-нибудь переменную:

// let result = func(3);
// console.log(result, 'ffffff')
// undefined - отсутствие какого-либо значения

// // перепишем нашу функцию так, чтобы она не выводила результат на экран, а возвращала его в переменную

function func(num) {
    return num * num;
}

let result = func(3);
let result2 = func(3) + 1;
console.log(result)
console.log(func(3))

// После того, как выполнится инструкция return - функция закончит свою работу и никакой код дальше не выполнится
//return можно писать и без значения, если мы не хотим чтобы она что-то вернула, но хотим, чтобы она завершила свою работу


    //!!!!!!!!!!!!ДЗ!!!!!!!!!!!!!!!!
//Изменить функцию, чтобы она возвращала индекс нужной нам карты
// function findCard(cards, getCard = 'Туз') {
//     console.log('Ищем даму в колоде...' + getCard);

//     let found = false;

//     for (let card of cards) {
//         console.log(`Из колоды вытянута карта ${card}`);
//         if (card == getCard) {
//             found = true;
//             break;
//         }
//     }

//     console.log(found ? 'Мы нашли' + getCard + '!' : 'В колоде нет дам :(');
// }

// let cards = ['2', 'Король', 'Туз', '5', 'Дама', '6', 'Король'];
// //ищем пятёрку в переданной колоде карт
// findCard(cards, '5')
//     //ищем туза в переданной колоде карт
// findCard(cards)