$(document).ready(function() {
  var divs = $('div.educationText, div.educationImage, div.sphero, div.mistiGTL, div.EMC, div.WineDefined, div.MediaLab, div.scla, div.sbc, div.football, div.saac, div.upperMe, div.links');
  divs.hide();
  var introSectionTop = $("div.introSection").offset().top - 100; 
  var experienceSectionTop = $("div.experienceSection").offset().top - 100;
  var educationSectionTop = $("div.educationSection").offset().top - 100;
  var extracurricularSectionTop = $("div.extracurricularSection").offset().top - 100;
  var meSectionTop = $("div.meSection").offset().top - 100;
  // window.alert($(window).scrollTop());
  // window.alert(educationSectionTop);
  
  var lastScrollTop = 0;
  $(window).scroll(function(){
    var st = $(this).scrollTop();
    if($(window).scrollTop()>50 && st > lastScrollTop ){
             $('div.firstNameText').fadeOut('slow');

       }else if($(window).scrollTop() <65 && st < lastScrollTop){
              $('div.firstNameText').fadeIn('slow');

       }
       if($(window).scrollTop() >210 && st > lastScrollTop) {
             $('div.lastNameText').fadeOut('slow');
       }else if($(window).scrollTop() <280 && st < lastScrollTop){
              $('div.lastNameText').fadeIn('slow');

       }if($(window).scrollTop() >300 && st > lastScrollTop && $(window).scrollTop() < educationSectionTop + 240) {
             $('div.educationImage').fadeIn('slow');
             $('div.educationText').fadeIn('slow');
       }else if($(window).scrollTop() > educationSectionTop + 240 && st > lastScrollTop){
              $('div.educationImage').fadeOut('slow');
              $('div.educationText').fadeOut('slow');
       }else if(st < lastScrollTop){
              $('div.educationImage').fadeIn('slow');
              $('div.educationText').fadeIn('slow');
       }if($(window).scrollTop() >1050 ) {
             $('div.MediaLab').fadeIn(2500);
             
       }if($(window).scrollTop() >1600 ) {
             $('div.WineDefined').fadeIn(2500);
             
       }if($(window).scrollTop() >2050 ) {
        
             $('div.mistiGTL').fadeIn(2500);
             
       }
       if($(window).scrollTop() >2650 ) {
             $('div.sphero').fadeIn(2500);
             
       }if($(window).scrollTop() >3050 ) {
             $('div.EMC').fadeIn(2500);
             
       }if($(window).scrollTop() >4050 ) {
             $('div.sbc').fadeIn(2500);
             
       }if($(window).scrollTop() >4350 ) {
             $('div.football').fadeIn(2500);
             
       }if($(window).scrollTop() >4650 ) {
             $('div.saac').fadeIn(2500);
             
       }if($(window).scrollTop() >4800 ) {
             $('div.scla').fadeIn(2500);
             
       }if($(window).scrollTop() >=4800 ) {
             $('div.links').fadeIn(2500);
             $('div.upperMe ').fadeIn(2500);
             
       }






       lastScrollTop = st;
    
  });
  
  $("a.topPageLink").click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1000, 'easeInOutExpo', function() {});
    return false;

    });

   



  // $(function() {
  // $("div.introSection").hide().fadeIn(4000);
  // });

    // $(window).scroll( function(){
    
    //     /* Check the location of each desired element */
    //     $('.experienceSection').each( function(i){
            
    //         var bottom_of_object = $(this).position().top + $(this).outerHeight();
    //         var bottom_of_window = $(window).scrollTop() + $(window).height();
            
    //         /* If the object is completely visible in the window, fade it it */
    //         if( bottom_of_window > bottom_of_object ){
                
    //             $(this).animate({'opacity':'1'},500);
                    
    //         }
            
    //     }); 

   

  // $(window).scroll(function(){
  //       var divs = $('div.introSection, div.experienceSection, div.educationSection, div.extracurricularSection');
  //       divs.hide();
  //       var posFromTop = $(window).scrollTop();

  //       if(posFromTop > 200){
  //       // if more than 200px from the top do something


  //       } else {
  //       // otherwise do something else.

  //       }
  //   });
  

  // $("a.contact-nav-link").click(function() {
  //   $('html, body').animate({
  //     scrollTop: $("div.footer").offset().top - 100
  //   }, 1000, 'easeInOutExpo', function() {});
  //   return false;
  // });

  // $("a.skillsLink").click(function() {
  //   // $('div.skillsSection').fadeIn(4000);
  //   $('html, body').animate({
  //     scrollTop: $("div.skillsSection").offset().top - 100
  //   }, 1000, 'easeInOutExpo', function() {});
  //   return false;
  // });

  $("a.extracurricularLink").click(function() {
    $('html, body').animate({
      scrollTop: $("div.extracurricularSection").offset().top - 100
    }, 1000, 'easeInOutExpo', function() {});
    return false;
  });

  $("a.experienceLink").click(function() {
    $('html, body').animate({
      scrollTop: $("div.experienceSection").offset().top - 100
    }, 1000, 'easeInOutExpo', function() {});
    return false;
  });

  $("a.educationLink").click(function() {
    $('html, body').animate({
      scrollTop: $("div.educationSection").offset().top - 100
    }, 1000, 'easeInOutExpo', function() {});
    return false;
  });
  $("a.meLink").click(function() {
    $('html, body').animate({
      scrollTop: $("div.meSection").offset().top - 100
    }, 1000, 'easeInOutExpo', function() {});
    return false;
  });

  /* Every time the window is scrolled ... */
    
    




});