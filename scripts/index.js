const urlDisabled = document.querySelectorAll('.js-disabled');

urlDisabled.forEach(function(url) {
  url.addEventListener("click", function(evt) {
    evt.preventDefault();
  });
});

let swiper = Swiper;
let init = false;

function swiperMode() {
  let mobile = window.matchMedia('(min-width: 320px) and (max-width: 608px)');
  let desktop = window.matchMedia('(min-width: 609px) ');

  if(mobile.matches) {
    if (!init) {
      init = true;
      swiper = new Swiper('.swiper', {  
        slidesPerView: "auto",
        spaceBetween: 50,
        centeredSlides: true,
        pagination: {
          el: '.cards__swipe',
          clickable: true,
          bulletClass: 'cards__dot',
          bulletActiveClass: 'cards__dot_active'
        }
      });
    }   
  }
   

  else if(desktop.matches && init == true) { 
    init = false;
    document.querySelectorAll('.swiper').forEach(function(el) {
      el.swiper.destroy();
    });
  }
} 

window.addEventListener('load', function() {
  swiperMode();
});

window.addEventListener('resize', function() {
  swiperMode();
});