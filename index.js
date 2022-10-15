//ELEMENTS TO BE USED
const menu = document.querySelector('header nav.nav-left ul');
const menuBar = document.querySelector('header nav.nav-left i:first-child');
const closeMenu = document.querySelector('header nav.nav-left ul li i');
const main = document.querySelector('main');
const imageBanner = document.querySelector('main div.image-banner');
const img = document.createElement('img');
const bannerImages = document.querySelectorAll('main > div.container > div.swiper > div.swiper-wrapper > div.swiper-slide > div.image-wrapper > img');
const increaseNumberofShoes = document.querySelector('main > section:nth-child(2) > div:nth-child(5) > i:last-child');
const decreaseNumberofShoes = document.querySelector('main > section:nth-child(2) > div:nth-child(5) > i:first-child');
const numberofShoes = document.querySelector('main section:nth-child(2) > div:nth-child(5) > p');
const addtoCart = document.querySelector('main section:nth-child(2) > div:nth-child(6)');
let shoesNumber = 0;
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
   img.setAttribute('src', element.getAttribute('src'));
   })
})
//ADDING CART FUNCTIONALITY
increaseNumberofShoes.addEventListener('click', () => {
   shoesNumber += 1;
   numberofShoes.textContent = shoesNumber;
   addtoCart.addEventListener('click', cartIndicator);
})
decreaseNumberofShoes.addEventListener('click', () => {
   if (shoesNumber === 0) {
      shoesNumber = 0;
   } else {
      shoesNumber -= 1;
   }
   numberofShoes.textContent = shoesNumber;
   addtoCart.addEventListener('click', cartIndicator);
})
function cartIndicator() {
   if (shoesNumber === 0) {
      document.documentElement.style.setProperty('--hidden', 'none');
   } else {
      document.documentElement.style.setProperty('--hidden', 'initial');
   }
}