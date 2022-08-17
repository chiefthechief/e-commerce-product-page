//ELEMENTS TO BE USED
let menu = document.querySelector('header nav.nav-left ul');
let menuBar = document.querySelector('header nav.nav-left i:first-child');
let closeMenu = document.querySelector('header nav.nav-left ul li i');
let main = document.querySelector('main');
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
//DYNAMICALLY ADDING STYLES
menuBar.addEventListener('click', () => {
   menu.classList.add('slide');
   body.classList.add('modal');
})
closeMenu.addEventListener('click', () => {
   menu.classList.remove('slide');
   body.classList.remove('modal');
})
if(window.innerWidth > 499){
   main.classList.add('flex');
   menu.classList.add('flex');
}