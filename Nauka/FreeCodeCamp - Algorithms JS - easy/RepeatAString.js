
function repeatStringNumTimes(str, num) {
  // repeat after me
  
  var repeatedStr = "";
  
  // create an if statement when num > 0 
  if (num > 0) {
    num = Math.ceil(num);
  // dodaj do str kolejne (n-1)
    for (var i = 1; i < num + 1; i++) {
      repeatedStr += str;
    }
  }
  // else return empty
  return repeatedStr;
}

repeatStringNumTimes("abc", 3);

