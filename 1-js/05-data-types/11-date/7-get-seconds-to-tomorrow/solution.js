"use strict";

function getSecondsToday() {
  return Math.round((new Date().setHours(24, 0, 0, 0) - new Date()) / 1000);
}

alert(getSecondsToday());