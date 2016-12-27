
function truncateString(str, num) {
//   Clear out that junk in your trunk
  
  // create if statement, when num is bigger than 3
    if (num < str.length) {
  // take the string and slice it from 0 to num - 3 and add "..."
      if (num > 3) {
        str = str.slice(0, num-3) + "...";
  // if < 3 take the string and slice it from 0 to num and add
    } else {
      str = str.slice(0, num) + "...";
    }
    }
   return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);


