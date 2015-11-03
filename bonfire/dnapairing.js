function pair(str) {
  var arrayPair = [["C","G"],["G","C"],["A","T"],["T","A"]];
  var arrayChar = ["C","G","A","T"];
  var arrayStr = [];
  str.split("");
  for (i=0;i<str.length;i++) {
    for (j=0;j<4;j++) {
      if (str[i]==arrayChar[j]) {
        arrayStr.push(arrayPair[j]);
      }
    }
  }
 return arrayStr;
}
