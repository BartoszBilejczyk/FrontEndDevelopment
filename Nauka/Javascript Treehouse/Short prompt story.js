var name = prompt("What's your name?");
var place = prompt("Where do you like to spend most of your time?");
var timeOfShower = prompt("When do you usually take a shower?");
var breakfast = prompt("How many brotchens do you eat XD?");
alert("Ok, i got all I need. Let's check your story.");
var story = "<h2>Once upon a time, " + name + " ate " + breakfast + " at " + place + " and then " + name + " took a shower in the " + timeOfShower + "</h2>";
document.write(story);