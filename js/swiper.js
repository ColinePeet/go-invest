/* Swiper 1 : Homepage */
var swiperIndex = new Swiper('.swiper-container', {
  spaceBetween: 0,
  effect: 'fade',
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});

/* Swiper 2 : Page bien */
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