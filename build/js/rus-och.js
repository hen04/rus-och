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
				breakpoint: 768,
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
	
	$('.js-comments-btn').on('click', function() {
		$(this).hide();
		$('.js-comments').show();
	});
	
	$('.js-mistake-btn').on('click', function() {
		$('.js-mistake').show();
	});
	
	$('.js-search-btn').on('click', function() {
		$('.js-search').fadeIn();
	});

});

VK.Widgets.Group("vk_groups", {mode: 3, width: "290"}, 60271187);

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.8";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

