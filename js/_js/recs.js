//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend jquery-ui.min.js
//@prepros-prepend flipclock.min.js
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
	/* План */
	$(function(){
		$('#videos_tabs').tabs({
			hide: {
				effect: "fade",
				duration: 200
			},
			show: {
				effect: "fade",
				duration: 200
            },
            active: 0
		});
	});

	//@prepros-prepend timer.js

});