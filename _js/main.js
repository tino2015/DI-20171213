//
//SLIDESHOW
//
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

//
//FADE IN
//
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
            if( bottom_of_window > ( bottom_of_object + -00 )  ){
                
                $(this).animate({'opacity':'1'},1250);
                    
            }
            
        }); 

                $('.hideme-events').each( function(i){
            
        var bottom_of_object = $(this).position().top + $(this).outerHeight() / 4; /*here is the change*/
        var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > ( bottom_of_object + -900 )  ){
                
                $(this).animate({'opacity':'1'},1250);
                    
            }
            
        }); 
    
    });
    
});

//
//BACK TO TOP SCROLL
//
$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
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


//
//READ MORE
//
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

//
//PHOTO GALLERY
//
var openPhotoSwipeMood = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: '_img/portfolio/moods/moods3.jpg',
            w: 1992,
            h: 1344,
            title: 'Residential project - Kitchen/living area'
        },
        {
            src: '_img/portfolio/moods/moods6.jpg',
            w: 2400,
            h: 1344,
            title: 'Residential project - Kitchen/living area'
        },        
        {
            src: '_img/portfolio/moods/moods7.jpg',
            w: 2400,
            h: 1344,
            title: 'Residential project - Living room colour scheme'
        },
        {
            src: '_img/portfolio/moods/moods9.jpg',
            w: 2400,
            h: 1344,
            title: 'Residential project - Hand sketch of Kitchen concept'
        },
        {
            src: '_img/portfolio/moods/newmoods1.jpg',
            w: 2235,
            h: 1344,
            title: '"Planche tendance" - Navy & mustard'
        },
        {
            src: '_img/portfolio/moods/newmoods2.jpg',
            w: 3199,
            h: 1995,
            title: '"Planche tendance" - Navy & mustard'
        },
        {
            src: '_img/portfolio/moods/newmoods8.jpg',
            w: 2400,
            h: 1310,
            title: 'Winter mood and inspiration'
        },
        {
            src: '_img/portfolio/moods/newmoods3.jpg',
            w: 1398,
            h: 1343,
            title: 'Residential project - Bedroom aqua'
        },
        {
            src: '_img/portfolio/moods/newmoods6.jpg',
            w: 1793,
            h: 1344,
            title: 'Wallpaper stripes'
        },
        {
            src: '_img/portfolio/moods/newmoods7.jpg',
            w: 1626,
            h: 1344,
            title: 'White dots Wallpaper'
        }
    ];
    
    // define options (if needed)
    var options = {
        shareEl: false,
        zoomEl: false,
        closeOnScroll: false,
        closeOnVerticalDrag: false,
        showAnimationDuration: 333,
        hideAnimationDuration: 333        
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();

    gallery.options.maxSpreadZoom = gallery.getZoomLevel();
    gallery.options.getDoubleTapZoom = function(isMouseClick, item) {
    return item.initialZoomLevel;
    }
};




var openPhotoSwipeCgi = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: '_img/portfolio/cgi/paris-living1.jpg',
            w: 3360,
            h: 1619,
            title: 'Residential project - Living room layout'
        },       
        {
            src: '_img/portfolio/cgi/paris-living3tv.jpg',
            w: 1828,
            h: 1556,
            title: 'Residential project - TV unit composition'
        },        
        {
            src: '_img/portfolio/cgi/flat-living1.jpg',
            w: 3360,
            h: 1617,
            title: 'Residential project - Living room layout'
        },
        {
            src: '_img/portfolio/cgi/flat-living2.jpg',
            w: 3360,
            h: 1615,
            title: 'Residential project - Desk/furniture composition'
        },
        {
            src: '_img/portfolio/cgi/myleasing1.jpg',
            w: 3360,
            h: 1621,
            title: 'Commercial project - Office'
        },        
        {
            src: '_img/portfolio/cgi/myleasing3.jpg',
            w: 3360,
            h: 1615,
            title: 'Commercial project - Meeting room concept'
        },
        {
            src: '_img/portfolio/cgi/myleasing2.jpg',
            w: 2903,
            h: 1618,
            title: 'Commercial project - Entrance/reception area composition'
        }
    ];
    
    // define options (if needed)
    var options = {
        shareEl: false,
        zoomEl: false,
        closeOnScroll: false,
        closeOnVerticalDrag: false,
        showAnimationDuration: 333,
        hideAnimationDuration: 333        
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();

    gallery.options.maxSpreadZoom = gallery.getZoomLevel();
    gallery.options.getDoubleTapZoom = function(isMouseClick, item) {
    return item.initialZoomLevel;
    }
};

