'use strict';

const boxes = document.querySelector('#boxes');
const input = document.querySelector('#controls input');
const renderButton = document.querySelector('button[data-action="render"]');
const destroyButton = document.querySelector('button[data-action="destroy"]');

input.addEventListener('change', getAmount);
renderButton.addEventListener('click', renderBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function renderBoxes() {
  const amountElements = Number(input.dataset.num);
  createBoxes(amountElements);
}

function createBoxes(amount) {
  console.log('amount: ', amount);
  let newElements = '';
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    const color = randomColor(255);
    const element = `
    <div style="width: ${size}px; height: ${size}px; background-color: ${color}"></div>
    `;
    newElements += element;
    size += 10;
  }
  boxes.insertAdjacentHTML('beforeend', newElements);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

function getAmount(e) {
  const amount = Number(e.currentTarget.value);
  return input.setAttribute('data-num', amount);
}

// Create color
function randomColor(number) {
  const r = Math.floor(Math.random() * (number + 1));
  const g = Math.floor(Math.random() * (number + 1));
  const b = Math.floor(Math.random() * (number + 1));
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}
