function getPrimes(num) {
    for (let i = 2; i <= num; i += 1) {
      // eslint-disable-next-line no-use-before-define
      if (primes(i)) {
        console.log(i);
      }
    }
  }
  function primes(num) {
    for (let j = 2; j < num; j += 1) {
      if (num % j === 0 && num > 1) {
        return false;
      }
    }
  
    return num;
  }