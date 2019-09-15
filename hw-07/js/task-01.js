'use strict';

const items = Array.from(document.querySelectorAll('.item'));
const itemsLength = items.length;

console.log(`В списке ${itemsLength} категории.`);

items.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const categoryItemsCount = item.querySelector('ul').childElementCount;
  console.log(`Категория: ${title}`);
  console.log(`Количество элементов: ${categoryItemsCount}`);
});
