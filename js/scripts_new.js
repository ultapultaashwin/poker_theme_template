var animationStart=false;
$(document).ready(function(e)
	{	
		proshows_load();
		wcs_load();
		events_load();
		pics_load();
		setSocialMedia();
		nav_load();
		$("#hospitality").bind('click',function()
			{
			setTimeout(function()
				{
				$('#item3').click();
				},1200);
			});
			$("#events_container").css(
			{
			top:$("#logo").offset().top+$("#logo").height()
			});
			$("#spotlight_container").css(
			{
			top:$("#logo").offset().top+$("#logo").height()
			});
			$("#hospi_container").css({
			top:$("#logo").offset().top+$("#logo").height()
			});
			$.ajax({url:"right_overlay.html",success:function(data)
				{
				$("#site_overlay_right").append(data);
				}
			});
			$.ajax(
			{
			url:"left_overlay.html",success:function(data)
				{
				$("#site_overlay_left").append(data);$('#spons-ticker').cycle({fx:'turnUp'});
				}
			});
			$(window).scrollTop(0);$(window).scroll(function()
				{
				$(window).scrollTop(0);
				});
			});
			$(window).resize(function redoing(){
			for(var i=0;i<pics.length;i++)
				{pics[i].resize();}
				for(var i=0;i<nav_boxes.length;i++)
				{nav_boxes[i].resize();}
				for(var i=0;i<pro_boxes.length;i++)
				{pro_boxes[i].resize();}
				for(var i=0;i<wcs_boxes.length;i++)
				{wcs_boxes[i].resize();}
				for(var i=0;i<bgs.length;i++)
				{bgs[i].resize();}
				setSocialMedia();reposition();$("#events_container").css({top:$("#logo").offset().top+$("#logo").height()});$("#spotlight_container").css({top:$("#logo").offset().top+$("#logo").height()});$("#hospi_container").css({top:$("#logo").offset().top+$("#logo").height()});})
				function hide(){navigate();}
				function setSocialMedia(){var topval=(window.innerHeight*(0.95)-parseInt($("#twitter").css("height")));var arrayPics=['facebook','youtube','twitter'];var offset=parseInt($("#twitter").css("top"))-topval;for(i=0;i<3;i++){var selector=$("#"+arrayPics[i]);var newTop=parseInt(selector.css("top"))-offset;selector.css("top",newTop);}
				var newTop=parseInt($("#znetlive").css("top"))-offset;$("#znetlive").css("top",newTop);}