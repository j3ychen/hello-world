function spinalCase(str) {
  str = str.split(/(?=[A-Z])/);
  str = str.join(' ');
  str = str.replace(/([-_ ])/g,'-');
  str = str.replace(/--/g,'-');
  return str.toLowerCase();
}
