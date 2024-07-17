"use strict";

function includes(array, searchElement) {
  if (array.indexOf(searchElement) > 0) return true;
  else return false;
}

let fruits = ["kivi", "apple", "pink"];
let searchElement = "pink";
console.log(includes(fruits, searchElement));
