$(function () {
		/* Таймер */
		var clock;
		var futureDate = new Date("December 20, 2018 00:00 AM UTC+3");
		var currentDate = new Date();
		var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

		function dayDiff(first, second) {
			return (second - first) / (1000 * 60 * 60 * 24);
		}
		if (dayDiff(currentDate, futureDate) < 100) {
			$('.clock').addClass('twoDayDigits');
		} else {
			$('.clock').addClass('threeDayDigits');
		}
		if (diff < 0) {
			diff = 0;
			$('.clock-stop').addClass("alert-danger");
			$('.clock-stop').html("Скидка сгорела!");
			// $('.cost_sale, .cost_today, .prepayment').remove();
			// $('.cost_full span').css("textDecoration", "none");
			// $('#link_1').attr('href', 'https://aleksandrkudryashov1.autoweboffice.ru/?r=ordering/cart/as1&id=2441&clean=true&lg=ru');
			// $('#link_2').attr('href', 'https://aleksandrkudryashov1.autoweboffice.ru/?r=ordering/cart/as1&id=2444&clean=true&lg=ru');
			// $('#link_3').attr('href', 'https://aleksandrkudryashov1.autoweboffice.ru/?r=ordering/cart/as1&id=2447&clean=true&lg=ru');
			// $('#link_4').attr('href', 'https://aleksandrkudryashov1.autoweboffice.ru/?r=ordering/cart/as1&id=2450&clean=true&lg=ru');
		}
		clock = $('.clock').FlipClock(diff, {
			clockFace: 'HourlyCounter',
			countdown: true,
			language: 'ru',
			callbacks: {
				stop: function () {
					$('.clock-stop').addClass("alert-danger");
					$('.clock-stop').html("Скидка сгорела!");
					// $('.cost_sale, .cost_today, .prepayment').remove();
					// $('.cost_full span').css("textDecoration", "none");
					// $('#link_1').attr('href', 'https://aleksandrkudryashov1.autoweboffice.ru/?r=ordering/cart/as1&id=2441&clean=true&lg=ru');
					// $('#link_2').attr('href', 'https://aleksandrkudryashov1.autoweboffice.ru/?r=ordering/cart/as1&id=2444&clean=true&lg=ru');
					// $('#link_3').attr('href', 'https://aleksandrkudryashov1.autoweboffice.ru/?r=ordering/cart/as1&id=2447&clean=true&lg=ru');
					// $('#link_4').attr('href', 'https://aleksandrkudryashov1.autoweboffice.ru/?r=ordering/cart/as1&id=2450&clean=true&lg=ru');
				}
			},
		});
	});