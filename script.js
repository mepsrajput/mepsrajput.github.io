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
	
	$("#projectDesc1").click(function(e){
		e.preventDefault();
        $("#testabc1").slideToggle(1000);
	});
	
	$("#projectDesc2").click(function(){
        $("#testabc2").slideToggle(1000);
	});
	
	$("#projectDesc3").click(function(){
        $("#testabc3").slideToggle(1000);
	});
	$("#projectDesc4").click(function(){
        $("#testabc4").slideToggle(1000);
	});
	$("#projectDesc5").click(function(){
        $("#testabc5").slideToggle(1000);
	});
	$("#projectDesc6").click(function(){
        $("#testabc6").slideToggle(1000);
	});

    $(document).click(function (event) {
    var clickover = $(event.target);
    var $navbar = $(".navbar-collapse");               
    var _opened = $navbar.hasClass("in");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
        $navbar.collapse('hide');
    }
	});	 

});