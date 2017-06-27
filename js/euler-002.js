var sequence = [1, 2];
var sum = 0;
while(sequence[sequence.length - 1] < 4000000) {
  sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
}
sequence.forEach(function(num) {
  if(num % 2 === 0) {
    sum += num;
  }
});
console.log(sum);
