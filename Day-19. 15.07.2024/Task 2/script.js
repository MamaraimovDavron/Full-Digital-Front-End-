"use strict";

function makeAbba(string1, string2) {
  return string1 + string2 + string2 + string1;
}

console.log(makeAbba("Hi", "Bye"));
