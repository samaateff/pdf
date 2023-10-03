  // java
  AOS.init({
    once:true,
    mirror:false
  });
    
  // search input
  $('.overlay-content form').hide();
    
  function openSearch() {
      $('#myOverlay').fadeIn(800);
      $('.overlay-content form').fadeIn(500).addClass('active');
      $('.overlay-content form').removeClass('unactive');
      //   $('.overlay-content form').delay(2000).slideDown(2000);
  }

  function closeSearch() {
      $('#myOverlay').fadeOut(800);
      $('.overlay-content form').removeClass('active');
      $('.overlay-content form').fadeIn(500).addClass('unactive');
  }


// navbar code
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});





$(document).ready(function(){
    // clients opinion carousel
    $('.owl-carousel.clientscarousel').owlCarousel({
        loop:true,
        margin:50,
        nav:true,
        dots: false,
        autoplay: true,
        rtl: true,
        center: true,
    autoplayHoverPause:true,
    autoplayHoverPause:true,
    responsiveClass: true,
        responsive:{
            0:{
                nav:false,
                dots:false,
                items:1
            },
            400:{
                nav:false,
                dots:false,
                items:1
            },
            600:{
                nav:false,
                dots:false,
                items:1
            },
            1000:{
                nav: true,
                navText: ["<img src='images/Path3512.svg'>","<img src='images/Path12535.svg'>"],
                items:3
            },
            1200:{
                nav: true,
                navText: ["<img src='images/Path3512.svg'>","<img src='images/Path12535.svg'>"],
                items:3
            },
        }
    });
    // why us carousel 
    $('.owl-carousel.whyuscarousel').owlCarousel({
        loop:true,
        margin:false,
        nav:true,
        dots: false,
        autoplay: true,
        rtl: true,
        center: false,
        autoplayHoverPause:true,
    autoplayHoverPause:true,
    responsiveClass: true,
        responsive:{
            0:{
                items:1
            },
            400:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                nav: true,
                navText: ["<img src='images/Path3512.svg'>","<img src='images/Path12535.svg'>"],

                items:2
            },
            1200:{
                nav: true,
                navText: ["<img src='images/Path3512.svg'>","<img src='images/Path12535.svg'>"],

                items:2
            },
        }
    });


    // common countries section 
    // $(".click").click(function () {
    //   $("div.content").hide("fast");
    //   $("div.content").addClass("d-none");
    //    $(this).find(".arrow").toggleClass('rotate');
    //     $(this).find(".arrow").toggleClass('rotate-reset');
    $(".click").click(function () {
        $(".click").css("border", "1px solid black")
        $(".click").not(this).css("border", "none")
        $(".click").not(this).next("div.content").hide("fast");
        $(".click").not(this).find("div.content").addClass("d-none");
        $(".click").not(this).find(".arrow").removeClass('rotate');
        $(".click").not(this).find(".arrow").addClass('rotate-reset');
        $(this).next("div.content").slideToggle("fast");
        $(this).find("div.content").toggleClass("d-none");
        $(this).find(".arrow").toggleClass('rotate');
        $(this).find(".arrow").toggleClass('rotate-reset');
    });
    
    $(".click").click(function (){
  $('.click').next("div.content").slideToogle("fast") 
    } );
    // jQuery(document).ready(function (e) {
    //     function t(t) {
    //         e(t).bind("click", function (t) {
    //             t.preventDefault();
    //             e(this).parent().fadeOut()
    //         })
    //     }
    //     e(".click").click(function () {
    //         var t = e(this).parents(".button-dropdown").children(".dropdown-menu").is(":hidden");
    //         e(".button-dropdown .dropdown-menu").hide();
    //         e(".button-dropdown .click").removeClass("active");
    //         if (t) {
    //             e(this).parents(".button-dropdown").children(".dropdown-menu").toggle().parents(".button-dropdown").children(".click").addClass("active")
    //         }
    //     });
    //     e(document).bind("click", function (t) {
    //         var n = e(t.target);
    //         if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-menu").hide();
    //     });
    //     e(document).bind("click", function (t) {
    //         var n = e(t.target);
    //         if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .click").removeClass("active");
    //     })
    // });


    // toggle morebtn
    $(".morebtn").click(function () {
        function style (){
        $('.morebtn').css({
            'display' : 'none',
        });
       
    };
    window.setTimeout( style , 1500 );
    });
  });

// loading btn 
const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener('click', () => {
  // Show loader on button click
  loginBtn.classList.add("loading");
  // Hide loader after success/failure - here it will hide after 2seconds
  setTimeout(() => loginBtn.classList.remove("loading"), 1500);
});
//   slide toggle to top btn
$(document).ready(function(){
    $(".morebtn").click(function(){
        function styledisplay (){
            $('.morebtncontent').slideToggle();
            $('.morebtncommon').css({
            'margin-top' : '1em',  
            'display' : 'block',
            });
                
            
        };
        window.setTimeout( styledisplay , 1500 );
    });

  });



        // Hide header on scroll down
        var didScroll;
        var lastScrollTop = 0;
        var delta = 5;
        var navbarHeight = $('nav').outerHeight();
    
        $(window).scroll(function(event){
            didScroll = true;
        });
    
        setInterval(function() {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 250);
    
        function hasScrolled() {
            var st = $(this).scrollTop();
    
            // Make scroll more than delta
            if(Math.abs(lastScrollTop - st) <= delta)
                return;
    
            // If scrolled down and past the navbar, add class .nav-up.
            if (st > lastScrollTop && st > navbarHeight){
                // Scroll Down
                $('nav').removeClass('nav-down').addClass('nav-up');
                if ($(document).scrollTop() > 20) {
                    $('.nav-up').css({
                        'top' : '-140px',
                    });
                    $('nav').addClass('border');
                }else{
                    $('.nav-down').css({
                        'top' : '3em',
                    });
                    $('nav').removeClass('border');
                }
            } else {
                // Scroll Up
                if(st + $(window).height() < $(document).height()) {
                    $('nav').removeClass('nav-up').addClass('nav-down');
                    if ($(document).scrollTop() > 20) {
                        $('.nav-down').css({
                            'top' : '5px',
                            'background' : '#FBF9FE',
                        });
                        $('nav').addClass('border');
                    }else{
                        $('.nav-down').css({
                            'top' : '3em',
                        });
                        $('nav').removeClass('border');
                    }
                }
            }
    
            lastScrollTop = st;
        }
