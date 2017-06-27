function findFactors(num) {
  var factors = [];
  var divisor = 2;
  while(num > 1) {
    while(num % divisor === 0) {
      factors.push(divisor);
      num /= divisor;
    }
    divisor++;
  }
  return factors;
}

console.log(findFactors(600851475143));
