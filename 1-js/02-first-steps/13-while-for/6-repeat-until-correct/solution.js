"use strict";

let num;

do {
  num = +prompt("Введите число больше 100?", 0);
} while (isNaN(num) || num <= 100);

