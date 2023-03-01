"use strict";

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

alert(Object.values(salaries).reduce((sum, x) =>  sum + x , 0)); // 390

