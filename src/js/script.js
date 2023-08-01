
jQuery(function ($) { 
  // ヘッダー
$('.js-hamburger').on('click', function () {
  if ($('.js-hamburger').hasClass('is-open')) {
    // $('.js-drawer-menu').fadeOut();
    $('.js-drawer-menu').removeClass('is-open');
    $(this).removeClass('is-open');
  //自分で追加　背景スクロールの抑制
    $('body').css('overflow-y','auto'); 
  } else {
    // $('.js-drawer-menu').fadeIn();
    $('.js-drawer-menu').addClass('is-open');
    $(this).addClass('is-open');
    //自分で追加　背景スクロールの抑制
    $('body').css('overflow-y', 'hidden');
  }
});


});

// ファーストビュースライダー
const swiper01 = new Swiper(".js-fv-swiper", {
  loop: true,
  effect: "fade", // フェード切り替え
  autoplay: {
    delay: 4000, // 4秒後に次のスライドへ
    disableOnInteraction: false, // ユーザーが操作しても自動再生を継続
  },
  speed: 2000, // 2秒かけてフェード
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// キャンペーンカードスライダー
const mySwiper02 = new Swiper('.js-campaign-swiper ', {
  slidesPerView: '1.1',
  spaceBetween: 24,
  grabCursor: true,
  pagination: {
    el: '.js-campaign-card .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.js-campaign-card .swiper-button-next',
    prevEl: '.js-campaign-card .swiper-button-prev',
  },
  breakpoints: {
    768: {
      spaceBetween: 40,
      slidesPerView: '3',
    }
  },
});