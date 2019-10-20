'use strict';

// Subtask 1
const delay = ms => {
  const time = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
      reject('Error');
    }, ms);
  });
  return time;
};

const logger = time => console.log(`Resolved after ${time}ms`);

// Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms

// Subtask 3
