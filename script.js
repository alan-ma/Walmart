function updatePage(name) {
	$(".transition").css('width', '100%');
	setTimeout(function() {
		$(".content").css('display', 'none');
		$(name).css('display', 'block');
		setTimeout(function() {
			$(".transition").css('width', '0');
		}, 50);
	}, 300);
}
$(document).ready(function() {
	$('.menuItem').click(function() {
		var page = $(this).attr('data-link');
		updatePage(page);
		$('.menuItem').removeClass('current');
		$(this).addClass('current');
	});
	$('.more').click(function() {
		$('.panel-container').toggleClass('hover');
		var open = $(this).attr('data-topic');
		$('.back '+open).css('display', 'block');
	});
	$('.back').click(function() {
		$('.panel-container').toggleClass('hover');
		$('.back .social').css('display', 'none');
		$('.back .economic').css('display', 'none');
		$('.back .environmental').css('display', 'none');
	})
	updatePage('.intro');
})