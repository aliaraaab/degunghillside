(function($){

	$('.gallery .gallery-slide').slick({
		dots: false,
		arrows: false,
		autoplay: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		cssEase: 'linear',
		infinite: true,
		speed: 500,
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