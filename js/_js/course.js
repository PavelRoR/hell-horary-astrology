//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend jquery-ui.min.js
//@prepros-prepend flipclock.min.js
//@prepros-prepend lazy.min.js
//@prepros-prepend jquery.fancybox.min.js
$(function () {
	/* Якорь */
	$(function () {
		$("a[href='#prices']").click(function (h) {
			h.preventDefault();
			var f = $(this).attr("href"),
				g = $(f).offset().top;
			$("body,html").animate({
				scrollTop: g
			}, 1500)
		});
	});
	/* План */
	$(function(){
		$('#plan_tabs, .lessons').tabs({
			hide: {
				effect: "fade",
				duration: 200
			},
			show: {
				effect: "slide",
				duration: 200
			}
		});
	});
	/* Ленивая подгрузка */
	$(function () {
		$('.lazy').lazy();
	});
	//@prepros-prepend timer.js
	/* Видео */
	$(function () {
		$(".video_wrapper img").click(function () {
			var a = $(this).parent().attr("data-youtube");
			$(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?rel=0&autoplay=true" allowfullscreen></iframe>')
		});
	});
});