//js

const burgerBtn = document.querySelector('.burger-btn');
const burgerMenu = document.querySelector('.burger-menu');

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
