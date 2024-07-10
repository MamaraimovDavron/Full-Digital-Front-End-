// 1-variant
// function old35(n) {
//   if (n % 3 === 0 && n % 5 === 0) {
//     console.log(true);
//   } else if (n % 3 === 0 || n % 5 === 0) {
//     console.log(false);
//   } else {
//     console.log(false);
//   }
// }

// old35(11);

// 2-Variant

function old35(n) {
  if (n % 3 == 0 || n % 5 == 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

old35(10);
