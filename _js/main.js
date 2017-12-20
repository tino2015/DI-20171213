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

        showAnimationDuration: 333,
        hideAnimationDuration: 333,
        closeOnScroll: false,
        closeOnVerticalDrag: false
        
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
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

        showAnimationDuration: 333,
        hideAnimationDuration: 333,
        closeOnScroll: false,
        closeOnVerticalDrag: false
        
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
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

        showAnimationDuration: 333,
        hideAnimationDuration: 333,
        closeOnScroll: false,
        closeOnVerticalDrag: false
        
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};

var openPhotoSwipeProjects = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: '_img/portfolio/projects/myl/myl-after-10.jpg',
            w: 6161,
            h: 4108,
            title: 'Projects 1'
        },      
        {
            src: '_img/portfolio/projects/myl/myl-after-7.jpg',
            w: 6240,
            h: 4160
        },    
        {
            src: '_img/portfolio/projects/myl/myl-after-2.png',
            w: 1560,
            h: 1040
        },         
        {
            src: '_img/portfolio/projects/myl/myl-after-11.jpg',
            w: 6240,
            h: 4160
        },   
        {
            src: '_img/portfolio/projects/myl/myl-after-9.jpg',
            w: 6231,
            h: 4154
        },    
        {
            src: '_img/portfolio/projects/myl/myl-after-12.jpg',
            w: 3436,
            h: 4932
        }, 
        {
            src: '_img/portfolio/projects/myl/myl-after-3.jpg',
            w: 6237,
            h: 4158
        }, 
        {
            src: '_img/portfolio/projects/myl/myl-after-6.jpg',
            w: 3599,
            h: 5399
        }, 
        {
            src: '_img/portfolio/projects/myl/myl-after-15.jpg',
            w: 3595,
            h: 5392
        },
        {
            src: '_img/portfolio/projects/myl/myl-after-14.jpg',
            w: 4160,
            h: 6240
        }, 
        {
            src: '_img/portfolio/projects/myl/myl-after-13.jpg',
            w: 6240,
            h: 4160
        },  
        {
            src: '_img/portfolio/projects/myl/myl-after-5.jpg',
            w: 6240,
            h: 4160,
        },  
        {
            src: '_img/portfolio/projects/myl/myl-after-4.jpg',
            w: 6240,
            h: 4160
        },  
        {
            src: '_img/portfolio/projects/myl/myl-after-8.jpg',
            w: 6240,
            h: 4160
        },                                                         
        {
            src: '_img/portfolio/projects/myl/myl-after-1.png',
            w: 1331,
            h: 1997
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

