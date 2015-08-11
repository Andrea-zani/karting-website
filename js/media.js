//STICKY NAVIGATION BAR
/*var num = 550; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('#wrappermenu').css({"position": "fixed", "background": "rgba(0,0,0, 1)"}).addClass('fixed');
    } else {
        $('#wrappermenu').css({"position": "absolute", "background": "rgba(0,0,0, 0.25)"}).removeClass('fixed');
    }
});*/

$(document).ready(function() {
  var itemColor = $("#wrappermenu a");
  var nav = $("#wrappermenu");
  itemColor.css("color", "black");
  nav.css("background", "white");
});
