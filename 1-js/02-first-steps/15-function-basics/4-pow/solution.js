"use strict";

let x = prompt("x?", '');
let n;

do {
  n = +prompt("n?", 2);
} while (isNaN(n) || n <= 1 || n % 1 != 0);

alert( pow(x, n) );

function pow(x, n) {
  return x**n;
}