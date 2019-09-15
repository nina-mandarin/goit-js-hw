'use strict';

const input = document.querySelector('#validation-input');
const length = input.dataset.length;

const checkInputText = e => {
  const text = e.currentTarget.value;
  if (text.length === Number(length)) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
};

input.addEventListener('blur', checkInputText);
