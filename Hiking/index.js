$(document).ready(function(){
    $('#nav_btn').click(function(){
       $('.nav_menu').toggleClass('show')
    })

    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        }
      });
})