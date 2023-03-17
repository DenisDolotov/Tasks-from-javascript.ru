"use strict";

function delay(ms) {
  return new Promise(f => setTimeout(f, ms));
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));