var openPhotoSwipePlans = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: '_img/portfolio/plans/plans4.jpg',
            w: 1076,
            h: 853,
            title: 'Commercial project - Layout for offices'
        }, 
        {
            src: '_img/portfolio/plans/plans6.jpg',
            w: 1073,
            h: 848,
            title: 'Commercial project - Lighting plan for offices concept'
        },     
        {
            src: '_img/portfolio/plans/plans5.jpg',
            w: 1071,
            h: 845,
            title: 'Residential project - Layout for ground floor Kitchen/living'
        },   
        {
            src: '_img/portfolio/plans/plans2.jpg',
            w: 1082,
            h: 853,
            title: 'Residential project - Layout for living/dining room'
        },             
        {
            src: '_img/portfolio/plans/plans1.jpg',
            w: 1075,
            h: 841,
            title: 'Residential project - Wardrobe elevation'
        },
        {
            src: '_img/portfolio/plans/plans3.jpg',
            w: 1074,
            h: 844,
            title: 'Commercial project - Meeting room elevation concept'
        },   
        {
            src: '_img/portfolio/plans/pres2.jpg',
            w: 1225,
            h: 912,
            title: 'Residential project - Products presentation'
        },
        {
            src: '_img/portfolio/plans/pres1.jpg',
            w: 1231,
            h: 920,
            title: 'Residential project - Products presentation'
        }           
    ];
    
    // define options (if needed)
    var options = {
        shareEl: false,
        zoomEl: false,
        closeOnScroll: false,
        closeOnVerticalDrag: false,
        showAnimationDuration: 333,
        hideAnimationDuration: 333        
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();

    gallery.options.maxSpreadZoom = gallery.getZoomLevel();
    gallery.options.getDoubleTapZoom = function(isMouseClick, item) {
    return item.initialZoomLevel;
    }
};

