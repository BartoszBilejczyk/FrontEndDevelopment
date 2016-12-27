//BlackJack 


var count = 0;

function cc(card) {
  // Only change code below this line
  if (card == 2 || card == 3 || card == 4 || card == 5 || card == 6) {
    count++;
  } else if (card == 10 || card === "J" || card === "Q" || card === "K" || card === "A") {
    count--;
  }
  
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  return "Change Me";
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');




// Setup - tabular object. The objective is to write the key and get the value

//Define function and empty string
function phoneticLookup(val) {
  var result = "";
  
// Create tabular data (object)
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };

// Pass the value of a given key to result.
  result = lookup[val];
  return result;
}

// Change this value to test
phoneticLookup("charlie");  // will give phoneticLookup(lookup["charlie"])





// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp)) {
      return myObj[checkProp];
  } else {
  return "Not Found";
  }
}

// Test your code by modifying these values
checkObj("gift"); // checkObj(myObj.hasOwnPropery("gift"))



JavaScript Object Notation or JSON !!!!!!
    
    
    
    
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [ 
      "CS", 
      "8T", 
      "LP" ],
    "gold": true
  },
  // Add record here
  
  {
    "artist": "Hey",
    "title": "A Ty?",
    "release_year": 2005,
    "formats": [
      "CD",
      "DVD"
    ]
  }
];

console.log(myMusic[0].formats[2]) // 'LP'
console.log(5);




// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

// Only change code below this line

var gloveBoxContents = myStorage.car.inside["glove box"]; // "maps"



  
// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  
  if (prop !== "tracks" && value !== "") {
    collection[id][prop] = value; 
  } else if(collection[id].hasOwnProperty("tracks") === false) {
    collection[id][prop] = [];
    collection[id][prop].push(value);
  } else if ( prop === "tracks" && value !== "" ) {
    collection[id][prop].push(value);
  } else if (value === "") {
    delete collection[id][prop];
  }
  return collection;
}

// Alter values below to test your code
updateRecords(5439, "tracks", "Take");


2 metoda


// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
    if (value !== "") {
        if (prop !== "tracks") {
            collection[id][prop] = value;
        } else {
              if (!collection[id].hasOwnProperty("tracks")) {
                  collection[id][prop] = [];
                  collection[id][prop].push(value);
            } else {
                  collection[id][prop].push(value);
            }
        }  
    } else {
          delete collection[id][prop];
    }

  return collection;
}

// Alter values below to test your code
updateRecords(5439, "tracks", "Take");




    
FOR LOOPS



// Example
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line

var total = 0;

for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}




NESTING LOOPS


var arr = [
  [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length ; j++) { // tutaj arr[i] bo jeśli mamy 3 elementy ale każdy z nim ma w środku 10, to musi co 10 zmieniać się na kolejny element arraya.
    console.log(arr[i][j]);
  }
}

// How it works: i=0 i j=0, wypuszcza do konsoli "1", i=0, j=1, wypuszcza do konsoli "2", i=1, j=0 wypuszcza do konsoli "3";







