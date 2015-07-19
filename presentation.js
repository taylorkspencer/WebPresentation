var slidePanel, slides, selectedSlide, navPanel, title, toolbar, navShowing, titleShowing, toolbarShowing, navWidth, titleHeight, toolbarHeight, css;
var fullScreen = false;

function loadPresentation()
{
	setVariables();
	nextSlide();
}

function setVariables()
{
	slidePanel = document.getElementById('slide');
	slides = new Array('slide1.html', 'slide2.html', 'slide3.html', 'slide4.html');
	selectedSlide = slides[slides.length-1];
	navPanel = document.getElementById('nav');
	title = document.getElementById('title');
	toolbar = document.getElementById('toolbar');
	navShowing = true;
	titleShowing = true;
	toolbarShowing = true;
}

function firstSlide()
{
	setSlide(slides[0]);
}

function previousSlide()
{
	if ((getIndexOf(slides, selectedSlide))!=(0))
	{
		setSlide(slide[getIndexOf(slides, selectedSlide)-1]);
	}
	else
	{
		lastSlide();
	}
}

function nextSlide()
{
	if ((getIndexOf(slides, selectedSlide))!=(slides.length-1))
	{
		setSlide(slides[getIndexOf(slides, selectedSlide)+1]);
	}
	else
	{
		firstSlide();
	}
}

function lastSlide()
{
	setSlide(slides[slides.length-1]);
}

function setSlide(slide)
{
	selectedSlide = slide;
	slidePanel.src = selectedSlide;
}

function getIndexOf(array, object)
{
	var processing = 0;
	var objectFound = false;
	while ((!objectFound)&&((slides.length-1)>=(processing)))
	{
		if (slides[processing]==(object))
		{
			objectFound = true;
		}
		else
		{
			processing+=1;
		}
	}
	if (objectFound)
	{
		return processing;
	}
	else
	{
		return -1;
	}
}

function toggleNav()
{
	if (navShowing)
	{
		navWidth = document.getElementById('frameset2').cols;
		document.getElementById('frameset2').cols = '0,*';
	}
	else
	{
		document.getElementById('frameset2').cols = (navWidth);
	}
	navShowing = !navShowing;
}

function toggleTitle()
{
	if (titleShowing)
	{
		titleHeight = document.getElementById('frameset1').rows;
		document.getElementById('frameset1').rows = '0,*';
	}
	else
	{
		document.getElementById('frameset1').rows = (titleHeight);
	}
	titleShowing = !titleShowing;
}

function toggleToolbar()
{
	if (toolbarShowing)
	{
		toolbarHeight = document.getElementById('frameset3').rows;
		document.getElementById('frameset3').rows = '*,0';
	}
	else
	{
		document.getElementById('frameset3').rows = (toolbarHeight);
	}
	toolbarShowing = !toolbarShowing;
}

function toggleFullScreenMode()
{
	css = slide.document.getElementById('css');
	if (fullScreen)
	{
		css.href = 'fullScreen.css';
	}
	else
	{
		css.href = 'slide.css';
	}
}

function toggleFullScreen()
{
	fullScreen = !fullScreen;
	toggleFullScreenMode();
	if (navShowing==fullScreen)
	{
		toggleNav();
	}
	if (titleShowing==fullScreen)
	{
		toggleTitle();
	}
	if (toolbarShowing==fullScreen)
	{
		toggleToolbar();
	}
}

function switchModes()
{
	// Detect whether the window actually changed modes
	if (window.TheatherMode!=fullScreen)
	{
		toggleFullScreen();
	}
}