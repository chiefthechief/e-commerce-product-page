//ELEMENTS TO BE USED
let menu = document.querySelector('header nav.nav-left ul');
let menuBar = document.querySelector('header nav.nav-left i:first-child');
let closeMenu = document.querySelector('header nav.nav-left ul li i');
let main = document.querySelector('main');
let imageBanner = document.querySelector('main div.image-banner');
let img = document.createElement('img');
let bannerImages = document.querySelectorAll('main > div.container > div.swiper > div.swiper-wrapper > div.swiper-slide > div.image-wrapper > img');
//SLIDER
var swiper = new Swiper(".swiper", {
   loop: false,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   pagination: {
      el: ".swiper-pagination",
   },
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
img.src = './images/image-product-1.jpg';
imageBanner.appendChild(img);
bannerImages.forEach(element => {
   element.addEventListener('click', () => {
   img.setAttribute('src', element.getAttribute('src'))
   })
})