


function destroyer(arr) {
  // Remove all the values
      var args = arguments;
  // Dla każdego kolejnego argumentu
  for(var i = 1; i < args.length; i++) {
  // wyfiltruj z pierwszego argumentu argument i
      arr = arr.filter(function(n) {
         return n != args[i];
      });
  }
  
  return arr
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

