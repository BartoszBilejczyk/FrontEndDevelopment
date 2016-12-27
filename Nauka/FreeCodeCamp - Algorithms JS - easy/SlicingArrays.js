
function chunkArrayInGroups(arr, size) {
  // Break it up.
  
  var finalArr = [];
  
  for (var i = 0; i < arr.length; i += size) {
     var slicedArrs = arr.slice(i, i+size)
     finalArr.push(slicedArrs);
  }
  
  return finalArr;
}

chunkArrayInGroups([0,1,2,3,4,5,6], 2);



