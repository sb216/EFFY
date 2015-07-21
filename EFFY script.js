
$(document).ready(function(){
	


	var checked = false; //Checkbox status
	var t; // variable for timeout
	var isScrolling = false;
	var scrollTimer; 
	
	 

	function storageSupported() {
		if(typeof(Storage) !== 'undefined') {
			return true;
		} else {
			return false;
		}
	} 

	



	//Event object constructor 
	function event(id, title, date, time, location) {
		this.eventId = id;
		this.eventTitle = title;
		this.eventDate = date;
		this.eventTime = time;
		this.eventLocation = location;
	}

	// Event objects 
	var deeptime = new event('deeptime', 'Deeptime, with Broken Landscape', 'Friday, 4/3', '8pm', 'Zhang Auditorium, Evans Hall, 165 Whitney Avenue');
	var wrenched = new event('wrenched', 'Wrenched, with Attack of the Killer Trees', 'Saturday, 4/4', '4pm', 'Whitney Humanities Center, Auditorium, 53 Wall Street');
	var chineseMayor = new event('chinese-mayor', 'The Chinese Mayor, with XBoundary', 'Saturday, 4/4', '8pm', 'Whitney Humanities Center, Auditorium, 53 Wall Street');
	var shorts = new event('shorts', 'Shorts program', 'Sunday, 4/5', '2pm', 'Loria Center for the History of Art, Room 250, 190 York Street');
	var thuletuvalu = new event('thuletuvalu', 'Thuletuvalu, with The Ballad of Holland House', 'Monday, 4/6', '7pm', 'Loria Center for the History of Art, Room 250, 190 York Street ');
	var inhabit = new event('inhabit', 'Inhabit: A Permacultural Perspective, with View from a Pedal Buggy', 'Tuesday, 4/7', '7pm', 'Loria Center for the History of Art, Room 250, 190 York Street ');
	var blackIce = new event('black-ice', 'Black Ice, with Polar Bear Men', 'Wednesday, 4/8', '7pm', 'Whitney Humanities Center, Auditorium, 53 Wall Street');
	var divide = new event('divide', 'Divide in Concord, with Dry Season', 'Thursday, 4/9', '7pm', 'Whitney Humanities Center, Auditorium, 53 Wall Street');
	var monsoon = new event('monsoon', 'Monsoon, with The Oceanmaker', 'Friday, 4/10', '8pm', 'Whitney Humanities Center, Auditorium, 53 Wall Street');
	var umi = new event('umi', 'Umi Yama Aida, with The Oceanmaker', 'Saturday, 4/11', '4pm', 'Whitney Humanities Center, Auditorium, 53 Wall Street');
	var justEat = new event('just-eat', 'Just Eat It: A Food Waste Story, with Man in the Maze', 'Sunday, 4/12', '8pm', 'Whitney Humanities Center, Auditorium, 53 Wall Street');
	

	//Array of event objects 
	var filmIds = [deeptime, wrenched, chineseMayor, shorts, thuletuvalu, inhabit, blackIce, divide, monsoon, umi, justEat];
	

	//On homepage, delay redirect when links are clicked until large logo fades out 
	$('.homepage nav li a, .homepage .my-list-link a').click(function() {
		var href = $(this).attr('href');
		$('.logo').delay(200).fadeOut(1000, function() {
			window.location = href;
		})
		return false;
	});


	//Fade in films homepage 
	$('.small-logo').delay(500).fadeIn(1000);
	$('.films-list').delay(500).fadeIn(500);
	$('.section-title').delay(500).fadeIn(500);

	// Fade in individual film pages 
	$('.film-main').fadeIn(300, 'easeInQuint');

	//Fade in my list 
	$('.list').fadeIn(500);
	$('.x').fadeIn(500);





 	//Checkbox animation with localStorage 

		if(storageSupported()) {
			console.log("storage supported");

			// Checkbox animation 
			$('.checkbox').click(function() {
				var checkedBox = $(this).attr("id"); // set variable checkedBox = to id of clicked element
				if(!checked) { // Check if box is already checked
					if($('body').attr('class') == 'films-events-homepage') 
						$(this).animate({'background-color': 'black'}, 200);

					if($('body').attr('class') == 'film-page') 
						$(this).animate({'background-color': '#00E68A'}, 200);

					checked = true;
					localStorage.setItem(checkedBox, true); //remember when the box is checked 
				} else {
					$(this).animate({'background-color': 'transparent'}, 200); 
					checked = false;
					localStorage.removeItem(checkedBox); 
				}
				updateList();
			});

			
			for(var i = 0; i < filmIds.length; i++) {
				if(localStorage.getItem(filmIds[i].eventId) == 'true') { //iterate through each film id to see if checkbox is checked 
					// console.log(filmIds[i].eventId + "is checked");

					 //if film is checked, update checkboxes and myList 
					checkboxColor('.films-events-homepage', i, 'black');
					checkboxColor('.film-page', i, 'teal');
					updateList();
				}
			}  
				
		} else {
				alert("Storage not supported");
		}

		function checkboxColor(className, i, classValue) {
			console.log(filmIds[i].eventId);
			console.log(className);
			$(className + ' #' + filmIds[i].eventId).addClass(classValue);
		}

		function updateList() {
			$('.list').empty();
			for(var i = 0; i < filmIds.length; i++) {
				if(localStorage.getItem(filmIds[i].eventId) == 'true') { //iterate through each film id to see if checkbox is checked 
					// console.log(filmIds[i].eventId + "is checked");
					$('.list').append('<ul> <li>' + filmIds[i].eventDate + '</li> <li>' + filmIds[i].eventTime + '</li> <li>' + filmIds[i].eventTitle + '</li> <li> ' + filmIds[i].eventLocation + '</li></ul>');
					 //if film is checked, add to myList
					
				}
			}
		}





	//Fade out film homepage on redirect 
	$('.films-homepage a').click(function() {
		var href = $(this).attr('href');
		$('.wrapper').delay(200).fadeOut(1000, function() {
			window.location = href;
		})
		return false; //prevent default
	});



	// Info bar for checkbox appears after 1s hover 
	$('.checkbox').mouseover(function() {
		t = setTimeout(function() {$('.checkbox-info-pop-up').css('display', 'inline-block');
		}, 1000)}).mouseout(function() {
			clearTimeout(t);
			$('.checkbox-info-pop-up').css('display', 'none');
	});
	

	//Exit buttons 
	$('.film-page .x').click(function() {
		var href = $(this).attr('href');

		$('.film-main').delay(200).fadeOut(1000, function() {
			window.location = href;
		})
		return false; //prevent default
	});

	$('.my-list .x').click(function() {
		$('.list, h2').delay(200).fadeOut(1000, function() {
			window.history.back();
		})
		return false; //prevent default	
		
	});




	$('a[href^="#"]').click(function(event) {
		event.preventDefault();

		$('html, body').animate({scrollTop: $(this.hash).offset().top}, 800, 'easeInOutCirc');

	});


	if($('body').attr('class') == 'films-events-homepage') {
		//y-coordinate of the three main sections: films, events, and myList
		var filmsCoordinate = $('#film').offset().top;
		var eventsCoordinate = $('#event').offset().top;
		var myListCoordinate = $('#my-list').offset().top;
		

		var hasScrolled = false; 

		console.log($(this).scrollTop());

		
		if($(this).scrollTop() > (myListCoordinate - 200)) { //ensure that myList appears grey even if scroll has not happened (eg if the user refreshes the page on myList)
			$('body, header').css('background-color', '#E0E0E0');
		}
		

		$(window).scroll(function() {
			isScrolling = true; 
			clearInterval(scrollTimer); //if the user is scrolling, clear the scrollTimer
			
			if($(this).scrollTop() > (myListCoordinate - 200)) {
				hasScrolled = true;
				$('body, header').css({'animation-name': 'shiftToWhite', '-moz-animation-name': 'shiftToWhite', '-webkit-animation-name': 'shiftToWhite', 'animation-duration': '.5s', '-moz-animation-duration': '.5s', '-webkit-animation-duration': '.5s', 'background-color': '#E0E0E0'});
	
			} else if (hasScrolled){ //if the user has scrolled to myList, fade back to main color (this prevents this animation from occuring the first time the user scrolls)
				$('body, header').css({'animation-name': 'shiftToMain', '-moz-animation-name': 'shiftToMain', '-webkit-animation-name': 'shiftToMain', 'animation-duration': '.5s', '-moz-animation-duration': '.5s', '-webkit-animation-duration': '.5s','background-color': '#00E68A'});
				hasScrolled = false;
			}	
			
		})
				
	}
	

	var scrollTimer = setInterval(function() { //if the user stops scrolling, this will not be cleared and will call the timer() function
		timer();
	}, 500)

	function timer() { 
		setInterval(function() {
			isScrolling = false;
		}, 1000);
	}


	setInterval(function() {

		if(!isScrolling) { //if the user isn't scrolling, snap to the nearest section 
			if($(window).scrollTop() > filmsCoordinate && $(window).scrollTop() < (filmsCoordinate + 300)) {
			$('html, body').animate({scrollTop: filmsCoordinate}, 800, 'easeInOutCirc');
			} 

			if($(window).scrollTop() > (eventsCoordinate - 300) && $(window).scrollTop() < (eventsCoordinate + 300)) {
			$('html, body').animate({scrollTop: eventsCoordinate}, 800, 'easeInOutCirc');
			} 

			if ($(window).scrollTop() > (myListCoordinate - 300) && $(window).scrollTop() < (myListCoordinate)) {
					$('html, body').animate({scrollTop: myListCoordinate}, 800, 'easeInOutCirc');
			}
		}

	}, 1000);








		


	

		





	

	

	
	


	
	

});











