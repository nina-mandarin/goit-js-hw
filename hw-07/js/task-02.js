'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector('#ingredients');

const createItem = (element, array) => {
  const items = array.reduce((string, item) => {
    const newItem = document.createElement('li');
    newItem.textContent = item;
    return string + newItem.outerHTML;
  }, '');
  return element.insertAdjacentHTML('beforeend', items);
};

createItem(list, ingredients);
