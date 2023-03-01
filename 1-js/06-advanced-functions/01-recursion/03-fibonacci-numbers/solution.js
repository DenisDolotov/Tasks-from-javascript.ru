"use strict";

// Binet’s Formula
function fib(n) {
  return Math.round((Math.pow((1 + Math.sqrt(5)) / 2, n) - Math.pow((1 - Math.sqrt(5)) / 2, n)) / Math.sqrt(5));
}

alert(fib(+prompt("Введите номер числа Фибонначи", "1")));