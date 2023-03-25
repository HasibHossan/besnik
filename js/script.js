var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    nav.classList.add('bg-light', 'shadow');
  } else {
    nav.classList.remove('bg-light', 'shadow');
  }
});

// oel carosul start

$(".owl-carousel").owlCarousel({
  items: 3,
  loop: true,
  center: true,
  dots: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplaySpeed: 4000,
  autoplayHoverPause:true,
  responsiveClass: true,
  responsive:{
    0:{
        items: 1 
    },
    600:{
        items: 2
    },
    1200:{
        items: 3
    },
    1400:{
      items: 3
    }
}
});


// oel carosul end 
//mixitup
