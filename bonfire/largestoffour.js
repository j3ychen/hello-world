function largestOfFour(arr) {
  var newArr = [];
  for (j=0;j<arr.length;j++) {
    newArr[j] = arr[j][0];
    for (i=0;i<arr[j].length;i++) {
      if (newArr[j]<arr[j][i]) {
        newArr[j] = arr[j][i];
      }
    }
  }
  return newArr;
}
