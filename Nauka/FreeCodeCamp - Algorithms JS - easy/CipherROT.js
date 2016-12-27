'ABC'.charCodeAt(0); // returns 65
function rot13(str) { // LBH QVQ VG!
  str = str.split("");
  
  for(var i = 0; i < str.length; i ++) {
    // if the letter is a letter
     if (str[i].match(/[A-Z]/i)) {
       
       //create the letter number so that it's easier
        var letterNum = str[i].charCodeAt();
        // check next what is the number of the letter with if else and replace it
                           
        if (letterNum >= 78) {
          str[i] = String.fromCharCode(letterNum - 13);
        } else {
          str[i] = String.fromCharCode(letterNum + 13);
        }
     }
    
       // else leave unchanged
  }
  
  str = str.join("");
  return str; // returns 65 for A, returns 90 for Z;

}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

