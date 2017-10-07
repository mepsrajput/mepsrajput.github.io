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
	
	$("#projectDesc1").click(function(){
        $("#testabc1").fadeToggle();
		});
	
	$("#projectDesc2").click(function(){
        $(".testabc2").fadeToggle("2000");
	});
	
	$("#projectDesc3").click(function(){
        $(".testabc3").fadeToggle("2000");
	});
	$("#projectDesc4").click(function(){
        $(".testabc4").fadeToggle("2000");
	});
	$("#projectDesc5").click(function(){
        $(".testabc5").fadeToggle("2000");
	});
	$("#projectDesc6").click(function(){
        $(".testabc6").fadeToggle("2000");
	});
	

});