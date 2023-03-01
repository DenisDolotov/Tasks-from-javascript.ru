"use strict";

let sum = (a) => { return (b) =>  a + b };

alert(sum(1)(2)); // 3
alert(sum(5)(-1)); // 4
