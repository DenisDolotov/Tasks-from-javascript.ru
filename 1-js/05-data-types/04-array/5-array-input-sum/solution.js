"use strict";

function sumInput() {

  let numbers = [];

  while (true) {

    let value = prompt("Введите число", 0);

    // Прекращаем ввод?
    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  return numbers.reduce((acc, num) => acc + num, 0);
}

alert(sumInput());


