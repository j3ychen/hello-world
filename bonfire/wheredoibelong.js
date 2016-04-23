function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.sort(function(a, b) {
    return a - b;
  });
  for (i=0;i<arr.length;i++) {
    if (num <= arr[i]) {
      return i;
    } else if (num > arr[arr.length-1]) {
      return arr.length;
    }
  }
}
