
$(document).ready(function() {
  $('.scrollspy').scrollSpy();
  $('.button-collapse').sideNav();
  $('ul.tabs').tabs();

});

var options = [
  {
    selector: '.from-zero-wrapper',
    offset: 250,
    callback:
      function() {

        for(var i = 1; i < 6; i++ ) {
          $('.img-from-zero-' + i).delay((i-1)*200).fadeTo(1000,1);
        }

      }
  },
  {
    selector: "#usp",
    offset: 150,
    callback: function() {
      $(".usp-el").animate({
        opacity: '1',
        top: 0,
        }, 1000, 'easeOutElastic')
    }
  },

];


Materialize.scrollFire(options);
