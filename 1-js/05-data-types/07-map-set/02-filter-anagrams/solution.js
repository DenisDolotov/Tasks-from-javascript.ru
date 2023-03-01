"use strict";

function aclean(arr) {
  let map = new Map();

  arr.forEach(word => {
    let sorted = word.toLowerCase().split("").sort().join("");
    map.set(sorted, word);
  });


  return Array.from(map.values());
}