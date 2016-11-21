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
		$hiderFullInfo = $('.hide'),
		$bodyWidth = $('body').width();

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


//CLOSERS
	$gameInfoIcon.on('click', function() {

		if ($bodyWidth < 980) {
			$gameNavigationBlock.fadeOut(500);

			$gameWindow.css({
				width: $gameInfoBlock.innerWidth()
			});
			
			$gameInfoBlock.fadeIn(500);
			
			return false;
		};

		$gameNavigationBlock.fadeOut(500);

		$gameWindow.css({
			width: $gameWindow.innerWidth() + $gameInfoBlock.innerWidth()
		});

		
			$gameInfoBlock.delay(500).fadeIn(500);
		

	});

	$closerFullInfo.on('click', function() {
		$gameWindow.css({
			width: '900px',
		}); 

		$gameNavigationBlock.fadeIn(500);

	});

	$hiderFullInfo.on('click', function() {

		if ($bodyWidth < 980) {
			$gameInfoBlock.fadeOut(500);

			$gameWindow.css({
				width: $gameWindow.innerWidth()
			});

			$gameNavigationBlock.fadeIn(500);

			return false;
		};

		$gameInfoBlock.css('display', 'none');
		$gameWindow.css({
			width: $gameWindow.innerWidth() - $gameInfoBlock.innerWidth()
		});

		$gameNavigationBlock.fadeIn('fast');


	});
});