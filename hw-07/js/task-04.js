'use strict';

let counterValue = 0;
const currentValue = document.querySelector('#value');

const increment = () => {
  counterValue += 1;
  return (currentValue.textContent = counterValue);
};

const decrement = () => {
  counterValue -= 1;
  return (currentValue.textContent = counterValue);
};

const incrementButton = document.querySelector(
  'button[data-action="increment"]',
);
const dercementButton = document.querySelector(
  'button[data-action="decrement"]',
);

incrementButton.addEventListener('click', increment);
dercementButton.addEventListener('click', decrement);
