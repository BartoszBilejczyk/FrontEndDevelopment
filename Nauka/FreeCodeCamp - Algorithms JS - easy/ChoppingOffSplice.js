
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  
  var chopped = arr.splice(howMany);
  
  return chopped;
}

slasher([1, 2, 3], 2);




EXAMPLES 


var myFish = ["parrot", "anemone", "blue", "trumpet", "surgeon"]
var removed = myFish.splice(myFish.length -3, 2);

// myFish is ["parrot", "anemone", "surgeon"] 
// removed is ["blue", "trumpet"]


var myFish = ["angel", "clown", "trumpet", "surgeon"];
var removed = myFish.splice(0, 2, "parrot", "anemone", "blue");

// myFish is ["parrot", "anemone", "blue", "trumpet", "surgeon"] 
// removed is ["angel", "clown"]