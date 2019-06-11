/* Background Black sur Onglet Burger */
let stickyNav = $('.burger-onglet').offset().top; //offset top = ce qu'il y a de top au dessus de la nav

$(window).scroll(function() {
    let scrollTop = $(window).scrollTop();  //valeur 2 :  capture la distance déjà capturée
    if (scrollTop > stickyNav) { //si le scroll est plus grand que la distance entre le top et la nav >
        $('.burger-onglet').addClass('bg-black'); //le coller avec position fixed et bottom auto
    } else {
        $('.burger-onglet').removeClass('bg-black'); //le décoller
    }
});

/* On Click sur Onglet Burger */
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





/* Slider in slider : section nouveautés */
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



/* Social Media toggle */
// let shareSocial = document.querySelector(".share");
// let socialMedia = document.querySelector(".toggle-media");

// shareSocial.addEventListener("click", function () {
//   socialMedia.classList.toggle("active");
// });


/* Page fade-in/fade-out Transition */
$(document).ready(function () {
  registerCssTransitions();
});


/* Scroll Reveal */
let listElement = $(".hidden");

$(window).scroll(function(){
    let scrolling = $(window).scrollTop();
    listElement.each(function(i, element){
        let elementOffset = $(element).offset().top;
        if(scrolling > elementOffset - $(window).height() + 50){
            $(element).addClass("reveal");
        }
    })  
})