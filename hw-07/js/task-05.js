'use strict';

const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

const writeText = e => {
  const text = e.currentTarget.value;
  text.length > 0
    ? (outputEl.textContent = text)
    : (outputEl.textContent = 'незнакомец');
};

inputEl.addEventListener('input', writeText);
