
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  // define  a variable that is the end of the string with length of target
  
  var ending = str.substring(str.length - target.length);
  //check if target = end of a string
  if (target === ending) {
    return true
  }
  
  return false;
}

confirmEnding("Bastian", "n");

