'use strict';

const findBestEmployee = function(employees) {
  const keys = Object.keys(employees);
  let maxTaskQuantity = 0;
  let bestEmployee;

  for (const key of keys) {
    if(maxTaskQuantity < employees[key]) {
      maxTaskQuantity = employees[key];
      bestEmployee = key;
    }
  }

  const result = `${bestEmployee}: ${maxTaskQuantity}`;
  return result;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
