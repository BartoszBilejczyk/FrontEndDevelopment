
var Car = function(wheels, seats, engines) {
  //Change this constructor
  this.wheels = wheels;
  this.seats = seats;
  this.engines = engines;
};

//Try it out here
var myCar = new Car(5,5,5);


// ..................................


var Car = function() {
  // this is a private variable
  var speed = 10;

  // these are public methods
  this.accelerate = function(change) {
    speed += change;
  };

  this.decelerate = function() {
    speed -= 5;
  };

  this.getSpeed = function() {
    return speed;
  };
};

var Bike = function() {

  // Only change code below this line.
  
  var gear = 2;
  
  this.getGear = function() {
    return gear;
  };
  
  this.setGear = function(changeGear) {
    gear = changeGear;
  };

};

var myCar = new Car();

var myBike = new Bike();



//


var oldArray = [1,2,3,4,5];

// Only change code below this line.

var newArray = oldArray.map(function(dadada) {
  return dadada + 3;
});




var array = [4,5,6,7,8];
var singleVal = 0;

// Only change code below this line.

singleVal = array.reduce(function(prevVal, curVal) {
  return prevVal + curVal;
}, 0);  // outputs 30




var oldArray = [1,2,3,4,5,6,7,8,9,10];

// Only change code below this line.

var newArray = oldArray.filter(function(val) {
  return val < 6;
});
// returns [1,2,3,4,5]



FROM SMALLEST TO LARGEST 


var array = [1, 12, 21, 2];

// Only change code below this line.

array.sort(function(a,b) {
  return a - b; // will give a negative number (here 1-12)
});



FROM LARGEST TO SMALLEST


var array = [1, 12, 21, 2];

// Only change code below this line.

array.sort(function(a,b) {
  return b - a; // here 12-1 
});


reverse();
concat();




var joinMe = ["Split","me","into","an","array"];
var joinedString = ' siemano ';

// Only change code below this line.

joinedString = joinMe.join(joinedString); // Split siemano me siemano into siemano an siemano array








