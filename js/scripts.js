$(function() {

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 800);
        return false;
      }
    }
  });



  $('.gallery_item').hover(function(){
    $(this).find('.overlay').fadeIn('300');
  }, function() {
    $(this).find('.overlay').fadeOut('100');
  });

  // function scrollToAnchor(aid){
  //   var aTag = $("#gallery");
  //   $('html,body').animate({scrollTop: aTag.offset().top});
  // }

  // $("#filters li").click(function() {
  //    // scrollToAnchor('#gallery');
  // });

  $(".header #menu").on('mouseenter mouseleave click', function() { 
    $(".header #menu div").fadeToggle('slow',"swing");
  });

  $(".header #menu a").hover(function() {
    $(this).toggleClass('white_li');
  });

  $("#set_description_contact #contact_mail a").hover(function() {
    $(this).toggleClass('mail_hover');
  });

  $("#gallery_link img").hover(function() { 
    $("#gallery_link p").fadeTo(600, 1); 
  }, function() { 
    $("#gallery_link p").fadeTo(600, 0); 
  });

  $('#filters li').hover(function (){
    $(this).toggleClass('filter_color');
  });

});

//isotope




$(document).ready(function () {  
  var top = $('.sticky_header').offset().top;
  $(window).scroll(function (event) {
  var y = $(this).scrollTop();
    if (y >= top) {
      $('.sticky_header').addClass('fixed');
      $('#filters').addClass('fixed_filter');
    } else {
      $('.sticky_header').removeClass('fixed');
      $('#filters').removeClass('fixed_filter');
    }
    // $('.sticky_header').width($('.sticky_header').parent().width());
    });
});

$(function() {
	var pulse = $('.header #menu img');
  var pulseFast = $('#gallery_link img');

	function runItSlow() {
		pulse.animate({opacity:'+=0.8'}, 2000);
		pulse.animate({opacity:'-=0.8'}, 2000, runItSlow);
	}

  function runItFast() {
    pulseFast.animate({opacity:'+=1'}, 1000);
    pulseFast.animate({opacity:'-=0.5'}, 1000, runItFast);
  }
	runItSlow();
  runItFast();
});

// $(function () {
//   var size_li = $("#album_covers .gallery_item img").size();
//   x=4;
//   $('#album_covers .gallery_item img:lt('+x+')').show();
//   $('#load_more').on("click", function () {
//       x= (x+4 <= size_li) ? x+4 : size_li;
//       $('#album_covers .gallery_item img:lt('+x+')').show();
//        // $('#showLess').show();
//       if(x == size_li){
//           $('#load_more').hide();
//       }
//   });
// });