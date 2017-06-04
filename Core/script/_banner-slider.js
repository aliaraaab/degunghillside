(function($){

	$('.hero-banner').slick({
		dots: true,
		arrows: false,
		// infinite: false,
		speed: 300,
		// adaptiveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		// prevArrow: "<span class='fa fa-angle-left arrow-prev'></span>",
		// nextArrow: "<span class='fa fa-angle-right arrow-next'></span>",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					// prevArrow: "<span class='fa fa-angle-left arrow-prev'></span>",
					// nextArrow: "<span class='fa fa-angle-right arrow-next'></span>",
					dots: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					// prevArrow: "<span class='fa fa-angle-left arrow-prev'></span>",
					// nextArrow: "<span class='fa fa-angle-right arrow-next'></span>",
					dots: true
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					// prevArrow: "<span class='fa fa-angle-left arrow-prev'></span>",
					// nextArrow: "<span class='fa fa-angle-right arrow-next'></span>",
					dots: true
				}
			}
		]
	});

})(jQuery);