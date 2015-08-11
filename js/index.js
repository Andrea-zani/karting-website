var appear = function() {
    $(".season").mouseenter(function() {
        $(".menu").css("visibility", "visible");
  });
    $(".season").mouseleave(function() {
        $(".menu").css("visibility", "hidden");
    });
};
$(document).ready(appear);

var menuIcon = function() {
  $("svg").click(function(){
    $("nav a").toggle();
  });
};
$(document).ready(menuIcon);
//END FIRST SCRIPT ABOUT MENU-ICON AND DROPDOWN MENU


//DELAY FOR THE NAME ANIAMATION OF THE FIRST SLIDE
$(document).ready(function() {
  titleAnimate();
});

$(document).ready(function() {
  setInterval(function() {
  titleAnimate();
}, 20450);
});

function titleAnimate() {
    $("#name").fadeIn(1000);
    $("#name").delay(3700).fadeOut();
}

//END OF SCRIPT





//STICKY NAVIGATION BAR
var num = 400; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('#wrappermenu').css({"position": "fixed", "background": "rgba(0,0,0, 0.7)"}).addClass('fixed');
    } else {
        $('#wrappermenu').css({"position": "absolute", "background": "rgba(0,0,0, 0.25)"}).removeClass('fixed');
    }
});






//FULLSCREEN SLIDER BASED ON HTML, CSS AND JS
//ok , it's working , we are done , if you want to add imgs you have to :

        //1 - add an img tag with id : Img++; ex:  <img id="Img4" src="IMG/1.jpg"/>
        //2 - add an li tag  with id : S++;   ex:  <li id="S4"></li>
        //3 - add an p tag with id : SP++;    ex:  <p id="SP4"></p>
        //4 - change the value of nrImg

        var nrImg = 4;  //the number of img , I only have 4
        var IntSeconds = 5;     //the seconds between the imgs

        function Load()
        {
            nrShown = 0;    //the img visible
            Vect = new Array(nrImg + 10);
            Vect[0] = document.getElementById("Img1");
            Vect[0].style.visibility = "visible";

            document.getElementById("S" + 0).style.visibility = "visible";

            for (var i = 1; i < nrImg; i++)
            {
                Vect[i] = document.getElementById("Img" + (i + 1));
                document.getElementById("S" + i).style.visibility = "visible";
            }

            document.getElementById("S" + 0).style.backgroundColor = "rgba(255, 255, 255, 0.90)";
            document.getElementById("SP" + nrShown).style.visibility = "visible";

            mytime = setInterval(Timer, IntSeconds * 1000);
        }
        function Timer()
        {
            nrShown++;
            if (nrShown == nrImg)
                nrShown = 0;
            Effect();
        }
        //next img
        function next()
        {
            nrShown++;
            if (nrShown == nrImg)
                nrShown = 0;
            Effect();

            clearInterval(mytime);
            mytime = setInterval(Timer, IntSeconds * 1000);

            if (nrShown == 0) {
                titleAnimate();
            }
        }

        function prev()
        {
            nrShown--;
            if (nrShown == -1)
                nrShown = nrImg -1;
            Effect();

            clearInterval(mytime);
            mytime = setInterval(Timer, IntSeconds * 1000);

            if (nrShown == 0) {
                titleAnimate();
            }
        }
        //here changes the img + effect
        function Effect()
        {
            for (var i = 0; i < nrImg; i++)
            {
                Vect[i].style.opacity = "0";   //to add the fade effect
                Vect[i].style.visibility = "hidden";

                document.getElementById("S" + i).style.backgroundColor = "rgba(0, 0, 0, 0.70)";
                document.getElementById("SP" + i).style.visibility = "hidden";
            }
            Vect[nrShown].style.opacity = "1";
            Vect[nrShown].style.visibility = "visible";
            document.getElementById("S" + nrShown).style.backgroundColor = "rgba(255, 255, 255, 0.90)";
            document.getElementById("SP" + nrShown).style.visibility = "visible";
        }



//END FULLSCREEN SLIDER SCRIPT
