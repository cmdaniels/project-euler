function sumOfSquares(num) {
  var sum = 0;
  for (var i = 1; i <= num; i++) {
    sum += i * i;
  }
  return sum;
}

function squareOfSum(num) {
  var sum = 0;
  for (var i = 1; i <= num; i++) {
    sum += i;
  }
  return sum * sum;
}

console.log(squareOfSum(100) - sumOfSquares(100));
