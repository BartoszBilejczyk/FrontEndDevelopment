
function reverseString(str) {
  // split the string into letters (gotta split them with "" because it is only one word)
  var splitted = str.split("");
  var reversedSplitted = splitted.reverse();
  str = reversedSplitted.join("");
  return str;
}

reverseString("siema siema siema"); //  ameis ameis ameis

