$(document).ready(function() {
	//Prevent Page Reload on all # links
	$("a[href='#']").click(function(e) {
		e.preventDefault();
	});

	// On scroll header small
	$(window).scroll(function(e) {
		if($(window).innerWidth() < 992)
			$("body").removeClass('menu-toggle');
	});

	//placeholder
	$("[placeholder]").each(function () {
		$(this).attr("data-placeholder", this.placeholder);

		$(this).bind("focus", function () {
			this.placeholder = '';
		});
		$(this).bind("blur", function () {
			this.placeholder = $(this).attr("data-placeholder");
		});
	});

	// Nav Icon
	$(".nav-icon, .menu-overlay").click(function(e){
		e.preventDefault();
		$("body").toggleClass('menu-toggle');
	});


	// tab
	var $mainClass = $(".tab-heading");

	$mainClass.each(function(){
		var $tab = $(this);
		function ulWidth(){
			var navW = 0;
			$tab.find("> ul > li").each(function(){
				navW = navW + $(this).outerWidth(true);				
			});
			$tab.find("> ul").css({"width":navW+5});	
		}
		ulWidth();			

		$tab.jScrollPane({
			showArrows: true,
			horizontalGutter:25
		});

		function scrollAdj(){
			$tab.data('jsp').reinitialise();
			if($tab.find(".jspHorizontalBar").length > 0)
				$tab.find(".jspPane > ul").removeClass('no-scroll');
			else
				$tab.find(".jspPane > ul").addClass('no-scroll');
		};
		scrollAdj();
		$(window).resize(function() {
			ulWidth();
			scrollAdj();
		});

		$tab.find("ul li a").click(function(e) {
			e.preventDefault();
			var $this = $(this).closest('li');
			if($tab.attr('active-center') == "true")
				$tab.data('jsp').scrollByX(parseInt(($this.offset().left - $tab.offset().left) + ($this.innerWidth()/2)) - ($tab.innerWidth()/2));
			if(!$this.hasClass('active')){
				$this.closest(".tab-block").find(".active").removeClass('active');
				$this.addClass('active');
				$($this.find('a').attr("href")).addClass("active");
			}

			$(window).resize();
		});
	});	
});