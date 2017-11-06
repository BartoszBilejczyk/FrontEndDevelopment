$(window).on('load', function(){

	$('.kurs-navigation-link').on('click',function () {

    var target = this.hash;
		console.log(target)
    $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 50
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
	});
});
