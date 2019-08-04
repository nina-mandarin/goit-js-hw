'use strict';

let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите число');
  if (input !== null) {
    if(Number(input)) {
      numbers.push(Number(input));
    } else {
      alert('Было введено не число, попробуйте еще раз');
      continue;
    }
  } else {
    if (numbers.length > 0) {
      for (let i = 0; i < numbers.length; i += 1) {
        total += numbers[i];
      }
      console.log(`Общая сумма чисел равна ${total}`);
    }
  }
} while (input);