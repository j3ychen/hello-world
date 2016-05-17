function rot13(str) { // LBH QVQ VG!
  var myArr = str.split('');
  for (i=0;i<myArr.length;i++) {
    if (myArr[i].charCodeAt(0) >= 65 && myArr[i].charCodeAt(0) <=90) {
      if (myArr[i].charCodeAt(0)-13 >= 65) {
        myArr[i] = String.fromCharCode(myArr[i].charCodeAt(0)-13);
        } else {
          myArr[i] = String.fromCharCode(myArr[i].charCodeAt(0)+13);
        }
    } else {
      myArr[i] = myArr[i];
    }
  }
  str = myArr.join('');
  return str;
}
