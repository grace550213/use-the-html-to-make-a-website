jQuery(document).ready(function($) {
	$('.dropdown').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$(this).parent().siblings().find('.dropdown-open').slideUp();
		$(this).parent().siblings().find('.dropdown').removeClass('open');
        $(this).toggleClass('open');
	    $(this).siblings('.dropdown-open').slideToggle();
	});

	$('.go-top').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$('html, body').animate({
			scrollTop: 0
			},700); 
		
	});

	$(document).click(function(event){
         var _con = $('.dropdown');  
         if(!_con.is(event.target) && _con.has(event.target).length === 0){ 
             $('.dropdown').removeClass('open'); 
             $('.dropdown-open').slideUp(); 
         }
    });

});

 var swiper = new Swiper('.swiper-container', {
      loop: true,
      
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

 