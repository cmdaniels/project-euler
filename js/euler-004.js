function isPalindrome(num) {
  return num.toString().split('').reverse().join('') === num.toString();
}

function palindromeProduct() {
  var max = 100001;
  for(var i = 999; i >= 100; i--) {
    if(max >= i*999) {
      break;
    } else {
      for(var j = 999; j >= i; j--) {
        var p = i * j;
        if(max < p && isPalindrome(p)) {
          max = p;
        }
      }
    }
  }
  return max;
}

console.log(palindromeProduct());
