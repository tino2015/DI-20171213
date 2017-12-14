$(document).ready(function(){
	// watch for clicks on the .nav-icon
	// show/hide the .site-nav ul with a sliding motion

	$('.nav-icon').on('click', function(){
		$('.top-nav ul').slideToggle();
		$('');
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
	});


	$(window).on('resize', function(){
		var windowWidth = $(window).width();
console.log(windowWidth);
		if (windowWidth > 640 ) {
			$('.nav-icon').hide();
			$('.top-nav ul').show();
		} else {
			$('.nav-icon').show();
			$('.top-nav ul').hide();
		}
	});

// watch for scroll down and display signup banner

	$(window).on("scroll", function () {
	    if ($(this).scrollTop() > 300) {
	        $(".banner").addClass("visible");
	    }
	    else {
	        $(".banner").removeClass("visible");
	    }
	});

//	$(window).on("scroll", function () {
//	    if ($(this).scrollTop() < 300) {
//	        $(".banner").addClass("hidden");
//	    }
//	    else {
//	        $(".banner").removeClass("hidden");
//	    }
//	});

// Smooth anchor scrolling

  function filterPath(string) {
  return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
  }
  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');
 
  $('a[href*=#]').each(function() {
    var thisPath = filterPath(this.pathname) || locationPath;
    if (  locationPath == thisPath
    && (location.hostname == this.hostname || !this.hostname)
    && this.hash.replace(/#/,'') ) {
      var $target = $(this.hash), target = this.hash;
      if (target) {
        var targetOffset = $target.offset().top;
        $(this).click(function(event) {
          event.preventDefault();
          $(scrollElem).animate({scrollTop: targetOffset}, 100, function() {
            location.hash = target;
          });
        });
      }
    }
  });
 
  // use the first element that is "scrollable"
  function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
      var el = arguments[i],
          $scrollElement = $(el);
      if ($scrollElement.scrollTop()> 0) {
        return el;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop()> 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return el;
        }
      }
    }
    return [];
  }
 



});

