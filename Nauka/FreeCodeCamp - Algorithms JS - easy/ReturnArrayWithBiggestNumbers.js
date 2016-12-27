var arrWithBig = [];


function largestOfFour(arr) {
  
  // for every subarray
  
  for(var i = 0; i < arr.length; i++) {
    //sort the items descending 
    arr[i] = arr[i].sort( function (a, b) {
      return b - a;
    });
    
     //create an array with the first from every subarray
    arrWithBig[i] = arr[i][0];
  }
  
return arrWithBig;


  // You can do this!
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);







2 OPCJA




function largestOfFour(arr) {
  
  // for every subarray
  
  for(var i = 0; i < arr.length; i++) {
    //sort the items descending 
    arr[i] = arr[i].sort( function (a, b) {
      return b - a;
    });
    
     //create an array with the first from every subarray
    arr[i] = arr[i][0];
  }
  
return arr;


  // You can do this!
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

