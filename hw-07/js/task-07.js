'use strict';

const input = document.querySelector('#font-size-slider');
const text = document.querySelector('#text');

const changeFontFize = e => {
  const newFontSize = e.currentTarget.value;
  return (text.style.fontSize = `${newFontSize}px`);
};

input.addEventListener('input', changeFontFize);
