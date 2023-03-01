"use strict";

Function.prototype.defer = function (ms) {
  let savedFunc = this;
  return function (...args) {
    setTimeout(() => savedFunc.apply(this, args), ms);
  }
};


function f(a, b) {
  alert(a + b);
}

f.defer(1000)(1, 2);
