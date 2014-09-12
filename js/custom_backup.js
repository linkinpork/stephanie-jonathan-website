/* FlexSlider */

$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: true,
    pauseOnHover: true,
    slideshowSpeed: 15000,
    prevText: "", 
    nextText: ""
  });
});


/* Scroll to Top */

  $(".totop").hide();

  $(function(){
    $(window).scroll(function(){
      if ($(this).scrollTop()>300)
      {
        $('.totop').slideDown();
      } 
      else
      {
        $('.totop').slideUp();
      }
    });

    $('.totop a').click(function (e) {
      e.preventDefault();
      $('body,html').animate({scrollTop: 0}, 500);
    });

  });
  
  
  /* Brian's Dropdown js code */
  
  


  $('.dropdown:first').click(function(){
    $('#menu1').hide();
  });
  $('.dropdown:last').click(function(){
    $('#menu2').hide();
  })

  $('.dropdown:first').hover(
    function() {
      $('.dropdown:first').addClass('open');
      $('#menu1').show();
    }, 
    function() {
      $('.dropdown:first').removeClass('open');
      $('#menu1').hide();
    }
  );

  $('.dropdown:last').hover(
    function() {
      $('.dropdown:last').addClass('open');
      $('#menu2').show();
    }, 
    function() {
      $('.dropdown:last').removeClass('open');
      $('#menu2').hide();
    }
  );

  // $('div').not('button.navbar-toggle').click(
  //   function(){
  //     $('.bs-navbar-collapse').css("height", "1px");
  //     $('.bs-navbar-collapse').removeClass('in');
  //     $('.bs-navbar-collapse').addClass('collapse');
  // });

  $('.anchorLink').click(
    function(){
      $('.bs-navbar-collapse').css("height", "1px");
      $('.bs-navbar-collapse').removeClass('in');
      $('.bs-navbar-collapse').addClass('collapse');
  });
});
