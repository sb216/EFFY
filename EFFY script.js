
$(document).ready(function(){
	


	var checked = false; 
	var t; 


	//On homepage, delay redirect when links are clicked until large logo fades out 
	$(".homepage nav li a, .homepage .my-list-link a").click(function() {
		var href = $(this).attr('href');
		$(".logo").delay(200).fadeOut(1000, function() {
			window.location = href;
		})
		return false;
	});


	// $(".small-logo").delay(500).fadeIn(800);
	// $(".films-list").delay(500).fadeIn(800);



	// Code that brings up the "Search by Date" or "Search by Title" feature on the Films and Events pages 
	$("#search-circle").click(function() {
		$(".film-search-box").css("display", "inline-block");
	});

	// Exit out of the search feature 
	$(".x").click(function() {
		$(".film-search-box").css("display", "none");
	});




	// "My List" checkbox animation 
	$(".checkbox").click(function() {
		if(!checked) {
			$(this).css({"background-color": "#00E68A", "animation-name": "pulse", "animation-duration": ".4s", "-webkit-animation-name": "pulse", "-webkit-animation-duration": ".4s"});
			checked = true;
		} else {
			$(this).css({"background-color": "transparent", "animation-name": "", "-webkit-animation-name": ""});
			checked = false;
		}
	});

	// Info bar for checkbox appears after 1s hover 
	$(".checkbox").mouseover(function() {
		t = setTimeout(function() {$(".checkbox-info-pop-up").css("display", "inline-block");
		}, 1000)}).mouseout(function() {
			clearTimeout(t);
			$(".checkbox-info-pop-up").css("display", "none");
});

});








