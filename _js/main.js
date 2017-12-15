//Array of images which you want to show: Use path you want.
var images=new Array();
images[0]='img/bg-hero-mood-test1.jpg';
images[1]='img/bg-hero-mood-test2.jpg';
images[2]='img/bg-hero-mood-test3.jpg';
var nextimage=0;
doSlideshow();
function doSlideshow(){
    if(nextimage>=images.length){nextimage=0;}
    $('.hero')
    .css('background-image','url("'+images[nextimage++]+'")')
    .fadeIn(800,function(){
        setTimeout(doSlideshow,1000);
    });
}



$(document).ready(function() {

$(function(){  // $(document).ready shorthand
  $('.contact').fadeIn('slow');
});

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){   

        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
        var bottom_of_object = $(this).position().top + $(this).outerHeight() / 4; /*here is the change*/
        var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > ( bottom_of_object + -100 )  ){
                
                $(this).animate({'opacity':'1'},1250);
                    
            }
            
        }); 
    
    });
    
});

$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});



$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});

function RevealMore()
{
   /* Makes content div height automatic and removes the fade-out div and more link. */
   /* Specify the ID values of the content div, the fade-out div, and the more link. */
   document.getElementById("content-div").style.height = "auto";
   document.getElementById("fade-out").style.display = "none";
   document.getElementById("more-link").style.display = "none";
   var el = document.getElementById("more-content");
   el.classList.remove("fade");
}

function RevealMore2()
{
   /* Makes content div height automatic and removes the fade-out div and more link. */
   /* Specify the ID values of the content div, the fade-out div, and the more link. */
   document.getElementById("content-div2").style.height = "auto";
   document.getElementById("fade-out2").style.display = "none";
   document.getElementById("more-link2").style.display = "none";
   var el = document.getElementById("more-content2");
   el.classList.remove("fade2");
}

function RevealMore3()
{
   /* Makes content div height automatic and removes the fade-out div and more link. */
   /* Specify the ID values of the content div, the fade-out div, and the more link. */
   document.getElementById("content-div3").style.height = "auto";
   document.getElementById("fade-out3").style.display = "none";
   document.getElementById("more-link3").style.display = "none";
   var el = document.getElementById("more-content3");
   el.classList.remove("fade3");
}

function RevealMore4()
{
   /* Makes content div height automatic and removes the fade-out div and more link. */
   /* Specify the ID values of the content div, the fade-out div, and the more link. */
   document.getElementById("content-div4").style.height = "auto";
   document.getElementById("fade-out4").style.display = "none";
   document.getElementById("more-link4").style.display = "none";
   var el = document.getElementById("more-content4");
   el.classList.remove("fade4");
}

function RevealMore5()
{
   /* Makes content div height automatic and removes the fade-out div and more link. */
   /* Specify the ID values of the content div, the fade-out div, and the more link. */
   document.getElementById("content-div5").style.height = "auto";
   document.getElementById("fade-out5").style.display = "none";
   document.getElementById("more-link5").style.display = "none";
   var el = document.getElementById("more-content5");
   el.classList.remove("fade5");
}


var openPhotoSwipe = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: '_img/portfolio/moods/moods1.jpg',
            w: 2400,
            h: 1344,
            title: 'Mood Board 1'
        },
        {
            src: '_img/portfolio/moods/moods2.jpg',
            w: 2400,
            h: 1344
        },
        {
            src: '_img/portfolio/moods/moods3.jpg',
            w: 1992,
            h: 1344
        },
        {
            src: '_img/portfolio/moods/moods4.jpg',
            w: 1968,
            h: 1344
        },        
        {
            src: '_img/portfolio/moods/moods5.jpg',
            w: 2400,
            h: 1344
        },
        {
            src: '_img/portfolio/moods/moods6.jpg',
            w: 2400,
            h: 1344
        },        
        {
            src: '_img/portfolio/moods/moods7.jpg',
            w: 2400,
            h: 1344
        },
        {
            src: '_img/portfolio/moods/moods8.jpg',
            w: 2400,
            h: 1344
        },
        {
            src: '_img/portfolio/moods/moods9.jpg',
            w: 2400,
            h: 1344
        }        
    ];
    
    // define options (if needed)
    var options = {

        showAnimationDuration: 333,
        hideAnimationDuration: 333,
        closeOnScroll: false,
        closeOnVerticalDrag: false
        
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};

openPhotoSwipe();

document.getElementById('gallery-mood').onclick = openPhotoSwipe;