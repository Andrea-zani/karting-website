//STICKY NAVIGATION BAR
/*var num = 500; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('#wrappermenu').css({"position": "fixed", "background": "rgba(0,0,0, 1)"}).addClass('fixed');
    } else {
        $('#wrappermenu').css({"position": "absolute", "background": "rgba(0,0,0, 0.25)"}).removeClass('fixed');
    }
});*/

//ANIMATE THE CSS FOR NEWS LIST
$(document).ready(function() {
  var listHeight = $(".list").outerHeight();
  var div = $(".conteiners");
  $(".selection").click(function() {
      if(div.is(":hidden")) {
        div.slideDown(1000, function() {
          $(".divnews").animate({top: listHeight});
    });
  } else {
      div.slideUp(1000, function() {
        $(".divnews").animate({top: -listHeight});
    });
  }
});
});


$(document).ready(function(){
  var newsHeight = $(".divNews");
  var imageHeight = $("#divImage").outerHeight();
  var text = $("#divImage p");
  var title = $("#divImage h2");
  newsHeight.css("height", imageHeight);
});

//CHANGING TEXT AND IMAGE BY CLICKING ON A DIV
