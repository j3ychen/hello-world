function translate(str) {
  var arrStr = str.split("");
  if (arrStr[0]=="a"||arrStr[0]=="e"||arrStr[0]=="i"||arrStr[0]=="o"||arrStr[0]=="u") {
    arrStr.push("way");
    str = arrStr.join("");
  } else {
    if (arrStr[1]!="a"&&arrStr[1]!="e"&&arrStr[1]!="i"&&arrStr[1]!="o"&&arrStr[1]!="u") {
      arrStr.push(arrStr[0] + arrStr[1] + "ay"); 
      arrStr.shift();
      arrStr.shift();
      str = arrStr.join("");
    } else {
      arrStr.push(arrStr[0] + "ay"); 
      arrStr.shift();
      str = arrStr.join("");
    }
  }
  return str;
}
