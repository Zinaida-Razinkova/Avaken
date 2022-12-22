let header = document.querySelector('.header');
let colorMenu = document.querySelector('.header__menu-list');
let colorList = document.querySelector('.header__menu-link');
let logo = document.querySelector('.header__logo-svg');
let closeButton = document.querySelector('.header__button-close');
let burgerButton = document.querySelector('.header__button-open');

const headerHeight = header.offsetHeight;

window.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.classList.add('active');
    colorList.classList.add('active');
    logo.classList.add('active');
    closeButton.classList.add('active');
    burgerButton.classList.add('active');
    colorMenu.classList.add('active');
  } else {
    header.classList.remove('active');
    colorList.classList.remove('active');
    logo.classList.remove('active');
    closeButton.classList.remove('active');
    burgerButton.classList.remove('active');
    colorMenu.classList.remove('active');
  }
});
