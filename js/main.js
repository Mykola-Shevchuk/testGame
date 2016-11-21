$(document).ready(function($) {

	// Cache DOM
	var $itemMenu = $('.main-navigation a'),
		$favorites = $('#favorites'),
		$dropdown = $('.favorites-dropdown'),
		$gameWindow = $('.game-section'),
		$gameNavigationBlock = $('.game-navigation'),
		$gameInfoIcon = $('.more-information'),
		$gameInfoBlock = $('.game-information-section'),
		$closerFullInfo = $('.close-full-information'),
		$closeGame = $('.close > span');
		$hiderFullInfo = $('.hide'),
		$bodyWidth = $('body').width(),
		$favoriteStar = $('.favorite-star'),
		$fullScreen = $('.fullscreen'),
		$deposite = $('.deposit'),
		$popupBlock = $('.popup'),
		$closeModalWindow = $('.close-modal-window');

	//Add active class
	$($itemMenu).on('click', function() {

		$(this).each(function() {
			$($itemMenu ).removeClass('active');
		})

		$(this).addClass('active');
		return false;
	});

	//DropDown
	$favorites.on('click', function() {
		$dropdown.slideToggle(400);
	});


	//CLOSERS GAME 

	$gameWindow.on('click', function(event) {
		if (event.target === $closerFullInfo[0]) {
			$gameWindow.fadeOut(400);
		}

		if (event.target === $closeGame[0]) {
			$gameWindow.fadeOut(400);
		}

	});


	//ToggleSlide Game Menu

	$gameInfoIcon.on('click', function() {

		// Adaptive for screen less 980px

		if ($bodyWidth < 980) {
			$gameNavigationBlock.fadeOut(500);

			$gameWindow.css({
				width: $gameInfoBlock.innerWidth()
			});
			
			$gameInfoBlock.fadeIn(500);
			
			return false;
		};

		// Adaptive for screen more 980px

		$gameNavigationBlock.fadeOut(500);

		$gameWindow.css({
			width: $gameWindow.innerWidth() + $gameInfoBlock.innerWidth()
		});

		
		$gameInfoBlock.delay(500).fadeIn(500);
	});

	// Hider Game Menu

	$hiderFullInfo.on('click', function() {

		// Adaptive for screen less 980px

		if ($bodyWidth < 980) {
			$gameInfoBlock.fadeOut(500);

			$gameWindow.css({
				width: $gameWindow.innerWidth()
			});

			$gameNavigationBlock.fadeIn(500);

			return false;
		};

		// Adaptive for screen more 980px

		$gameInfoBlock.css('display', 'none');
		$gameWindow.css({
			width: $gameWindow.innerWidth() - $gameInfoBlock.innerWidth()
		});

		$gameNavigationBlock.fadeIn('fast');

	});

	// ADD STAR

	$favoriteStar.on('click', function() {
		$(this).toggleClass('show-favorite-star');
		
	});

	// POPUP

	$deposite.on('click', function() {
		$popupBlock.fadeIn(400);
	});

	$closeModalWindow.on('click', function() {
		$popupBlock.fadeOut(400);
	});

	//FULL SCREEN

	$fullScreen.on('click', function() {
		function toggleFullScreen(elem) {
	    
		    if ((document.fullScreenElement !== undefined &&
		    	 document.fullScreenElement === null) ||
		    	 (document.msFullscreenElement !== undefined &&
		    	  document.msFullscreenElement === null) ||
		    	   (document.mozFullScreen !== undefined &&
		    	    !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined &&
		    	     !document.webkitIsFullScreen)) {

		        if (elem.requestFullScreen) {
		            elem.requestFullScreen();
		        } else if (elem.mozRequestFullScreen) {
		            elem.mozRequestFullScreen();
		        } else if (elem.webkitRequestFullScreen) {
		            elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
		        } else if (elem.msRequestFullscreen) {
		            elem.msRequestFullscreen();
		        }
		    } else {
		        if (document.cancelFullScreen) {
		            document.cancelFullScreen();
		        } else if (document.mozCancelFullScreen) {
		            document.mozCancelFullScreen();
		        } else if (document.webkitCancelFullScreen) {
		            document.webkitCancelFullScreen();
		        } else if (document.msExitFullscreen) {
		            document.msExitFullscreen();
		        }
		    }
		}

		toggleFullScreen(document.body)

	});


	/*FORM FILTER*/

	$(".popup-form-content input").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A, Command+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || 
             // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
});