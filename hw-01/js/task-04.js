'use strict';

const credits = 23580;
const pricePerDroid = 3000;

const quantityDroid = prompt('Сколько дроид желаете купить?');
const quantity = Number(quantityDroid);

if (quantityDroid === null) {
  console.log('Отменено пользователем!');
} else {
  const totalPrice = pricePerDroid * quantity;
  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    const balance = credits - totalPrice;
    console.log(`Вы купили ${quantity} дроидов, на счету осталось ${balance} кредитов.`);
  }
}
