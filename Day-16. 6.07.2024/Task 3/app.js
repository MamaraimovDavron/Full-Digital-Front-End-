function showPrimes(number) {
  for (let i = 2; i <= number; i++) {
    if (isItPrime(i)) console.log(i);
  }

  function isItPrime(i) {
    for (let j = 2; j < i; j++) if (i % j === 0) return false;
    return true;
  }
}

showPrimes(10);
