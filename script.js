$(document).ready(function () {
	
	//initialize wow.js
	new WOW().init();
	
	$(window).scroll(function() {
	  if ($(document).scrollTop() > 50) {
		$('nav').addClass('shrink');
	  } else {
		$('nav').removeClass('shrink');
	  }
	});	
	
	//navbar smooth scroll
	function scrollNav() {
		$('.nav a').click(function(){  
			$('html, body').stop().animate({
			scrollTop: $( $(this).attr('href') ).offset().top
			}, 800);
		return false;
		});
		$('.scrollTop a').scrollTop();
	}
	scrollNav();
	
	//collapse navbar on click anywhere on body while it's opened 
    $(document).click(function (event) {
		var clickover = $(event.target);
		var navbar = $(".navbar-collapse");               
		var opened = navbar.hasClass("in");
		if (opened === true && !clickover.hasClass("navbar-toggle")) {      
			navbar.collapse('hide');
		}
	});	
	
	// ===== Scroll to Top ==== 
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
			$('.goTop').fadeIn(200);    // Fade in the arrow
		} else {
			$('.goTop').fadeOut(200);   // Else fade out the arrow
		}
	});
	
	//scroll to top
	$('.goTop').click(function () {
			$("html, body").animate({
				scrollTop: 0
			}, 1000);
			return false;
	});
		
	//projects overlay animations
	$("#projectDesc1").click(function(e){
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
	
	//filling heart animations
	function fillHeart() {
		let heart = document.getElementById('heart');
		heart.innerHTML = "&#xf08a;";
		
		setTimeout(function(){
			heart.innerHTML = "&#xf004;";
		}, 1000);
	}
	
	fillHeart();
	
	setInterval(fillHeart, 2000);	

});