'use strict';

// Variabls
const body = document.querySelector('body');
const start = document.querySelector('button[data-action="start"]');
const stop = document.querySelector('button[data-action="stop"]');
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
let timerId;
let isActive = false;

// Events
start.addEventListener('click', startColorChange);
stop.addEventListener('click', stopColorChange);

// Functions
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function startColorChange() {
  if (isActive) return;
  isActive = true;
  start.setAttribute('disabled', 'disabled');
  timerId = setInterval(() => {
    body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
}

function stopColorChange() {
  isActive = false;
  clearInterval(timerId);
  start.removeAttribute('disabled');
}
