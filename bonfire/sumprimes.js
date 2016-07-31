function sumPrimes(num) {
  var primeArr = [2];
  for (i=3; i<=num; i++) {
    var check = 1;
    for (j=2; j<i; j++) {
      if (i%j===0) {
        check = 0;
      }
    }
    if (check == 1) {
      primeArr.push(i);
    }
  }
  var sum = 0;
  for (k=0; k<primeArr.length; k++) {
    sum += primeArr[k];
  }
  return sum;
}
