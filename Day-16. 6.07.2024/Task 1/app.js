function sum(limit) {
  let sum1 = 0;
  let sum2 = 0;
  let result;
  for (let i = 0; i <= limit; i++) {
    if (i % 3 && i % 5) {
      sum2 += i;
    }
    sum1 += i;
    result = sum1 - sum2;
  }
  console.log(sum1);
  console.log(sum2);
  console.log(result);
}

sum(12);
