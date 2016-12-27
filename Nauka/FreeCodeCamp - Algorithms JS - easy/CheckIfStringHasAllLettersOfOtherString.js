
function mutation(arr) {
  
  for(var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase();
  }
  
  var sum = 0;
  
    for (var k= 0; k < arr[1].length; k++) {
      if (arr[0].indexOf(arr[1][k]) !== -1 ) {
        sum += 1;
      }
    }
  
    if (sum < arr[1].length) {
      return false;
    } 
      return true;
}

mutation(["hello", "hey"]);

