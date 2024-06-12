const Close = document.getElementById('close');
const UserLocation = document.getElementById('location');
const Main = document.getElementById('main');
Close.addEventListener("click", function () {
    UserLocation.style.display = "none";
   Main.style.paddingTop = "44px";
   localStorage.setItem('UserClosedLocation', true);
});
if (localStorage.getItem('UserClosedLocation')) {
    UserLocation.style.display = "none";
    Main.style.paddingTop = "44px";
}
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 15,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    speed: 700,
    loop: true,
  });
   var swiper = new Swiper('.my-swiper-container', {
    slidesPerView: "auto",
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 0, // Set to 1 to create a continuous effect
      disableOnInteraction: false,
    },
    speed: 4000, // Adjust speed for smoother scroll
    loopAdditionalSlides: 1,
    allowTouchMove: false,
    cssMode: false,
    
  });
const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');
const closeHam = document.querySelector('.close-menu');

hamburger.addEventListener('click', ()=>{


  navLinks.style.height = '100vh';
            navLinks.style.opacity = '1';
            navLinks.style.visibility = 'visible';
  closeHam.style.display = 'flex';

})
closeHam.addEventListener('click', ()=>{
  closeHam.style.display = 'none';
  navLinks.style.height = '0';
  navLinks.style.opacity = '0';
  setTimeout(() => {
    navLinks.style.visibility = 'hidden';
}, 600);

 
  
  
})