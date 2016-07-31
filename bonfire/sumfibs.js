// sums only odd fib numbers less than or equal to given num
function sumFibs(num) {
  var fibArr = [1];
  var fib1 = 1;
  var fib2 = 1;
  while (num >= fib1) {
    fibArr.push(fib1);
    var temp = fib1;
    fib1 = fib1 + fib2;
    fib2 = temp;
  }
  var sum = 0;
  for (i=0;i<fibArr.length;i++) {
    if (fibArr[i]%2!==0) {
      sum += fibArr[i];
    }
  }
  return sum;
}

sumFibs(20);
