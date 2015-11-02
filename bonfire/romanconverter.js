function convert(num) {
  var arrValue = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
  var arrRoman = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
  var numRoman = [];
  for (i=arrValue.length-1;i>=0;i--) {
    while (num >= arrValue[i]) {
      numRoman.push(arrRoman[i]);
      num = num - arrValue[i];
    }
  }
  return numRoman.join("");
}
