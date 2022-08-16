//ELEMENTS TO BE USED
let body = document.querySelector('body');
let backgroundDiv = document.querySelector('body > div:first-child');
let menu = document.querySelector('header nav.nav-left ul');
let menuBar = document.querySelector('header nav.nav-left i:first-child');
let closeMenu = document.querySelector('header nav.nav-left ul li i');
//SLIDER
var swiper = new Swiper(".swiper", {
   loop: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   pagination: {
      el: ".swiper-pagination",
   }
})
menuBar.addEventListener('click', () => {
   menu.classList.add('slide');
   body.classList.add('modal');
   backgroundDiv.classList.add('overlay');
})
closeMenu.addEventListener('click', () => {
   menu.classList.remove('slide');
   body.classList.remove('modal');
   backgroundDiv.classList.remove('overlay');
})