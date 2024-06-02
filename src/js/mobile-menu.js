const burgerBtn = document.querySelector('.header-burger-btn');
const burgerMenu = document.querySelector('.header-burger-menu');

burgerBtn.addEventListener('click', event => {
  toggleBurger();
});

burgerMenu.addEventListener('click', event => {
  toggleBurger();
});

function toggleBurger() {
  burgerBtn.classList.toggle('open');
  burgerMenu.classList.toggle('hidden');
}
