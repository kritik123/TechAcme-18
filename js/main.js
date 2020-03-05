$(document).ready(function(){$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event){if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){var target=$(this.hash);target=target.length?target:$('[name='+this.hash.slice(1)+']');if(target.length){event.preventDefault();$('html, body').animate({scrollTop:target.offset().top-85},1000,
function(){var $target=$(target);if($target.is(":focus")){return false;}else{$target.attr('tabindex','-1');};});}}});$(window).scroll(function(){if($(window).scrollTop()>=10){$('nav').addClass('shadow-header');}else{$('nav').removeClass('shadow-header');}});new WOW().init();$('.faq li .question').click(function(){$(this).find('.plus-minus-toggle').toggleClass('collapsed');$(this).parent().toggleClass('active');});
$(document).ready(function(){$(".navbar-default").css("background-color","#fff");});var scene=document.getElementById('scene');var parallaxInstance=new Parallax(scene);var boxes=$('.box');var questions=$('.question')
boxes.slideToggle();$(".question").click(function(){$("#box"+$(this).data('box')).slideToggle();$(this).toggleClass('open');for(ques of questions){if($(ques).data('box')!==$(this).data('box')&&$(ques).hasClass('open')){$(ques).toggleClass('open');$("#box"+$(ques).data('box')).slideToggle();}}});});$('.not-active').click(function(){return false;});




(function($) {
	"use strict"

	// Scrollspy
	$('body').scrollspy({
		target: '#nav',
		offset: $(window).height() / 2
	});

	// Mobile nav toggle
	$('.navbar-toggle').on('click',function() {
		$('.main-nav').toggleClass('open');
	});

	// Fixed nav
	$(window).on('scroll', function() {
		var wScroll = $(this).scrollTop();
		wScroll > 50 ? $('#header').addClass('fixed-navbar') : $('#header').removeClass('fixed-navbar');
	});

	// Smooth scroll
	$(".main-nav a[href^='#']").on('click', function(e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 800);
	});

	// Section title animation
	$('.section-title').each(function() {
		var $this = $(this);
		$this.find('.title > span').each(function(i) {
			var $span = $(this);
			var animated = new Waypoint({
				element: $this,
				handler: function()
				{
					setTimeout(function(){
						$span.addClass('appear')
					}, i*250);
					this.destroy();
				},
				offset: '95%'
			});
		});
	});

	// Galery Owl
	$('#galery-owl').owlCarousel({
		items:1,
		loop:true,
		margin:0,
		dots : false,
		nav: true,
		navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		autoplay : true,
		autoplaySpeed :500,
		navSpeed :500,
		responsive : {
	    0 : {
	       stagePadding : 0,
	    },
	    768 : {
	        stagePadding : 120,
	    }
		}
	});

	// Parallax Background
	$.stellar({
		responsive: true
	});

	// CountTo
	$('.counter').each(function() {
		var $this = $(this);
		var counter = new Waypoint({
			element: $this,
			handler: function()
			{
				$this.countTo();
			},
			offset: '95%'
		});
	});

})(jQuery);


