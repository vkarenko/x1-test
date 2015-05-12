$(function(){
	$('.mSlider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 3000,
		fade: true,
		cssEase: 'linear'
	});

	$('.h-nav-icon').click(function (){
		$(this).next().toggle();
	})

	function GetIEVersion() {
		var sAgent = window.navigator.userAgent;
		var Idx = sAgent.indexOf("MSIE");

		// If IE, return version number.
		if (Idx > 0) 
			return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));

		// If IE 11 then look for Updated user agent string.
		else if (!!navigator.userAgent.match(/Trident\/7\./)) 
			return 11;

		else
			return 0; //It is not IE
	}

	if (GetIEVersion() > 0) 
	$('body').addClass('IE'+GetIEVersion());
});