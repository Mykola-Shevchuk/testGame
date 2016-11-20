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
		$hiderFullInfo = $('.hide');

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


/*//CLOSERS
	$gameInfoIcon.on('click', function() {
		$gameNavigationBlock.fadeOut('fast');

		$gameWindow.css({
			width: $gameWindow.innerWidth() + $gameInfoBlock.innerWidth()
		});

		setTimeout(function() {
			$gameInfoBlock.css('display', 'block');
		}, 500);

	});

	$closerFullInfo.on('click', function() {
		$gameWindow.css({
			width: '900px',
		}); 

		$gameNavigationBlock.fadeIn('fast');

	});

	$hiderFullInfo.on('click', function() {
		$gameInfoBlock.css('display', 'none');
		$gameWindow.css({
			width: '900px'
		});

		$gameNavigationBlock.fadeIn('fast');


	});*/
});