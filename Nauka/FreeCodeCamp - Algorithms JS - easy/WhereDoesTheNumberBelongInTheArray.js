
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  
  // Sort the array
  var sorted = arr.sort(function(a,b) {
    return a-b;
  });
 
  var index = arr.indexOf(); // 1
  var lastElement = arr[arr.length - 1]; // np [1,2,3] = 3
  
  for(var i = 0; i < arr.length; i++) {
    if (num > arr[i]) {
      i = i;
    } else {
      return arr.indexOf(arr[i]);
    }
  }
  
  
  if (num > lastElement) {
    return arr.indexOf(lastElement) + 1; 
  }
}

getIndexToIns([1,2,3,17], 18);

