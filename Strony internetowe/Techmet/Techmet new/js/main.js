$(document).ready( function() {
  $('.button-collapse').sideNav();

  $('.dropdown-button').dropdown({
      inDuration: 100,
      outDuration: 200,
      hover: true, // Activate on hover
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'right', // Displays dropdown with edge aligned to the left of button
      draggable: true
  });
})
