"use strict";

function copySorted(arr) {
  return [...arr].sort();
}

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);

alert(sorted);
alert(arr);
