const heroSwiper = document.querySelector('.swiper')

if (heroSwiper) { 
   const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
     loop: true,
  
  navigation: {
    nextEl: ".hero__button-prev",
    prevEl: ".hero__button-next",
  }
 });
}