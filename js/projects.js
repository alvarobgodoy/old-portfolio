var swiper = new Swiper('.swiper-container', {
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev'
	},
	slidesPerView: 1,
	spaceBetween: 10,
	// init: false,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},

  
	breakpoints: {
	  640: {
		slidesPerView: 2,
		spaceBetween: 10,
	  },
	//   680: {
	// 	slidesPerView: 3,
	// 	spaceBetween: 10,
	//   },
	  920: {
		slidesPerView: 3,
		spaceBetween: 10,
	  },
	  1240: {
		slidesPerView: 3,
		spaceBetween: 10,
	  },
	} 
    });