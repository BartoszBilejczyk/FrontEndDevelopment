

$(document).ready( function() {
  $('.button-collapse').sideNav();
  $('select').material_select();
  $('.dropdown-button').dropdown({
      inDuration: 100,
      outDuration: 200,
      hover: true, // Activate on hover
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'right', // Displays dropdown with edge aligned to the left of button
      draggable: true
  });

  $('.filtroodmulniki').click(function() {
    activatePill('filtroodmulniki');
    alert('works')
  });

  function activatePill(pill) {
  $('nav-pills a[href="#' + tab + '"]').tab('show')
}
})
