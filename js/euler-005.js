function checkMultiples(num) {
  for(var i = 1; i <= 20; i++) {
    if(num % i !== 0) {
      return false;
    }
  }
  return true;
}

function smallestMultiple() {
  var currentGuess = 20;
  while(!checkMultiples(currentGuess)) {
    currentGuess += 20;
  }
  return currentGuess;
}

console.log(smallestMultiple());
