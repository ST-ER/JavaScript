// Кароче, for...in
// for...in позволяет пройти в цикле по перечисляемым свойствам объекта, в том числе по свойствам из прототипа.
// Для массивов же он пробегается по ИНДЕКСАМ каждого элемента
// но у разработчиков есть договоренность его не использовать для массивов

let arrayOfNumber = [1, 2, 3, 4, 5, "six", "seven"];
for (const i in arrayOfNumber) {
  console.log("i = ", i);
  console.log("i is:", arrayOfNumber[i]);
}

const cat = {
  name: "Борис",
  color: "red",
  age: 8,
};

for (const key in cat) {
  console.log(`${key} – ${cat[key]}`);
}

// for...of - к слову о нем даже не рассказывают ибо он очень медленный и не рекомендую использовать
// он также проходится по индексам в массиве, но берет уже значение этого элемента

for (const i of arrayOfNumber) {
  console.log("i = ", i);
}

// for (const key of cat) {
//   console.log(`${key}`);
// }
// ОШИБКА потому что он не работает с объектами, почему? потому что он фигня)

// И вообще вместо него есть:
for (let index = 0; index < arrayOfNumber.length; index++) {
  const element = arrayOfNumber[index];
  console.log(element);
}
// только такая запись будет в раза 3 оптимизированной