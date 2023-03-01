"use strict";

function inArray(arr) {
  return x => arr.includes(x);
}

function inBetween(a, b) {
  return x => (a <= x && x <= b);
}