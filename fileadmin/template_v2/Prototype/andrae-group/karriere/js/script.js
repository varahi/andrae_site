const $ = jQuery;

function eventHandler() {
	$(" .top-nav a, .scroll-link").click(function () {
		const elementClick = $(this).attr("href");
		const destination = $(elementClick).offset().top;

		$('html, body').animate({ scrollTop: destination }, 1100);

		return false;
	});

	$('.top-nav').hcSticky({
		stickTo: 'body'
	});





	// Cache selectors
	var lastId,
		topMenu = $(".top-nav"),
		topMenuHeight = 20,
		// topMenuHeight = topMenu.outerHeight()+15,
		// All list items
		menuItems = topMenu.find("a"),
		// Anchors corresponding to menu items
		scrollItems = menuItems.map(function () {
			var item = $($(this).attr("href"));
			if (item.length) { return item; }
		});

	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.click(function (e) {
		var href = $(this).attr("href"),
			offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight - 10;
		$('html, body').stop().animate({
			scrollTop: offsetTop
		}, 1100);
		e.preventDefault();
	});

	// Bind to scroll
	$(window).scroll(function () {
		// Get container scroll position
		var fromTop = $(this).scrollTop() + topMenuHeight;

		// Get id of current scroll item
		var cur = scrollItems.map(function () {
			if ($(this).offset().top < fromTop)
				return this;
		});
		// Get the id of the current element
		cur = cur[cur.length - 1];
		var id = cur && cur.length ? cur[0].id : "";

		if (lastId !== id) {
			lastId = id;
			// Set/remove active class
			menuItems
				.removeClass("active").parent()
				.end().filter("[href='#" + id + "']").addClass("active");
		}
	});


};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}
