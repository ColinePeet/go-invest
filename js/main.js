//valeur 1 : capture la hauteur à laquelle se situe la nav
let stickyNav = $('.burger-onglet').offset().top; //offset top = ce qu'il y a de top au dessus de la nav

$(window).scroll(function() {
    let scrollTop = $(window).scrollTop();  //valeur 2 :  capture la distance déjà capturée
    if (scrollTop > stickyNav) { //si le scroll est plus grand que la distance entre le top et la nav >
        $('.burger-onglet').addClass('bg-black'); //le coller avec position fixed et bottom auto
    } else {
        $('.burger-onglet').removeClass('bg-black'); //le décoller
    }
});

// classe active lorsque burger cliqué 
let burgerOnglet = document.querySelector(".burger-onglet");
let myBurger = document.querySelector(".burger");
let myMenu = document.querySelector(".menu");
let textOnglet = document.querySelector(".text-onglet");
let bodyBackground = document.querySelector("body");

burgerOnglet.addEventListener("click", function () {
    myBurger.classList.toggle("active");
    myMenu.classList.toggle("active");
    textOnglet.classList.toggle("hidden");
    bodyBackground.classList.toggle("background");
});





//SLIDER HOMEPAGE
$('.parent-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
  
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.child-slider').slick({
    slidesToShow: 1,
    dots: false,
    arrows: true,
    centerMode: true,
    adaptiveHeight: true,
  
    centerPadding: '0',
    responsive: [{breakpoint: 1024,},{breakpoint: 600,},{breakpoint: 480,}]
  })



// swiper index
  var swiperIndex = new Swiper('.swiper-container', {
    spaceBetween: 0,
    effect: 'fade',
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  });

// swiper bien
    var swiper = new Swiper('.swiper-container2', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      effect: 'fade',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      },
    });


// let shareSocial = document.querySelector(".share");
// let socialMedia = document.querySelector(".toggle-media");

// shareSocial.addEventListener("click", function () {
//   socialMedia.classList.toggle("active");
// });


// show more
// $(document).ready(function() {
//   // Configure/customize these variables.
//   var showChar = 100;  // How many characters are shown by default
//   var moretext = "voir plus.";
//   var lesstext = "voir moins";

//   $('.more').each(function() {
//       var content = $(this).html();
//       if(content.length > showChar) {
//           var c = content.substr(0, showChar);
//           var h = content.substr(showChar, content.length - showChar);
//           var html = c + '<span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext ;
//           $(this).html(html);
//       }
//   });

//   $(".morelink").click(function(){
//       if($(this).hasClass("less")) {
//           $(this).removeClass("less");
//           $(this).html(moretext);
//       } else {
//           $(this).addClass("less");
//           $(this).html(lesstext);
//       }
//       $(this).parent().prev().toggle();
//       $(this).prev().toggle();
//       return false;
//   });
// });