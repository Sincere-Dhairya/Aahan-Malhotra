$('.slider-class').slick({
  accesssibility: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 5000,
  cssEase:'linear',
  arrows: true,
  prevArrow: "<button type='button' class='slider-b prev-b'><img class='slide-mb' src='assets/Images/prev.svg'></button>",
  nextArrow: "<button type='button' style='float: right;' class='slider-b next-b'><img class='slide-mb' src='assets/Images/next.svg'></button>",
  responsive: [
    {
      breakpoint: 10,
      settings: {
        slidesToSHow: 2
      }
    }
  ]
});
//$('.slider-class').slick();