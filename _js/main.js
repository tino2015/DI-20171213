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

