"use strict";

function right2(name) {
  let lastWords;
  let firstWords;

  if (name.length == 2) return name;
  else {
    lastWords = name.substring(name.length - 2, name.length);
    firstWords = name.substring(0, name.length - 2);
    return lastWords + firstWords;

    // return name.slice(1, 2);
  }
}

console.log(right2("o"));
