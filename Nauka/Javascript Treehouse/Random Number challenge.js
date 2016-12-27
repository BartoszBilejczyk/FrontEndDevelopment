function randomNumber(lower, upper) {
  if (isNaN(upper) || isNaN(lower)) {
    throw new Error('something'); 
  }
  return Math.round(Math.random() * (upper - lower)) + lower; 
}

console.log(randomNumber(1,50));
console.log(randomNumber(1,50));
console.log(randomNumber(6,"siema"));
console.log(randomNumber(8,90)); 

// konsola cmd alt C