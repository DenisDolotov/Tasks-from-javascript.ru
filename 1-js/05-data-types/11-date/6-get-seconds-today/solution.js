"use strict";

function getSecondsToday() {
  return Math.round((new Date() - new Date().setHours(0, 0, 0, 0)) / 1000);
}

alert(getSecondsToday());