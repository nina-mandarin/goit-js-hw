'use strict';

const countTotalSalary = (employees) => {
  const values = Object.values(employees);
  let totalSalary = 0;
  for (let value of values) {
    totalSalary += value;
  }
  return totalSalary;
};

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400
