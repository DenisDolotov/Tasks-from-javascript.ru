"use strict";

function delay(f, ms) {

  let func = function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };

  return func;

};