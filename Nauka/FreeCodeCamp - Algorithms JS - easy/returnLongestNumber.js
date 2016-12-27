
function findLongestWord(str) {
  // split all the words by spaces
  
  str = str.split(" ");
  
  // make every word to length
  
  str = str.map(function(word) {
    return word.length;
  });
  
  sorted = str.sort(function(a,b) {
    return b - a;
  });
  
  // sort and get the biggest number
  
  
  return sorted[0];
}

findLongestWord("The quick brown fox jumped over the lazy dog");

