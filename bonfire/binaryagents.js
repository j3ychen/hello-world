// takes a binary string and returns an English sentence
function binaryAgent(str) {
  var binaryMap = [128,64,32,16,8,4,2,1];
  var myArr = str.split(" ");
  var newArr = [];
  for (i=0; i<myArr.length; i++) {
    var myArr1 = myArr[i].split("");
    var sum = 0;
    for (j=0; j<binaryMap.length; j++) {
      if (myArr1[j]=="1") {
        sum += binaryMap[j];
      }
    }
    newArr.push(sum);
  }
  var newArr1 = [];
  for (k=0; k<newArr.length; k++) {
    newArr1.push(String.fromCharCode(newArr[k]));
  }
  str = newArr1.join("");
  return str;
  
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
