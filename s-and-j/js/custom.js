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
  
 /* RSVP Password show/hide */
$('#RSVPpwd').keyup(function()
{
    if($('#RSVPpwd').val() == 'snj2014')
    {
        $('#enterPassword').css('display', 'none');
		$('#RSVPspacerIfNoPassProvided').css('display', 'none');
    }
    else
    {
        $('#enterPassword').css('visibility', 'visible');
		$('#RSVPspacerIfNoPassProvided').css('visibility', 'visible');
    }
});

 /* RSVP content enable on correct password */
 $('#RSVPpwd').on('keyup', function() {
    $('#correctPassword').toggle(this.value.trim().toLowerCase() == 'snj2014');
});


/* Hide guest # and guest names until Attending=Yes has been selected*/
 $('#group_763734732_1').click(function() 
 {
	if($('#group_763734732_1').val() == 'Yes')   
	{	
	$('#GuestNumber').css('display', 'inline');
	$('#AdditionalGuestNames').css('display', 'inline');
	$('#LeaveAMessage').css('display', 'inline');
	}
	else
	{
	$('#GuestNumber').css('display', 'none');
	$('#AdditionalGuestNames').css('display', 'none');
	$('#LeaveAMessage').css('display', 'inline');
	}
});

 $('#group_763734732_2').click(function() 
 {
	if($('#group_763734732_2').val() == 'No')   
	{	
	$('#GuestNumber').css('display', 'none');
	$('#AdditionalGuestNames').css('display', 'none');
	$('#LeaveAMessage').css('display', 'inline');
	}
	else
	{
	$('#GuestNumber').css('display', 'inline');
	$('#AdditionalGuestNames').css('display', 'inline');
	$('#LeaveAMessage').css('display', 'inline');
	}
});

/* Require # of guests attending */

