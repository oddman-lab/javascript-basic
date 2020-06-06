const numbers = document.querySelectorAll('[data-number]');
const buttons = document.querySelectorAll('button');

const showDisplay = document.querySelector('.disp-btn');
const display = document.querySelector('.calc__display');
const showDisplayDecor = document.querySelector('.fa');

showDisplay.addEventListener('click', () => {
  display.classList.toggle('show-display');
  showDisplayDecor.classList.toggle('fa-angle-up');
  showDisplayDecor.classList.toggle('fa-angle-down');
});