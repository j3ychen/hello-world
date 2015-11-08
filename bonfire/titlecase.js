function titleCase(str) {
  var arr = str.toLowerCase().split(" ");
  for (i=0;i<arr.length;i++) {
    arr[i] = arr[i].replace(arr[i].charAt(0),arr[i].charAt(0).toUpperCase());
  }
  str = arr.join(" ");
  return str;
}
