// JavaScript Document
$(document).ready(function(){
	$(".voc_bg").fadeIn(800);
	$(".voc_text").fadeIn(600);
	$('.tlt').textillate({

		
		  // enable looping
		  loop: false,
		
		  // sets the minimum display time for each text before it is replaced
		  minDisplayTime: 2000,
		
		  // sets the initial delay before starting the animation
		  // (note that depending on the in effect you may need to manually apply 
		  // visibility: hidden to the element before running this plugin)
		  initialDelay: 50,
		
		  // set whether or not to automatically start animating
		  autoStart: true,
		
		  // custom set of 'in' effects. This effects whether or not the 
		  // character is shown/hidden before or after an animation  
		  inEffects: [],
		
		  // custom set of 'out' effects
		  outEffects: [ 'hinge' ],
		
		  // in animation settings
		  in: {
			// set the effect name
			effect: 'flipInX',
		
			// set the delay factor applied to each consecutive character
			delayScale: 0.2,
		
			// set the delay between each character
			delay: 150,
		
			// set to true to animate all the characters at the same time
			sync: false,
		
			// randomize the character sequence 
			// (note that shuffle doesn't make sense with sync = true)
			shuffle: false,
		
			// reverse the character sequence 
			// (note that reverse doesn't make sense with sync = true)
			reverse: false,
		
			// callback that executes once the animation has finished
			callback: function () {}
		  },
		
		  // out animation settings.
		  out: {
			effect: 'hinge',
			delayScale: 1.5,
			delay: 50,
			sync: false,
			shuffle: false,
			reverse: false,
			callback: function () {}
		  },
		
		  // callback that executes once textillate has finished 
		  callback: function () {},
		
		  // set the type of token to animate (available types: 'char' and 'word')
		  type: 'char'
});
	
	$(".catalina-iconcontents").click(function(){
		$(".voc_contentswrapper").fadeIn(300);	
	});
	
	$(".close").click(function(){
		$(".voc_contentswrapper").fadeOut(300);	
	});
});