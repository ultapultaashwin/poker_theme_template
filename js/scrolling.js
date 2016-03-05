$(document).ready(function(e) {
	$(window).bind('hashchange', navigate);
});
var target, fragments;
var hashes = new Object;
var timeOutId;
function navigate()
{
	hideProshowPopup();
	hideWCSPopup();
	if(window.location.hash == '')
		window.location = "#!/home";
	target = window.location.hash;
	fragments = target.split('/');
	if(fragments.length>=2)
	{
		if(fragments[1] == 'eunoia')
			$('#slider1').roundabout("animateToChild", 0);
		if(fragments[1] in hashes)
			hashes[fragments[1]].click();
			
		window.clearTimeout(timeOutId);
		timeOutId = window.setTimeout("resetChips();", 750);
	}
	if(fragments.length > 2)
	{
		if(target[0]+target[1]=='#!' && (target.slice(2) in hashes || target.slice(2,-1) in hashes))
		{
			if(target.slice(-1) == '/')
				hashes[target.slice(2,-1)].click();
			else
				hashes[target.slice(2)].click();
		}
	}
}
function reposition()
{
	if(window.location.hash == '')
		window.location = "#!/home";
	target = window.location.hash;
	fragments = target.split('/');
	if(fragments[1] in hashes)
		$('#main_wrapper').scrollLeft($('#'+(fragments[1])+'_page').offset().left + $('#main_wrapper').scrollLeft());
	
}