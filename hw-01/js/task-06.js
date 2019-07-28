'use strict';

let input;
let total = 0;

do {
  input = prompt('Введите число');
  if (input !== null) {
    if(Number(input)) {
      total= total + Number(input);
    } else {
      alert('Было введено не число, попробуйте еще раз');
      continue;
    }
  } else {
    alert(`Общая сумма чисел равна ${total}`);
  }
} while (input);
