/**
 * Selectors & Vars
 */
let total = 0;
let currentIndex = 0;
const active = 'box--active';
const button = document.querySelector('.button');
const counter = document.querySelector('.counter');
const boxes = document.querySelectorAll('.box');

// Colors
const css = getComputedStyle(document.body);
const colors = [
  css.getPropertyValue('--red'),
  css.getPropertyValue('--blue'),
  css.getPropertyValue('--green'),
  css.getPropertyValue('--navy'),
  css.getPropertyValue('--yellow'),
  css.getPropertyValue('--orange'),
];

/**
 * Handlers
 */
const increaseIndexAndTotal = () => {
  currentIndex += 1;
  currentIndex %= boxes.length;
};

const increaseTotal = () => {
  total += 1;
  counter.textContent = total;
  counter.style.background = currentIndex ? colors[currentIndex - 1] : colors[5];
  counter.style.marginTop = `${total * 35}px`;
};

const activateBox = () => {
  const activeBox = document.querySelector(`.${active}`);
  if (activeBox) activeBox.classList.remove(active);
  boxes[currentIndex].classList.add(active);
};

const handleButtonPress = ({ type, keyCode }) => {
  if (type === 'click' || keyCode === 32) {
    activateBox();
    increaseIndexAndTotal();
    increaseTotal();
  }
};

/**
 * Listeners
 */
document.addEventListener('keydown', handleButtonPress);
button.addEventListener('click', handleButtonPress);
