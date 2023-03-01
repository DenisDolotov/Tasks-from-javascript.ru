"use strict";

const a = +prompt('первое число', 0);
const b = +prompt('второе число', 0);

alert(`Наименшее число это ${min(a, b)}`);

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
