$("#slideshow_spon > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow_spon > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow_spon');
},  6000);