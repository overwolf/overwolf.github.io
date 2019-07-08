jQuery(function() {
	var $ul = $('ul.toc-headings')

	if ($ul.length > 0) {
		setActiveSidebarLink();
	}

	$(window).on("scroll", function() {
		throttle(function(){
			setActiveSidebarLink();
		}, 100)();
	});

	function setActiveSidebarLink() {
			$ul.find('a').removeClass('active-highlight');
			var $closest = getClosestHeader();
			$closest.addClass('active-highlight');
	}
});

function getClosestHeader() {
	var $links = $('ul.toc-headings').find('a'),
	top = window.scrollY,
	$last = $links.first();

	if (top < 100) {
		return $last;
	}

	if (top + window.innerHeight >= $(".main").height()) {
		return $links.last();
	}

	for (var i = 0; i < $links.length; i++) {
		var $link = $links.eq(i),
		href = $link.attr("href");

		if (href !== undefined && href.charAt(0) === "#" && href.length > 1) {
			var $anchor = $(href);

			if ($anchor.length > 0) {
				var offset = $anchor.offset();

				if (top < offset.top - 150) {
					return $last;
				}

				$last = $link;
			}
		}
	}
	return $last;
}


function throttle (callback, limit) {

	var wait = false;
	return function () {
		if (!wait) {

			callback.apply(null, arguments);
			wait = true;
			setTimeout(function () {
				wait = false;
			}, limit);
		}
	};
}
