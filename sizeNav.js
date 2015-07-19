var slideNav = document.getElementById('slideNav');
size();

function size()
{
	if (navigator.appName == "Microsoft Internet Explorer")
	{
		slideNav.height = (document.body.clientHeight - 20);
	}
}