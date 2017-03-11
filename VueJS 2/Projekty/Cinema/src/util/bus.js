// receives information from grandchild about what checkbox was clicked so I can process it to filter movies.
function checkFilter(category, title, checked) {
  // if checked, push the title to the array of proper category
  if (checked) {
    this[category].push(title);
  } else {
    let index = this[category].indexOf(title);
    if (index > -1) {// if it's not in the array, it will return -1 - in other words if it is in the array
      this[category].splice(index, 1);
    }
  }
}

function setDay(day) {
  this.day = day;
}

export { checkFilter };
