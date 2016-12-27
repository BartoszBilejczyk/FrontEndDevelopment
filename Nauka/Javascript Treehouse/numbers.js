var HTMLbadges = prompt('How many HTML Badges do you have?');
var CSSbadges = prompt('How many CSS Badges do you have?')
var allBadges = parseInt(HTMLbadges) + parseInt(CSSbadges);
alert("You have " + allBadges + " badges.");

// parseInt("135px") -> 135

// parseInt("Badge no. 8") -> NaN

// parseFloat("-273.15") -> -273.15

// parseFloat("Absolute zero is -273") -> NaN
