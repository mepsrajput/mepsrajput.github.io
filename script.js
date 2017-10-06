	$(document).ready(function () {

	$('.goTop').click(function () {
			$("html, body").animate({
				scrollTop: 0
			}, 1000);
			return false;
		});

	function scrollNav() {
		$('.nav a').click(function(){  
			//Animate
			$('html, body').stop().animate({
			scrollTop: $( $(this).attr('href') ).offset().top
			}, 800);
		return false;
	});
	$('.scrollTop a').scrollTop();
	}
	scrollNav();
	
	});