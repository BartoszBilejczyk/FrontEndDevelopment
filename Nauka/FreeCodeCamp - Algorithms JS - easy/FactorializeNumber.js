var factorialize = function(n) {
  // take a number. Then multiply
  var factorial = 1;
  
  if (n === 0) {
    factorial = 1;
  }
  
  for (var i = 1; i < n+1; i++) {
    factorial *= i;
  }
  
  return factorial;
};


factorialize(4);





