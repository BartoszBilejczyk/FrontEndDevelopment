

function bouncer(arr) {
    arr = arr.filter(Boolean)
    return arr;
}

bouncer([false, null, 0, NaN, undefined, ""]);




function destroyer(arr) {
  // Remove all the values
  
  // Dla każdego kolejnego argumentu
    for (var i = 1; i < arguments.length; i++) {
  // wyfiltruj z pierwszego argumentu argument i
      arr = arr.filter(function(n) {
         return n != arguments[i];
      });
    }
  
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

