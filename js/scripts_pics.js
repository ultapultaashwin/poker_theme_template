var pics_config={cardholder:{index:3,left:10,top:211,width:162,height:206,z:1,image:'cardholder.png'},logo:{sprite:false,index:1,left:551,top:0,width:190,height:185,z:100,image:'logo.gif'},twitter:{sprite:true,link:true,left:1268,top:654,width:80,height:80,z:100,image:'twitter.png',href:'https://twitter.com'},youtube:{sprite:true,link:true,left:1266,top:484,width:79,height:80,z:100,image:'youtube.png',href:'https://www.youtube.com'},facebook:{sprite:true,link:true,left:1266,top:569,width:80,height:80,z:100,image:'facebook.png',href:'https://www.facebook.com'},iitm:{link:true,left:1273,top:10,width:82,height:99,z:100,image:'iitm.png',href:'https://www.siet.in'},znetlive:{link:true,left:14,top:726,width:161,height:31,z:100,image:'znetlive.png',href:'#'},tuv:{link:true,left:1174,top:9,width:85,height:85,z:100,image:'tuv.png'},saarang:{left:758,top:36,width:254,height:98,z:100,image:'saarang.png'}}
function Pic(domParent,id){this.load=function(domParent,id){this.config=pics_config[id];this.id=id;this.index=this.config.index;this.status=0;this.link=this.config.link;this.sprite=this.config.sprite;this.z=this.config.z;this.domParent=domParent;this.bgPos="0 0";if(this.link)
{this.href=this.config.href;if(this.sprite)
{this.bgSize="100% 200%";this.bgPos="0 100%";}
else
{this.bgSize="100% 100%";}
this.cursor="pointer";this.domParent.append("<a id='"+this.id+"' href='"+this.href+"' target='_blank'></a>");}
else
{this.bgSize="100% 100%";this.domParent.append("<div id='"+this.id+"'></div>");}
this.jQSelector=$("#"+this.id);this.bg="url('images/"+this.config.image+"')";this.size={width:this.config.width,height:this.config.height};this.coords={top:this.config.top,left:this.config.left};this.jQSelector.css({position:"absolute",width:this.size.width,height:this.size.height,left:this.coords.left,top:this.coords.top,zIndex:this.z,backgroundImage:this.bg,backgroundSize:this.bgSize,backgroundPosition:this.bgPos});this.attachHandlers();this.resize();if(this.id=="tuv"||this.id=="iitm"||this.id=="znetlive"||this.id=="youtube"||this.id=="facebook"||this.id=="twitter")
{this.resizeLower();}};this.hidePresence=function(){this.rotate(this.angle);}
this.attachHandlers=function(){if(this.link)
{this.jQSelector.bind("mouseenter",{self:this},function(e){e.data.self.jQSelector.css("background-position","0 0");});this.jQSelector.bind("mouseleave",{self:this},function(e){e.data.self.jQSelector.css("background-position","0 100%");});}}
this.detachHandlers=function(){this.jQSelector.unbind("click");this.jQSelector.unbind("mouseenter");this.jQSelector.unbind("mouseleave");}
this.resize=function(W,H){var WIDTH=window.innerWidth,HEIGHT=window.innerHeight;if((WIDTH/1366.0)==(HEIGHT/768.0)||this.id=="bg"){this.size.width=this.config.width*WIDTH/1366.0;this.size.height=this.config.height*HEIGHT/768.0;this.coords.left=this.config.left*WIDTH/1366.0;this.coords.top=this.config.top*HEIGHT/768.0;}
else{var maxNum=WIDTH/1366.0;this.size.width=this.config.width*maxNum;this.size.height=this.config.height*maxNum;this.coords.left=this.config.left*maxNum;this.coords.top=this.config.top*maxNum;}
this.jQSelector.css({width:this.size.width,height:this.size.height,left:this.coords.left,top:this.coords.top});}
this.resizeLower=function(W,H){var WIDTH=window.innerWidth,HEIGHT=window.innerHeight;var maxNum=WIDTH/1366.0;this.coords.top=this.config.top+(this.config.top*maxNum-this.config.top);this.jQSelector.css({top:this.coords.top});}
this.load(domParent,id);}
function pics_load()
{var domParent=$("body");for(var Id in pics_config)
{var nav=new Pic(domParent,Id);pics.push(nav);}
$("#cardholder").css({backgroundImage:"none"});}