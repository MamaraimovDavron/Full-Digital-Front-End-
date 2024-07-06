function showStars(rows) {
  let star = "";
  for (let i = 1; i <= rows; i++) {
    for (let j = i; j >= 1; j--) {
      star += "*";
    }
    star += "\n";
  }

  console.log(star);
}

showStars(10);
