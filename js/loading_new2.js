var QueryLoader={overlay:"",loadBar:"",preloader:"",bgs:[],items:['landing.jpg','bg1_opt.jpg','bg2_opt.jpg','bg3_opt.jpg','bg4_opt.jpg','bg5_opt.jpg','dance_events.png','dot.png','eunoia.png','events.png','facebook.png','finearts_event.png','home.png','hospitality.png','iitm.png','logo.gif','logo.png','lecdem.png','unwind.png','online_events.png','quizzing_events.png','proshows.png','speaking_events.png','spotlight.png','thespian_events.png','tuv.png','twitter.png','../updates.png','wheel.png','writing_events.png','youtube.png','choreo.jpg','rock.jpg','classical.jpg','popular.jpg','wcs/bs.jpg','wcs/jh.jpg','wcs/mmd1.jpg','wcs/sb.jpg','znetlive.png','slider/01.jpg','slider/02.jpg','slider/03.jpg','slider/04.jpg','slider/05.jpg','slider/06.jpg'],doneStatus:0,doneNow:0,selectorPreload:"body",init:function(){QueryLoader.doneStatus=QueryLoader.items.length;QueryLoader.spawnLoader();QueryLoader.createPreloading();$("#overlay, #over").hide();},imgCallback:function(){QueryLoader.doneNow++;QueryLoader.animateLoader();},createPreloading:function(){QueryLoader.preloader=$("<div></div>").appendTo($(QueryLoader.selectorPreload));$(QueryLoader.preloader).css({height:"0px",width:"0px",overflow:"hidden"});var length=QueryLoader.items.length;QueryLoader.doneStatus=length;for(var i=0;i<length;i++){var imgLoad=$("<img></img>");$(imgLoad).attr("src",'images/'+QueryLoader.items[i]);$(imgLoad).unbind("load");$(imgLoad).bind("load",function(){if($(this).attr("src").slice(0,-5)=='images/bg')
QueryLoader.bgs.push($(this).attr("src"));QueryLoader.imgCallback();});$(imgLoad).appendTo($(QueryLoader.preloader));}},spawnLoader:function(){QueryLoader.overlay=$("<div></div>").appendTo($("body"));$(QueryLoader.overlay).addClass("QOverlay");$(QueryLoader.overlay).css({position:"absolute",top:0,left:'0%',width:'100%',height:'100%'});QueryLoader.Bg=$("<div></div>").appendTo($(QueryLoader.overlay));QueryLoader.loadBar=$("<div></div>").appendTo($(QueryLoader.overlay));$(QueryLoader.loadBar).addClass("QLoader");$(QueryLoader.loadBar).css({position:"absolute",top:"2%",width:"0%",height:"0.5%"});$(QueryLoader.Bg).css({position:"relative",top:"5%",margin:"0 auto",width:"1366px",height:"640px",backgroundImage:"url('images/landing.jpg')",});},animateLoader:function(){var perc=(100/QueryLoader.doneStatus)*QueryLoader.doneNow;if(perc>99){$(QueryLoader.loadBar).stop().animate({width:perc+"%"},500,"linear",function(){QueryLoader.doneLoad();});}
else if((Math.floor(perc)==75)){$(QueryLoader.loadBar).stop().animate({width:perc+"%"},500,"linear",function(){});}
else{$(QueryLoader.loadBar).stop().animate({width:perc+"%"},500,"linear",function(){});}},doneLoad:function(){$(window).bind("click",function(){navigate();$(QueryLoader.overlay).hide();$(window).unbind("click");$(QueryLoader.preloader).remove();});}}
$(document).ready(function(e){QueryLoader.init();});