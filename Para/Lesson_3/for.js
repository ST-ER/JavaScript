/**
 * Кратко
 * Управляющая конструкция, которая создаёт цикл.
 *
 *
 * Где-то видели уже, да?
 */

// Как пишется
for (инициализация; условие; завершающаяОперация) {
    // тело цикла
  }
  
  /**
   * Инициализация — в этой части задаётся начальное значение счётчика цикла.
   * Условие — тут задаётся условие по которому выполняется цикл.
   ** Если условие ложно, работа цикла прекращается и тело цикла не выполняется.
   * Завершающая операция — в этой части задаётся выражение, которое будет исполнено после выполнения тела цикла.
   ** Обычно здесь содержится выражение изменения счётчика.
   * Тело цикла — это блок операций, которые будут выполнены в случае если условие истинно.
   */
  
  for (const i = 0; i < 5; i++) {
    console.log("Счётчик равен: " + i);
  }
  // Почему ошибка?
  
  // Объясняем
  for (let i = 0; i < 5; i++) {
    console.log("Счётчик равен: " + i);
  }
  // Что произойдёт при запуске этого кода?
  /**
   * 1. Один раз выполнится инициализация.
   * 2. Потом создастся переменная i и ей присвоится значение 0, let i = 0.
   * 3. Идёт проверка условия i < 5.
   * 4. Если условие истинно, выполняется тело цикла
   * 5. После выполнения тела цикла идёт завершающая операция
   * 6. Последующие шаги повторения цикла уже не включают в себя инициализацию.
   * 7. После получения ложного условия завершающая операция НЕ ВЫПОЛНЯЕТСЯ
   */
  
  // Операторы break и continue
  
  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      console.log("break");
      break;
    }
    console.log(i);
  }
  
  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      console.log("continue");
      continue;
    }
    console.log(i);
  }
  
  // Есть еще метки
  outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let input = prompt(`Значение на координатах (${i},${j})`, "");
  
      // если пустая строка или Отмена, то выйти из обоих циклов
      if (!input) break outer; // (*)
  
      // сделать что-нибудь со значениями...
    }
  }
  
  alert("Готово!");