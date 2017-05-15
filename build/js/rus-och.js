$(function(){

	$('.news-slider-big').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.news-slider-small'
	});
	$('.news-slider-small').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		asNavFor: '.news-slider-big',
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	
	$.fn.showMenu2level = function() {
		$('.menu-2level').hide();
		$('.sub-menu').removeClass('open');
		$(this).next('.menu-2level').addClass('display-flex');
		$(this).parent().addClass('open');
	}
	$.fn.hideMenu2level = function() {
		$(this).next('.menu-2level').hide();
		$(this).parent().removeClass('open');
	}
	$('.js-sub-menu-2level a.active').on('click', function(e) {
		e.preventDefault();
		if ( $(this).parent().hasClass('open') ) {
			$(this).hideMenu2level();
		} else {
			$(this).showMenu2level();
		}
	});

	$.fn.showMenu3level = function() {
		$('.menu-3level').hide();
		$('.sub-menu').removeClass('open-3level');
		$(this).next('.menu-3level').addClass('display-flex');
		$(this).parent().addClass('open-3level');
	}
	$.fn.hideMenu3level = function() {
		$(this).next('.menu-3level').hide();
		$(this).parent().removeClass('open-3level');
	}
	$('.js-sub-menu-3level a').on('click', function(e) {
		e.preventDefault();
		if ( $(this).parent().hasClass('open-3level') ) {
			$(this).hideMenu3level();
		} else {
			$(this).showMenu3level();
		}
	});

	$('.js-comments-btn').on('click', function() {
		$(this).hide();
		$('.js-comments').show();
	});
	
	$('.js-mistake-btn a').on('click', function(e){
		e.preventDefault();
	});
	$('.js-mistake-btn').on('click', function() {
		$('.js-mistake').show();
	});
	
	$('.js-search-btn').on('click', function() {
		$('.js-search').fadeIn();
	});
	
	$('.menu-close').on('click', function() {
		$('.menu').fadeOut();
	});

	$('.js-menu').on('click', function() {
		$('.menu').fadeIn();
	});

});

$(document).on('click', function(e) {
	if (!$(e.target).closest(".js-search-btn").length) {
		$('.js-search').fadeOut();
	}
	e.stopPropagation();
});
	



VK.Widgets.Group("vk_groups", {mode: 3, width: "290"}, 60271187);

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.8";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

