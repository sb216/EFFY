
$(document).ready(function(){
	


	var checked = false; //Checkbox status
	var t; // variable for timeout
	

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
	var umi = new event('umi', 'Um Yama Aida, with The Oceanmaker', 'Saturday, 4/11', '4pm', 'Whitney Humanities Center, Auditorium, 53 Wall Street');
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





	// Checkbox animation 
	$('.checkbox').click(function() {
		var checkedBox = $(this).attr("id"); // set variable checkedBox = to id of clicked element
		if(!checked) { // Check if box is already checked
			if($('body').attr('class') == 'films-homepage') 
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
	});


 	//Checkbox animation with localStorage 
	if(storageSupported()) {
		console.log("storage supported");
		for(var i = 0; i < filmIds.length; i++) {
			if(localStorage.getItem(filmIds[i].eventId) == 'true') { //iterate through each film id to see if checkbox is checked 
				console.log(filmIds[i].eventId + "is checked");

				 //if film is checked, keep the checkbox filled 
				$('.films-homepage ' + '#' + filmIds[i].eventId).addClass('black');
				$('.film-page ' + '#' + filmIds[i].eventId).addClass('teal');
				$('.list ul').append('<li>' + filmIds[i].eventDate + ' ' + filmIds[i].eventTime + ' ' + filmIds[i].eventTitle + ' ' + filmIds[i].eventLocation + '</li>');
			}
		}  
			
	} else {
			alert("Storage not supported");
	}




	//Fade out film homepage on redirect 
	$('.films-homepage a').click(function() {
		var href = $(this).attr('href');
		$('.wrapper').delay(200).fadeOut(1000, function() {
			window.location = href;
		})
		return false;
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
		return false;
	});

	$('.my-list .x').click(function() {
		$('.list').delay(200).fadeOut(1000, function() {
			window.history.back();
		})
		return false;	
		
	});



	


	


	
	

});











