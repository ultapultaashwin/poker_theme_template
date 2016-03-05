var wcs_config={}
function wBoxes(domParent,id){this.load=function(domParent,id){this.config=wcs_config[id];this.id=id;this.status=0;this.hashAddress=this.config.hashAddress;hashes[this.hashAddress]=this;this.domParent=domParent;this.domParent.append("<div id='"+this.id+"'></div>");this.jQSelector=$("#"+this.id);this.jQSelector.append("<div class='overlay_ps'></div>");this.overlay=$('#'+id+' .overlay_ps');this.textarea=$('.text_area');this.title=this.config.title;this.text=this.config.text;this.fontColor=this.config.fontColor;this.textBg=this.config.textBg;this.speed=this.config.speed;this.angle=this.config.rotate;this.bg="url('images/"+this.config.images[0]+"')";if(this.id=="mmd"){this.logo=$("<img src='images/meandmydrummer.jpg' style='z-index:102; position:absolute; height:20%; width:20%; top:77%; left:54%' />");}
this.size={width:this.config.width,height:this.config.height};this.coords={top:this.config.top,left:this.config.left};this.jQSelector.css({position:"absolute",width:this.size.width,height:this.size.height,left:this.coords.left,top:this.coords.top,zIndex:1,backgroundImage:this.bg,backgroundSize:"100% 100%",'box-shadow':'0px 0px 10px #333','transition':'transform .3s','-moz-transition':'-moz-transform .3s','-webkit-transition':'-webkit-transform .3s','-o-transition':'-o-transform .3s'});this.rotate(this.angle);this.attachHandlers();this.resize();};this.zoomIn=function(){var WIDTH=window.innerWidth,HEIGHT=window.innerHeight;hide
$("#overlay_wcs").unbind("click");$("#overlay_wcs").bind("click",{self:this},function(e){var self=e.data.self;var parentLocation=self.hashAddress.split('/').slice(0,-1).join('/');document.location='#!'+parentLocation;});$("#overlay_wcs").css({zIndex:101}).stop().animate({opacity:.7},300);this.detachHandlers();this.overlay.animate({opacity:0},300,function(){$(this).css("display","none");});this.jQSelector.css("z-index",102);this.rotate(0);if(this.id=="mmd"){this.logoShown=$("#wcs_page").append(this.logo);}
if(this.id=="jh"){this.jQSelector.stop().animate({width:.3*WIDTH,height:.6*HEIGHT,top:.25*HEIGHT,left:.2*WIDTH},300);}
else{this.jQSelector.stop().animate({width:.37*WIDTH,height:.5*HEIGHT,top:.25*HEIGHT,left:.1*WIDTH},300);}
this.putContent();this.status=1;}
this.zoomOut=function(){$("#overlay_wcs").unbind("click");$("#overlay_wcs").css({zIndex:0}).stop().animate({opacity:0},300,this.attachHandlers());this.overlay.css("display","block");this.overlay.css("opacity",0);;this.jQSelector.stop().animate({width:this.size.width,height:this.size.height,left:this.coords.left,top:this.coords.top},300,function(){$(this).css("z-index","0");});if(this.id=="mmd"){this.logo.remove();}
this.rotate(this.angle);this.removeContent();this.status=0;}
this.removeContent=function(){this.textarea.stop().animate({opacity:0},300,function(){$(this).css({display:"none",zIndex:0,backgroundImage:"none"});$(this).html('');});}
this.putContent=function(){var WIDTH=window.innerWidth,HEIGHT=window.innerHeight;this.textarea.html('');this.textarea.append('<center><span>'+this.title+'<br /></span></center>');this.textarea.append('<p>'+this.text+'</p>');this.textarea.css({});this.textarea.css({width:.37*WIDTH-60,height:.5*HEIGHT-60,top:.25*HEIGHT,left:.1*WIDTH,display:"block",zIndex:101,backgroundColor:this.textBg,color:this.fontColor});this.textarea.stop().animate({left:.53*WIDTH,opacity:1},{duration:500,delay:300});this.textarea.mCustomScrollbar({scrollButtons:{enable:false}});}
this.startShow=function()
{}
this.resize=function(){var WIDTH=window.innerWidth,HEIGHT=window.innerHeight;var width=this.coords.width,height=this.coords.height;var W=WIDTH/1366.0,H=HEIGHT/768.0;var D=Math.sqrt(WIDTH*WIDTH+HEIGHT*HEIGHT)/Math.sqrt(1366*1366+768*768);this.size.width=this.config.width*D;this.size.height=this.config.height*D;this.coords.left=this.config.left*W;this.coords.top=this.config.top*H;if(this.status==0)
{this.size.width=this.config.width*D;this.size.height=this.config.height*D;this.coords.left=this.config.left*W;this.coords.top=this.config.top*H;this.jQSelector.css({left:this.coords.left,top:this.coords.top,width:this.size.width,height:this.size.height});}
else
{this.textarea.css({width:.37*WIDTH-60,height:.5*HEIGHT-60,top:.25*HEIGHT,left:.53*WIDTH});this.jQSelector.css({width:.37*WIDTH,height:.5*HEIGHT,top:.25*HEIGHT,left:.1*WIDTH});}}
this.followLink=function()
{document.location='#!'+this.hashAddress}
this.click=function()
{this.zoomIn();}
this.attachHandlers=function(){this.overlay.bind("mouseenter",{self:this},function(e){var self=e.data.self;self.overlay.stop().animate({opacity:1.0});self.jQSelector.css("z-index",102);});this.overlay.bind("mouseleave",{self:this},function(e){var self=e.data.self;self.overlay.stop().animate({opacity:0});if(self.status==0)
self.jQSelector.css("z-index",1);});this.overlay.bind("click",{self:this},function(e){e.data.self.followLink();});this.jQSelector.bind("click",{self:this},function(e){e.data.self.followLink();});}
this.detachHandlers=function(){this.overlay.unbind("mouseenter");this.overlay.unbind("mouseleave");this.overlay.unbind("click");this.jQSelector.unbind("click");}
this.rotate=function(deg){this.jQSelector.css({"-webkit-transform":"rotate("+deg+"deg)","-moz-transform":"rotate("+deg+"deg)","-ms-transform":"rotate("+deg+"deg)","-o-transform":"rotate("+deg+"deg)",});}
this.parallax=function(ratio){this.jQSelector.css({left:ratio*this.speed+this.coords.left});}
this.load(domParent,id);}
var wcs_boxes=[];function wcs_parallax(ratio)
{for(var i=0;i<wcs_boxes.length;i++)
{var b=wcs_boxes[i];if(b.status==0)
{b.parallax(ratio);}}}
function wcs_load()
{var domParent=$("#wcs_main");for(var Id in wcs_config)
{var wcs=new wBoxes(domParent,Id);wcs_boxes.push(wcs);}}
function hideWCSPopup()
{for(var i=0;i<wcs_boxes.length;i++)
{var b=wcs_boxes[i];if(b.status==1)
{b.zoomOut();}}}