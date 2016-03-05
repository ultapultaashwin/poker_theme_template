var pages=[];var ajax;function events_load()
{ajax=new AJAX();for(var i=0;i<config.pages.length;i++)
{var t=new Page($("#events_wrapper"),config.pages[i].parentIndex,i,config);pages.push(t);}
for(var i=0;i<config1.pages.length;i++)
{var t=new Page($("#spotlight_wrapper"),config1.pages[i].parentIndex,i,config1);pages.push(t);}}
function resetChips()
{for(var i=0;i<pages.length;i++)
{if(pages[i].config.popup)
{pages[i].ajaxLoader.hide();pages[i].popup.hide();}
pages[i].jQSelector.hide();}
if(ajax.request)ajax.request.abort();pages[0].show();pages[0].animateShowBoxes({left:0,top:0});pages[config.pages.length].show();pages[config.pages.length].animateShowBoxes({left:400,top:0});}
var curHover_data=null;var hoverDelay=1000;var boxZoomTime=300;var boxMoveTime=300;function Page(domParent,parentIndex,index,conf){this.__init__=function(domParent,parentIndex,index,conf){this.load(domParent,parentIndex,index,conf);this.loadBoxes();};this.load=function(domParent,parentIndex,index,conf){this.domParent=domParent;this.index=index;this.config=conf.pages[this.index];this.parentIndex=this.config.parentIndex;this.id=this.config.id;this.boxes=[];this.domParent.append("<div id='"+this.id+"'></div>");this.jQSelector=$("#"+this.id);this.jQSelector.css({width:"100%",height:"100%",position:"absolute",left:"0px",top:"0px",display:"none",zIndex:1});if(this.config.popup)
{this.popup=new Popup(this);this.ajaxLoader=$("<div></div>").appendTo(this.jQSelector);this.ajaxLoader.attr('');this.ajaxLoader.css({position:'absolute',top:200,left:500,display:'none',zIndex:1000});}};this.show=function(){this.jQSelector.css("display","block");for(var i=0;i<this.boxes.length;++i){this.boxes[i].show();}};this.hide=function(){this.jQSelector.css("display","none");for(var i=0;i<this.boxes.length;++i){this.boxes[i].hide();}};this.animateHideBoxes=function(){this.jQSelector.css({zIndex:-1});for(var i=0;i<this.boxes.length;++i){this.boxes[i].animateHideBox();}};this.animateShowBoxes=function(position){this.jQSelector.css({zIndex:1});for(var i=0;i<this.boxes.length;++i){this.boxes[i].animateShowBox(position);}};this.switchPage=function(self){var box=self;var pageSwitchIndex=box.pageSwitchIndex;box.parent.animateHideBoxes();var nextPage=pages[pageSwitchIndex];nextPage.show();nextPage.animateShowBoxes(box.position);box.parent.jQSelector.hide();if(nextPage.config.popup)
{nextPage.ajaxLoader.hide();nextPage.popup.hide();}
if(box.parent.config.popup)
{box.parent.ajaxLoader.hide();if(ajax.request)ajax.request.abort();box.parent.popup.hide();}};this.gotoPrevPage=function(self){var box=self;var prevPageIndex=box.parent.parentIndex;var prevPage=pages[prevPageIndex];prevPage.show();prevPage.animateShowBoxes(box.position);box.parent.animateHideBoxes();box.parent.jQSelector.hide();if(prevPage.config.popup)
{prevPage.ajaxLoader.hide();prevPage.popup.hide();}
if(box.parent.config.popup)
{box.parent.ajaxLoader.hide();if(ajax.request)ajax.request.abort();box.parent.popup.hide();}};this.loadBox=function(index){var box=new Box(this,index);this.boxes.push(box);};this.loadBoxes=function(index){for(var i=0;i<this.config.boxes.length;++i)
this.loadBox(i);};this.__init__(domParent,parent,index,conf);}
function Box(parent,index){this.__init__=function(parent,index){this.load(parent,index);this.attachHandlers();};this.load=function(parent,index){this.parent=parent;this.index=index;this.config=this.parent.config.boxes[this.index];this.id=this.config.id;this.type=this.config.type;this.gridText=this.config.gridText;this.pageSwitchIndex=this.config.pageSwitchIndex;this.backgroundColor='rgb(128,128,128)';this.position={"left":this.config.left,"top":this.config.top};this.size={"width":this.config.width,"height":this.config.height};this.bg="url('images/"+this.config.bg+"')";if(this.type=="box_parent")
{this.position={left:100,top:150};}
if(this.type=="box_close")
{this.position={left:0,top:50};}
this.parent.jQSelector.append('<div id="'+this.id+'" style="display: table; height: 400px; #position: relative; overflow: hidden;"><div style=" #position: absolute; #top: 50%;display: table-cell;  vertical-align: middle;"><div style="#position: relative; #top: -50%; ">'+this.gridText+'</div></div></div>');;if(this.config.hover)
{this.bgSize='100% 200%';this.bgPos="0 -100%";}
else
{this.bgSize='100% 100%';this.bgPos="0 0";}
this.hover="pointer";if(this.type=='box_parent')
this.hover="default";this.jQSelector=$("#"+this.id);this.jQSelector_p=$("#"+this.id+" p");this.jQSelector.css({width:this.size.width,height:this.size.height,display:"none",zIndex:50,position:"absolute",left:this.position.left,top:this.position.top,backgroundImage:this.bg,backgroundSize:'100% 200%',backgroundPosition:this.bgPos,textAlign:"center",overflow:"hidden",cursor:this.hover,fontFamily:"Century Gothic, sans-serif",fontSize:"8px",fontWeight:"700"});if(this.type=='box_close')
{this.jQSelector.css({fontWeight:"500",fontSize:"24px"});}
if(this.id=="writing_events_1")
{this.jQSelector.css({fontSize:"12px",color:"#46451f"});}
else if(this.id=="writing_events_2")
{this.jQSelector.css({fontSize:"12px",color:"#46451f"});}
else if(this.id=="writing_events_3")
{this.jQSelector.css({fontSize:"12px",color:"#46451f"});}
else if(this.id=="writing_events_4")
{this.jQSelector.css({fontSize:"12px",color:"#46451f"});}
else if(this.id=="writing_events_5")
{this.jQSelector.css({fontSize:"17px",color:"#46451f"});}
else if(this.id=="writing_events_6")
{this.jQSelector.css({fontSize:"11px",color:"#46451f"});}
else if(this.id=="writing_events_7")
{this.jQSelector.css({fontSize:"25px",color:"#46451f"});}
else if(this.id=="quizzing_events_1")
{this.jQSelector.css({fontSize:"16px",color:"#4b8f3c"});}
else if(this.id=="quizzing_events_2")
{this.jQSelector.css({fontSize:"16px",color:"#4b8f3c"});}
else if(this.id=="quizzing_events_3")
{this.jQSelector.css({fontSize:"16px",color:"#4b8f3c"});}
else if(this.id=="quizzing_events_4")
{this.jQSelector.css({fontSize:"16px",color:"#4b8f3c"});}
else if(this.id=="onlinee_events_2")
{this.jQSelector.css({fontSize:"16px",color:"#c73b3e"});}
else if(this.id=="quizzing_events_5")
{this.jQSelector.css({fontSize:"12px",color:"#4b8f3c"});}
else if(this.id=="quizzing_events_6")
{this.jQSelector.css({fontSize:"16px",color:"#4b8f3c"});}
else if(this.id=="quizzing_events_7")
{this.jQSelector.css({cursor:"default"});}
else if(this.id=="quizzing_events_8")
{this.jQSelector.css({fontSize:"25px",color:"#4b8f3c"});}
else if(this.id=="thespian_events_1")
{this.jQSelector.css({fontSize:"10px",color:"#39a24f"});}
else if(this.id=="thespian_events_2")
{this.jQSelector.css({fontSize:"12px",color:"#39a24f"});}
else if(this.id=="thespian_events_3")
{this.jQSelector.css({fontSize:"16px",color:"#39a24f"});}
else if(this.id=="thespian_events_4")
{this.jQSelector.css({fontSize:"16px",color:"#39a24f"});}
else if(this.id=="thespian_events_5")
{this.jQSelector.css({cursor:"default"});}
else if(this.id=="thespian_events_6")
{this.jQSelector.css({fontSize:"25px",color:"#39a24f"});}
else if(this.id=="speaking_events_1")
{this.jQSelector.css({fontSize:"19px",color:"#e45d30"});}
else if(this.id=="speaking_events_2")
{this.jQSelector.css({fontSize:"12px",color:"#e45d30"});}
else if(this.id=="speaking_events_3")
{this.jQSelector.css({fontSize:"12px",color:"#e45d30"});}
else if(this.id=="speaking_events_4")
{this.jQSelector.css({cursor:"default"});}
else if(this.id=="speaking_events_5")
{this.jQSelector.css({fontSize:"25px",color:"#e45d30"});}
else if(this.id=="dance_events_1")
{this.jQSelector.css({fontSize:"12px",color:"#4b375e"});}
else if(this.id=="dance_events_2")
{this.jQSelector.css({fontSize:"14px",color:"#4b375e"});}
else if(this.id=="dance_events_4")
{this.jQSelector.css({fontSize:"10px",color:"#4b375e",fontWeight:"bold"});}
else if(this.id=="dance_events_5")
{this.jQSelector.css({fontSize:"17px",color:"#4b375e"});}
else if(this.id=="dance_events_7")
{this.jQSelector.css({fontSize:"17px",color:"#4b375e"});}
else if(this.id=="dance_events_6")
{this.jQSelector.css({cursor:"default"});}
else if(this.id=="dance_events_3")
{this.jQSelector.css({fontSize:"25px",color:"#4b375e"});}
else if(this.id=="music_events_1")
{this.jQSelector.css({fontSize:"8px",color:"#3e82a9"});}
else if(this.id=="music_events_2")
{this.jQSelector.css({fontSize:"8px",color:"#3e82a9"});}
else if(this.id=="music_events_8")
{this.jQSelector.css({fontSize:"25px",color:"#3e82a9"});}
else if(this.id=="western_music_1")
{this.jQSelector.css({fontSize:"19px",color:"#3e82a9"});}
else if(this.id=="western_music_2")
{this.jQSelector.css({fontSize:"16px",color:"#3e82a9"});}
else if(this.id=="western_music_3")
{this.jQSelector.css({fontSize:"11px",color:"#3e82a9"});}
else if(this.id=="western_music_4")
{this.jQSelector.css({fontSize:"8px",color:"#3e82a9"});}
else if(this.id=="western_music_5")
{this.jQSelector.css({fontSize:"14px",color:"#3e82a9"});}
else if(this.id=="western_music_6")
{this.jQSelector.css({fontSize:"25px",color:"#3e82a9"});}
else if(this.id=="western_music_8")
{this.jQSelector.css({fontSize:"14px",color:"#3e82a9"});}
else if(this.id=="light_music_1")
{this.jQSelector.css({fontSize:"14px",color:"#3e82a9"});}
else if(this.id=="light_music_2")
{this.jQSelector.css({fontSize:"14px",color:"#3e82a9"});}
else if(this.id=="light_music_3")
{this.jQSelector.css({fontSize:"11px",color:"#3e82a9"});}
else if(this.id=="light_music_4")
{this.jQSelector.css({fontSize:"25px",color:"#3e82a9"});}
else if(this.id=="light_music_6")
{this.jQSelector.css({fontSize:"12px",color:"#3e82a9"});}
else if(this.id=="finearts_events_1")
{this.jQSelector.css({fontSize:"9px",color:"#928a1d"});}
else if(this.id=="finearts_events_2")
{this.jQSelector.css({fontSize:"8px",color:"#928a1d"});}
else if(this.id=="finearts_events_3")
{this.jQSelector.css({fontSize:"10px",color:"#928a1d"});}
else if(this.id=="finearts_events_4")
{this.jQSelector.css({fontSize:"8px",color:"#928a1d"});}
else if(this.id=="finearts_events_5")
{this.jQSelector.css({fontSize:"8px",color:"#928a1d"});}
else if(this.id=="finearts_events_6")
{this.jQSelector.css({fontSize:"8px",color:"#928a1d"});}
else if(this.id=="finearts_events_7")
{this.jQSelector.css({fontSize:"16px",color:"#928a1d"});}
else if(this.id=="finearts_events_8")
{this.jQSelector.css({fontSize:"11px",color:"#928a1d"});}
else if(this.id=="finearts_events_11")
{this.jQSelector.css({fontSize:"11px",color:"#928a1d"});}
else if(this.id=="finearts_events_10")
{this.jQSelector.css({fontSize:"25px",color:"#928a1d"});}
else if(this.id=="unwind_events_1")
{this.jQSelector.css({fontSize:"16px",color:"#e35e31"});}
else if(this.id=="unwind_events_9")
{this.jQSelector.css({fontSize:"16px",color:"#e35e31"});}
else if(this.id=="unwind_events_2")
{this.jQSelector.css({fontSize:"12px",color:"#e35e31"});}
else if(this.id=="unwind_events_3")
{this.jQSelector.css({fontSize:"11px",color:"#e35e31"});}
else if(this.id=="unwind_events_4")
{this.jQSelector.css({fontSize:"11px",color:"#e35e31"});}
else if(this.id=="unwind_events_5")
{this.jQSelector.css({fontSize:"11px",color:"#e35e31"});}
else if(this.id=="unwind_events_6")
{this.jQSelector.css({fontSize:"25px",color:"#e35e31"});}
else if(this.id=="unwind_events_8")
{this.jQSelector.css({fontSize:"11px",color:"#e35e31"});}
else if(this.id=="media_events_1")
{this.jQSelector.css({fontSize:"11px",color:"#3e82a9"});}
else if(this.id=="media_events_2")
{this.jQSelector.css({fontSize:"14px",color:"#3e82a9"});}
else if(this.id=="media_events_3")
{this.jQSelector.css({fontSize:"8px",color:"#3e82a9"});}
else if(this.id=="media_events_6")
{this.jQSelector.css({fontSize:"8px",color:"#3e82a9"});}
else if(this.id=="media_events_7")
{this.jQSelector.css({fontSize:"14px",color:"#3e82a9"});}
else if(this.id=="media_events_4")
{this.jQSelector.css({fontSize:"25px",color:"#3e82a9"});}
else if(this.id=="classic_events_1")
{this.jQSelector.css({fontSize:"17px",color:"#4a8e3b"});}
else if(this.id=="classic_events_2")
{this.jQSelector.css({fontSize:"17px",color:"#4a8e3b"});}
else if(this.id=="classic_events_3")
{this.jQSelector.css({fontSize:"25px",color:"#4a8e3b"});}
else if(this.id=="classic_music_events_1")
{this.jQSelector.css({fontSize:"16px",color:"#4a8e3b"});}
else if(this.id=="classic_music_events_2")
{this.jQSelector.css({fontSize:"9px",color:"#4a8e3b"});}
else if(this.id=="classic_music_events_3")
{this.jQSelector.css({fontSize:"25px",color:"#4a8e3b"});}
else if(this.id=="classic_dance_events_1")
{this.jQSelector.css({fontSize:"17px",color:"#4a8e3b"});}
else if(this.id=="classic_dance_events_2")
{this.jQSelector.css({fontSize:"17px",color:"#4a8e3b"});}
else if(this.id=="classic_dance_events_3")
{this.jQSelector.css({fontSize:"25px",color:"#4a8e3b"});}
else if(this.id=="carnival_events_1")
{this.jQSelector.css({fontSize:"10px",color:"#4e3f5e"});}
else if(this.id=="carnival_events_2")
{this.jQSelector.css({fontSize:"13px",color:"#4e3f5e"});}
else if(this.id=="carnival_events_3")
{this.jQSelector.css({fontSize:"25px",color:"#4e3f5e"});}
else if(this.id=="carnival_events_4")
{this.jQSelector.css({fontSize:"17px",color:"#4e3f5e"});}
else if(this.id=="carnival_events_5")
{this.jQSelector.css({fontSize:"13px",color:"#4e3f5e"});}
else if(this.id=="design_events_1")
{this.jQSelector.css({fontSize:"16px",color:"#39a24e"});}
else if(this.id=="design_events_2")
{this.jQSelector.css({fontSize:"10px",color:"#39a24e"});}
else if(this.id=="design_events_3")
{this.jQSelector.css({fontSize:"25px",color:"#39a24e"});}
else if(this.id=="design_events_4")
{this.jQSelector.css({fontSize:"17px",color:"#39a24e"});}
else if(this.id=="design_events_5")
{this.jQSelector.css({fontSize:"12px",color:"#39a24e"});}
else if(this.id=="design_events_6")
{this.jQSelector.css({fontSize:"10px",color:"#39a24e"});}
else if(this.id=="design_lecture_events_1")
{this.jQSelector.css({fontSize:"12px",color:"#c73b3e"});}
else if(this.id=="design_lecture_events_2")
{this.jQSelector.css({fontSize:"10px",color:"#c73b3e"});}
else if(this.id=="design_lecture_events_3")
{this.jQSelector.css({fontSize:"10px",color:"#c73b3e"});}
else if(this.id=="onlinee_events_1")
{this.jQSelector.css({fontSize:"12px",color:"#c73b3e"});}
else if(this.id=="onlinee_events_3")
{this.jQSelector.css({fontSize:"25px",color:"#c73b3e"});}
else if(this.id=="onlinee_events_4")
{this.jQSelector.css({fontSize:"25px",color:"#c73b3e"});}
else if(this.id=="onlinee_events_5")
{this.jQSelector.css({color:"#c73b3e"});}
else if(this.id=="more_events_1")
{this.jQSelector.css({fontSize:"25px",color:"#c73b3e"});}
else if(this.id=="more_events_4")
{this.jQSelector.css({fontSize:"25px",color:"#c73b3e"});}
else if(this.id=="more_events_3")
{this.jQSelector.css({fontSize:"15px",color:"#c73b3e"});}
else if(this.id=="more_events_6")
{this.jQSelector.css({fontSize:"10px",color:"#c73b3e"});}
else if(this.id=="more_events_7")
{this.jQSelector.css({fontSize:"8px",color:"#c73b3e"});}
else if(this.id=="more_events_8")
{this.jQSelector.css({fontSize:"14px",color:"#c73b3e"});}
else if(this.id=="more_events_9")
{this.jQSelector.css({fontSize:"12px",color:"#c73b3e"});}
else if(this.id=="spotlight_events_1")
{this.jQSelector.css({fontSize:"8px",color:"#4e3f5e"});}
else if(this.id=="spotlight_events_2")
{this.jQSelector.css({fontSize:"8px",color:"#3E82A9"});}
else if(this.id=="spotlight_events_10")
{this.jQSelector.css({fontSize:"12px",color:"#3E82A9"});}
else if(this.id=="spotlight_events_14")
{this.jQSelector.css({fontSize:"12px",color:"#3E82A9"});}
else if(this.id=="spotlight_events_11")
{this.jQSelector.css({fontSize:"14px",color:"#c73b3e"});}
else if(this.id=="spotlight_events_3")
{this.jQSelector.css({fontSize:"8px",color:"#e35e31"});}
else if(this.id=="spotlight_events_4")
{this.jQSelector.css({fontSize:"8px",color:"#c73b3e"});}
else if(this.id=="spotlight_events_5")
{this.jQSelector.css({fontSize:"8px",color:"#928a1d"});}
else if(this.id=="spotlight_events_6")
{this.jQSelector.css({fontSize:"8px",color:"#39a24e"});}
else if(this.id=="spotlight_events_7")
{this.jQSelector.css({fontSize:"10px",color:"#46451f"});}
else if(this.id=="spotlight_events_8")
{this.jQSelector.css({fontSize:"8px",color:"#4A8E3B"});}
else if(this.id=="carnival_1")
{this.jQSelector.css({fontSize:"12px",color:"#4E3F5E"});}
else if(this.id=="carnival_2")
{this.jQSelector.css({fontSize:"0.914px",color:"#4E3F5E"});}
else if(this.id=="carnival_3")
{this.jQSelector.css({fontSize:"25px",color:"#4E3F5E"});}
else if(this.id=="carnival_4")
{this.jQSelector.css({fontSize:"8px",color:"#4E3F5E"});}
else if(this.id=="carnival_5")
{this.jQSelector.css({fontSize:"13px",color:"#4E3F5E"});}
else if(this.id=="choreo_1")
{this.jQSelector.css({fontSize:"14px",color:"#3E82A9"});}
else if(this.id=="choreo_2")
{this.jQSelector.css({fontSize:"17px",color:"#3E82A9"});}
else if(this.id=="choreo_3")
{this.jQSelector.css({fontSize:"25px",color:"#3E82A9"});}
else if(this.id=="choreo_4")
{this.jQSelector.css({fontSize:"8px",color:"#3E82A9"});}
else if(this.id=="design_1")
{this.jQSelector.css({fontSize:"15px",color:"#4A8E3B"});}
else if(this.id=="design_2")
{this.jQSelector.css({fontSize:"10px",color:"#4A8E3B"});}
else if(this.id=="design_3")
{this.jQSelector.css({fontSize:"25px",color:"#4A8E3B"});}
else if(this.id=="design_4")
{this.jQSelector.css({fontSize:"8px",color:"#4A8E3B"});}
else if(this.id=="spotlight_events_9")
{this.jQSelector.css({fontSize:"14px",color:"#4E3F5E"});}
else if(this.id=="more_events_3")
{this.jQSelector.css({fontSize:"12px",color:"#c73b3e"});}
else if(this.id=="workshops_events_1")
{this.jQSelector.css({fontSize:"18px",color:"#c73b3e"});}
else if(this.id=="workshops_events_2")
{this.jQSelector.css({fontSize:"15px",color:"#c73b3e"});}
else if(this.id=="workshops_events_3")
{this.jQSelector.css({fontSize:"12px",color:"#c73b3e"});}
else if(this.id=="workshops_events_4")
{this.jQSelector.css({fontSize:"15px",color:"#c73b3e"});}
else if(this.id=="workshops_events_5")
{this.jQSelector.css({fontSize:"11px",color:"#c73b3e"});}
else if(this.id=="workshops_events_6")
{this.jQSelector.css({fontSize:"15px",color:"#c73b3e"});}
else if(this.id=="workshops_events_7")
{this.jQSelector.css({fontSize:"11px",color:"#c73b3e"});}
else if(this.id=="workshops_events_8")
{this.jQSelector.css({fontSize:"25px",color:"#c73b3e"});}
else if(this.id=="workshops_events_10")
{this.jQSelector.css({fontSize:"11px",color:"#c73b3e"});}
else if(this.id=="workshops_events_11")
{this.jQSelector.css({fontSize:"11px",color:"#c73b3e"});}};this.switchPage=function(self){self.parent.switchPage(self);};this.gotoPrevPage=function(self){self.parent.gotoPrevPage(self);};this.detachHandlers=function(){this.jQSelector.unbind("mouseenter");this.jQSelector.unbind("mouseenter");};this.save=function(title,content)
{this.title=title;this.content=content;}
this.attachHandlers=function(){if(this.type=='box_nav')
{this.jQSelector.bind("click",{"box":this},function(event){var self=event.data.box;self.switchPage(self);});if(this.config.hover)
{this.jQSelector.hover(function(){$(this).css({backgroundPosition:'0px 0px'});},function(){var newBgPos="0px -"+$(this).css("height");$(this).css({backgroundPosition:newBgPos});});}}
else if(this.type=='box_close')
{this.jQSelector.bind("click",{"box":this},function(event){var self=event.data.box;self.gotoPrevPage(self);});}
else if(this.type=='box_show')
{this.jQSelector.bind("click",{"box":this},function(event){var self=event.data.box;if(self.title)
{self.parent.popup.putContent(self.title,self.content);}
else
ajax.prepareAndDispatch(self);});if(this.config.hover)
{this.jQSelector.hover(function(){$(this).css({backgroundPosition:'0px 0px'});},function(){var newBgPos="0px -"+$(this).css("height");$(this).css({backgroundPosition:newBgPos});});}}};this.animateHideBox=function()
{};this.animateShowBox=function(position)
{var animateCSS={left:this.position.left,top:this.position.top};var startCSS={width:this.size.width,height:this.size.height,left:position.left,top:position.top};this.show();$("#overlay_events").show();this.jQSelector.css(startCSS).animate(animateCSS,boxMoveTime,function(){$("#overlay_events").hide();});}
this.show=function(){this.jQSelector.css("display","table");};this.hide=function(){this.jQSelector.css("display","none");};this.__init__(parent,index);}
function AJAX(){this.__init__=function(){$("#e_popup").hide();};this.prepareRequestData=function(){this.requestData={url:"",type:'GET',cache:false,data:{'event_id':this.queryId},success:function(data){$("#e_popup").hide();var content=[];var title=$(data).find("event_name").html();if(this.queryId!=33)
{var tags={"Info":"event_writeup","Registration":"event_regtype","Rules":"event_faq","Deadlines":"event_deadlines","Contacts":"contacts"};}
else
{var tags={"Info":"event_writeup","Films":"event_regtype","Rules":"event_faq","Deadlines":"event_deadlines","Contacts":"contacts"};}
var c=0;for(var t in tags)
{var temp=$(data).find(tags[t]).html();if(temp!=''||t=='Info')
{content[c]={title:t,text:temp}
c++;}}
ajax.box.save(title,content);ajax.page.popup.putContent(title,content);ajax.page.ajaxLoader.hide();},error:this.error,timeout:10000};};this.sendRequest=function(){this.prepareRequestData();if(this.request)this.request.abort();this.request=$.ajax(this.requestData);};this.prepareAndDispatch=function(box){this.url="getpageinfo.php";this.box=box;this.page=box.parent;this.page.ajaxLoader.show();this.page.popup.jQSelector.show();this.page.popup.hideTabs();this.page.popup.clear();if(box.config.queryId)
this.queryId=box.config.queryId;else
this.queryId=1;this.error=function(){$("#e_popup").hide();};this.sendRequest();};this.__init__();}
function Popup(parent)
{this.parent=parent;this.jQSelector=$("<div></div>").appendTo(this.parent.jQSelector);this.tabs=[];this.head=null;this.data=null;this.jQSelector.css({position:'absolute',width:300,height:400,top:50,left:450,backgroundColor:this.parent.config.popupbg,padding:20,fontFamily:'Verdana',fontStyle:"normal",zIndex:-1,color:this.parent.config.popTxtColor,display:"none"});this.head=$("<div></div>").appendTo(this.parent.jQSelector);this.head.css({position:"absolute",width:300,top:0,left:450,overflow:"hidden",backgroundColor:this.parent.config.popupbg,fontFamily:'Verdana',padding:"10px 20px",fontSize:"24px",fontStyle:"normal",textAlign:"center",color:this.parent.config.popTxtColor,display:"none"});this.putContent=function(title,data)
{this.data=data;this.destroyTabs();this.head.html(title);this.head.css({fontFamily:'Verdana',color:"#FFF",fontStyle:"normal",fontSize:"24px"});for(var i=0;i<data.length;i++)
{var tab=$("<div></div>").appendTo(this.parent.jQSelector);tab.html(data[i].title);tab.attr("value",0);var content=$("<div></div>").appendTo(tab);content.html(this.data[i].text);content.css({display:"none"});tab.css({position:"absolute",height:20,width:110,top:0+i*30,left:790,overflow:"hidden",backgroundColor:this.parent.config.popupbg,color:this.parent.config.popTxtColor,fontFamily:'Verdana',fontStyle:"normal",color:"#FFF",fontSize:"16px",cursor:"pointer",boxShadow:'black 5px 3px 20px 0px',padding:5,'transition':'padding .3s','-moz-transition':'padding .3s','-webkit-transition':'padding .3s','-o-transition':'padding .3s'});tab.bind("click",{self:this},function(e){var self=e.data.self;self.jQSelector.html($(this).find("div").html());self.jQSelector.find("*").css({fontFamily:'Verdana',color:"#FFF",fontStyle:"normal",fontSize:"15px"});self.jQSelector.css({fontFamily:'Verdana',color:"#FFF",fontStyle:"normal",fontSize:"15px"});self.jQSelector.mCustomScrollbar({scrollButtons:{enable:false}});for(var i=0;i<self.tabs.length;i++)
{if(self.tabs[i].attr("value")==1)
{self.tabs[i].attr("value",0);self.tabs[i].css({overflowX:"visible",paddingLeft:5,paddingRight:5});}}
$(this).attr("value",1);$(this).css({overflowX:"visible",paddingLeft:10,paddingRight:0});});tab.bind("mouseenter",{self:this},function(e){if($(this).attr("value")==0)
{$(this).css({paddingLeft:10,paddingRight:0});}});tab.bind("mouseleave",{self:this},function(e){if($(this).attr("value")==0)
{$(this).css({paddingLeft:5,paddingRight:5});}});this.tabs.push(tab);}
this.show();if(this.tabs.length>0)
this.tabs[0].click();}
this.hide=function()
{this.jQSelector.css({display:"none"});this.head.css({display:"none"});this.hideTabs();}
this.show=function()
{this.jQSelector.css({display:"block",top:this.head.outerHeight(),height:400-this.head.outerHeight()});this.head.css({display:"block"});this.showTabs();}
this.clear=function()
{this.jQSelector.html('');this.head.html('');this.jQSelector.css({top:0,height:400});this.hideTabs();}
this.hideTabs=function()
{for(var i=0;i<this.tabs.length;i++)
{this.tabs[i].css("display","none");}}
this.showTabs=function()
{var maxIndex=this.tabs.length;for(var i=1;i<this.tabs.length;i++)
{this.tabs[i].css({display:"block",marginTop:-30*i}).animate({marginTop:0},300);}}
this.destroyTabs=function()
{for(var i=0;i<this.tabs.length;i++)
{this.tabs[i].remove();}
this.tabs=[];}}