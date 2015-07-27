$(document).ready(function(){
	
	$(document).on('click', ".hamburger-on", function() {
		$(".floating-menu").fadeOut(200);
		$(".hamburger").addClass("hamburger-off");
		$(".hamburger").removeClass("hamburger-on");
	});
	
	$(document).on('mouseover', "section", function(){
		$(".floating-menu").fadeOut(200);
		$(".hamburger").addClass("hamburger-off");
		$(".hamburger").removeClass("hamburger-on");	
	});
	
	$(document).on('click', ".hamburger-off", function() {
		$(".floating-menu").fadeIn(200);
		$(".hamburger").addClass("hamburger-on");
		$(".hamburger").removeClass("hamburger-off");
	});

});