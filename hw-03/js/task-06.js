'use strict';

const calculateTotalPrice = (arr, productName) => {
  let totalPrice = 0;
  for (const obj of arr) {
    if (productName === obj.name) {
      totalPrice = obj.price * obj.quantity;
    }
  }
  return totalPrice;
};

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
];

console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800
