
function palindrome(str) {
  
  // make the string without numbers, special characters and spacer , do lowercase
  
  str = str.toLowerCase().replace(/_|\s|\W|/g, "");
    
  // make an array from a string, then reverse it
  
  var reversed = str.split("").reverse().join("");
  
    // check if  reversed string is totally equal to the string provided


  if (reversed === str) {
    return true;
  } 
  
  return false;
  
  
  
  
  // Good luck!
}




palindrome("_eye__");

