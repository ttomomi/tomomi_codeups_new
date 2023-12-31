
jQuery(function ($) { 
  // ヘッダー
$('.js-hamburger').on('click', function () {
  if ($('.js-hamburger').hasClass('is-open')) {
    $('.js-drawer-menu').removeClass('is-open');
    $(this).removeClass('is-open');
    $('body').css('overflow-y','auto'); 
  } else {
    $('.js-drawer-menu').addClass('is-open');
    $(this).addClass('is-open');
    $('body').css('overflow-y', 'hidden');
  }
});

// ページトップ
$(function () {
  const pageTop = $(".page-top");
  pageTop.hide();
  $(window).scroll(function () {
    const sliderHeight = $(".fv").height();
    if ($(this).scrollTop() > sliderHeight) { 
      pageTop.fadeIn(); 
    } else {
      pageTop.fadeOut();
    }
  });
  pageTop.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0, 
      },
      500 
    );
    return false;
  });
});

// フッター手前でストップ
$(".page-top").hide();
$(window).on("scroll", function () {
  var scrollHeight = $(document).height();
  var scrollPosition = $(window).height() + $(window).scrollTop();
  var footHeight = $("footer").innerHeight();

  if (scrollHeight - scrollPosition <= footHeight + 16) {

    $(".page-top").css({
      position: "absolute",
      bottom: footHeight + 16,
    });
  } else {
    $(".page-top").css({
      position: "fixed",
      bottom: 16,
    });
  }
});

});

// ファーストビュースライダー
const swiper01 = new Swiper(".js-fv-swiper", {
  loop: true,
  effect: "fade", 
  autoplay: {
    delay: 4000, 
    disableOnInteraction: false, 
  },
  speed: 2000, 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// キャンペーンカードスライダー
const mySwiper02 = new Swiper('.js-campaign-swiper ', {
  loop: true,
  loopSlide: 8,
  speed: 2000,
  slidesPerView: '1.22',
  spaceBetween: 24,
  grabCursor: true,
  width: 280,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      spaceBetween: 40,
      slidesPerView: '3.5',
      width: 1265.5,
    },
    1920: {
      slidesPerView: "5",
      spaceBetween: 40,
      width: 1825,
    },
  },
  pagination: {
    el: '.js-campaign-card .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

// カーテン information
gsap.to(".js-information-slide", {
  width: "150%",
  left: "150%",
  duration: 1.5,
  scrollTrigger: {
    trigger: '.about',
    start:'center',
  },
  
})
// カーテン voice
ScrollTrigger.matchMedia({
  "(min-width: 768px)": function () {
gsap.to(".js-voice-card-slide", {
  width: "150%",
  left: "150%",
  duration: 1.5,
  scrollTrigger: {
    trigger: '.blog',
    start:'top ',
    // markers: true,
  },
});
},
  "(max-width: 767px)": function () {
    gsap.to(".js-voice-card-slide", {
        width: "150%",
        left: "150%",
        duration: 1.5,
        scrollTrigger: {
          trigger: '.blog',
          start:'bottom-=100 ',
          // markers: true,
        },
    });
  },
  
})


// カーテン price
gsap.to(".js-price-slide", {
  width: "150%",
  left: "150%",
  duration: 1.5,
  scrollTrigger: {
    trigger: '.voice',
    start:'center',
    // markers: true,
  },
  
})