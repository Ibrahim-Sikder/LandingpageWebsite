$(document).ready(function(){



    
    
     
    // navbar shrink
    $(window).on('scroll', function(){
        if($(this).scrollTop() > 90){
            $('.navbar').addClass('navbar-shrink');
        }else {
            $('.navbar').removeClass('navbar-shrink');
        }
    });



    // video popup

    const videoSrc = $('#player-1').attr('#src');
    $('.video-play-btn, .video-popup').on('click', function(){
        if($(".video-popup").hasClass('open')){
            $(".video-popup").removeClass('open');
            $('#player-1').attr('src','');

        }
        else{
            $(".video-popup").addClass('open');
            if($('#player-1').attr('src')==''){
                $('#player-1').attr('src',videoSrc);

            }

         

        }

    });

    //owl carousel

    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    })

    // app screenshots item
    $('.screenshots-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:false
            }
        }
    })

    // testimonial carousel
    $('.testimonials-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    })

    // team section styling
    $('.team-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    })

  

    // navbar collapse
    $('.nav-link').on('click', function(){
        $('.navbar-collapse').collapse("hide");
    });
  
   

      
    

  
});

 // topUp 
 $('.top').click (function(){
    $("html, body").animate({
      scrollTop:0
    }, 1000);
  

    $('.top').hide();
    let ourWindow = $(this).scrollTop();
    if(ourWindow<500){
        $(".top").fadeOut();
      }
     else{
        $('.top').fadeIn();
      }
    
  
  });

  
  

  