var openPhotoSwipeProjects = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
       {
            src: '_img/portfolio/projects/paris/paris1.jpg',
            w: 3000,
            h: 2000,
            title: 'Paris Residential - Living Room'
        },     
       {
            src: '_img/portfolio/projects/paris/paris2.jpg',
            w: 2000,
            h: 3000,
            title: 'Paris Residential - Living Room'
        },       
       {
            src: '_img/portfolio/projects/paris/paris3.jpg',
            w: 2000,
            h: 3000,
            title: 'Paris Residential - Living Room'
        },      
       {
            src: '_img/portfolio/projects/paris/paris4.jpg',
            w: 3000,
            h: 2000,
            title: 'Paris Residential - Living Room'
        },     
       {
            src: '_img/portfolio/projects/paris/paris5.jpg',
            w: 2000,
            h: 3000,
            title: 'Paris Residential - Living Room'
        },          
       {
            src: '_img/portfolio/projects/paris/paris6.jpg',
            w: 3000,
            h: 2000,
            title: 'Paris Residential - Living Room'
        },       
       {
            src: '_img/portfolio/projects/paris/paris7.jpg',
            w: 3000,
            h: 2000,
            title: 'Paris Residential - Living Room'
        },         
       {
            src: '_img/portfolio/projects/paris/paris8.jpg',
            w: 2000,
            h: 3000,
            title: 'Paris Residential - Bedroom'
        },       
       {
            src: '_img/portfolio/projects/paris/paris9.jpg',
            w: 2000,
            h: 3000,
            title: 'Paris Residential - Bathroom'
        },        
       {
            src: '_img/portfolio/projects/paris/paris10.jpg',
            w: 2000,
            h: 3000,
            title: 'Paris Residential - Bathroom'
        },         
       {
            src: '_img/portfolio/projects/paris/paris11.jpg',
            w: 3000,
            h: 2000,
            title: 'Paris Residential - Kitchen'
        },        
       {
            src: '_img/portfolio/projects/paris/paris12.jpg',
            w: 2000,
            h: 3000,
            title: 'Paris Residential - Kitchen'
        },         
       {
            src: '_img/portfolio/projects/paris/paris13.jpg',
            w: 2000,
            h: 3000,
            title: 'Paris Residential - Living Room'
        },         
       {
            src: '_img/portfolio/projects/paris/paris14.jpg',
            w: 2000,
            h: 3000,
            title: 'Paris Residential - Kitchen'
        },        
       {
            src: '_img/portfolio/projects/paris/paris15.jpg',
            w: 2000,
            h: 3000,
            title: 'Paris Residential - Living Room'
        },        
       {
            src: '_img/portfolio/projects/paris/paris16.jpg',
            w: 2000,
            h: 3000,
            title: 'Paris Residential - Living Room'
        },        
       {
            src: '_img/portfolio/projects/paris/paris17.jpg',
            w: 2000,
            h: 3000,
            title: 'Paris Residential - Living Room'
        },        
       {
            src: '_img/portfolio/projects/paris/paris18.jpg',
            w: 2000,
            h: 3000,
            title: 'Paris Residential - Bedroom'
        },       
       {
            src: '_img/portfolio/projects/paris/paris19.jpg',
            w: 2000,
            h: 3000,
            title: 'Paris Residential - Hallway'
        },       
       {
            src: '_img/portfolio/projects/paris/paris20.jpg',
            w: 2000,
            h: 3000,
            title: 'Paris Residential - Bedroom'
        },         
       {
            src: '_img/portfolio/projects/paris/paris21.jpg',
            w: 3000,
            h: 2000,
            title: 'Paris Residential - Living Room'
        },         
        {
            src: '_img/portfolio/projects/courbevoie/courbevoie1.jpg',
            w: 2596,
            h: 3462,
            title: 'Courbevoie Residential - Bedroom'
        },
        {
            src: '_img/portfolio/projects/courbevoie/courbevoie2.jpg',
            w: 4032,
            h: 3024,
            title: 'Courbevoie Residential - Bedroom'
        },
        {
            src: '_img/portfolio/projects/courbevoie/courbevoie3.jpg',
            w: 3072,
            h: 5472,
            title: 'Courbevoie Residential - Bedroom'
        },
        {
            src: '_img/portfolio/projects/courbevoie/courbevoie4.jpg',
            w: 3072,
            h: 5472,
            title: 'Courbevoie Residential - Bedroom'
        },     
        {
            src: '_img/portfolio/projects/wandsworth/ww1.jpg',
            w: 1204,
            h: 1769,
            title: 'London Residential - Living room'
        },     
        {
            src: '_img/portfolio/projects/wandsworth/ww2.jpg',
            w: 1334,
            h: 2400,
            title: 'London Residential - Living room'
        },     
        {
            src: '_img/portfolio/projects/wandsworth/ww3.jpg',
            w: 1058,
            h: 1890,
            title: 'London Residential - Living room'
        },     
        {
            src: '_img/portfolio/projects/wandsworth/ww4.jpg',
            w: 1336,
            h: 2386,
            title: 'London Residential - Living room'
        },     
        {
            src: '_img/portfolio/projects/wandsworth/ww5.jpg',
            w: 2023,
            h: 1344,
            title: 'London Residential - Living room'
        },     
        {
            src: '_img/portfolio/projects/wandsworth/ww6.jpg',
            w: 1328,
            h: 2371,
            title: 'London Residential - Living room'
        },     
        {
            src: '_img/portfolio/projects/wandsworth/ww7.jpg',
            w: 1207,
            h: 2156,
            title: 'London Residential - Living room'
        },             
        {
            src: '_img/portfolio/projects/myl/myl-after-10.jpg',
            w: 6161,
            h: 4108,
            title: 'Paris Office - Meeting room'
        },      
        {
            src: '_img/portfolio/projects/myl/myl-after-7.jpg',
            w: 6240,
            h: 4160,
            title: 'Paris Office - Meeting room'
        },    
        {
            src: '_img/portfolio/projects/myl/myl-after-2.jpg',
            w: 1560,
            h: 1040,
            title: 'Paris Office - Meeting room'
        },         
        {
            src: '_img/portfolio/projects/myl/myl-after-11.jpg',
            w: 6240,
            h: 4160,
            title: 'Paris Office - Office 1'
        },   
        {
            src: '_img/portfolio/projects/myl/myl-after-9.jpg',
            w: 6231,
            h: 4154,
            title: 'Paris Office - Office 1'
        },    
        {
            src: '_img/portfolio/projects/myl/myl-after-12.jpg',
            w: 3436,
            h: 4932,
            title: 'Paris Office - Meeting room'
        }, 
        {
            src: '_img/portfolio/projects/myl/myl-after-3.jpg',
            w: 6237,
            h: 4158,
            title: 'Paris Office - Bathroom'
        }, 
        {
            src: '_img/portfolio/projects/myl/myl-after-6.jpg',
            w: 3599,
            h: 5399,
            title: 'Paris Office - Kitchen'
        }, 
        {
            src: '_img/portfolio/projects/myl/myl-after-15.jpg',
            w: 3595,
            h: 5392,
            title: 'Paris Office - Kitchen/Bathroom'
        },
        {
            src: '_img/portfolio/projects/myl/myl-after-14.jpg',
            w: 4160,
            h: 6240,
            title: 'Paris Office - Reception'
        }, 
        {
            src: '_img/portfolio/projects/myl/myl-after-5.jpg',
            w: 6240,
            h: 4160,
            title: 'Paris Office - Reception'
        },  
        {
            src: '_img/portfolio/projects/myl/myl-after-4.jpg',
            w: 6240,
            h: 4160,
            title: 'Paris Office - Wallpaper'
        },  
        {
            src: '_img/portfolio/projects/myl/myl-after-8.jpg',
            w: 6240,
            h: 4160,
            title: 'Paris Office - Wallpaper'
        },                                                         
        {
            src: '_img/portfolio/projects/myl/myl-after-1.jpg',
            w: 1331,
            h: 1997,
            title: 'Paris Office - Flooring'
        }                                                                                         
    ];
    
    // define options (if needed)
    var options = {
        shareEl: false,
        zoomEl: false,
        closeOnScroll: false,
        closeOnVerticalDrag: false,
        showAnimationDuration: 333,
        hideAnimationDuration: 333        
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();

    gallery.options.maxSpreadZoom = gallery.getZoomLevel();
    gallery.options.getDoubleTapZoom = function(isMouseClick, item) {
    return item.initialZoomLevel;
    }

};

