$(function () {
  // category__menu
  var swiper = new Swiper(".category__menu", {
    slidesPerView: "auto",
    spaceBetween: 30,


  });
  // main_vis
  var swiper = new Swiper(".main_vis", {
    pagination: {
      el: ".swiper-pagination",
    },
  });
  var swiper = new Swiper(".best_slide", {
    // slidesPerView: "2",
    slidesPerView: "auto",
    spaceBetween: 10,

    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
  });
  var swiper = new Swiper(".trends", {
    // slidesPerView:1.3,
    slidesPerView: "auto",
    spaceBetween: 10,
  });

  //review
  var swiper = new Swiper(".review-slide", {
    // slidesPerView:1.3,
    slidesPerView: "1",
    spaceBetween: 10,
  });

  $('.top__bar .mallbtn').click(function(){
    $('.top__bar .malldropmenu').toggleClass('show')
  });

// 패밀리 사이트
  $('.family__site--btn').click(function(){
    $('.familysite').toggleClass('show')
  });






});//지우면안돰

