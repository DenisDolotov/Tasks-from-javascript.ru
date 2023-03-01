"use strict";

let n;

do {
  n = +prompt("Введите положительное целое число > 2", 5);
} while (isNaN(n) || n <= 2 || n % 1 != 0);

nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i...

  for (let j = 2; j < (i > 2 ? Math.ceil(Math.sqrt(i)) + 1 : 2); j++) { // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  alert(i); // простое число
}
