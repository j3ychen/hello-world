function sym(args) {
  // remove duplicates within each array
  var myArr = [];
  for (i=0; i<arguments.length; i++) {
    arguments[i] = arguments[i].filter(function(elem, index, self) {
      return index == self.indexOf(elem);
    });
  }

  myArr = arguments[0];
  function filter(a, b) {
    for (i=0; i<b.length; i++) {
      var counter = 0;
      for (j=0; j<a.length; j++) {
        if (b[i]==a[j]) {
          counter++;
        }
      }
      if (counter===0) {
        a.push(b[i]);
      } else {
        a.splice(a.indexOf(b[i]), 1);
      }
    }
  }
  for (k=1; k<arguments.length; k++) {
    filter(myArr, arguments[k]);
  }
  return myArr;
}
