var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var shoppmall = new Swiper(".myShopmall",{
    // slidesPerView: 4,
    // slidesPerColumn: 2,
    // spaceBetween: 30,
    navigation: {
      nextEl: ".shopmall-button-next",
      prevEl: ".shopmall-button-prev",
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
   
  
  })
  var flashSale = new Swiper (".flash",{
    navigation: {
      nextEl: ".flash-button-next",
      prevEl: ".flash-button-prev",
    },
  })
  var topSale = new Swiper (".top_sale",{
    navigation: {
      nextEl: ".top_sale-button-next",
      prevEl: ".top_sale-button-prev",
    },
  })
  var category = new Swiper(".category_list", {
    slidesPerView: 2,
    // centeredSlides: true,
    // spaceBetween: 30,
    grabCursor: true,
  
    navigation: {
      nextEl: ".category-button-next",
      prevEl: ".category-button-prev"
    }
  });