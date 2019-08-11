'use strict';

const countProps = function(obj) {
  const objectLength = Object.entries(obj).length;
  return objectLength;
};

console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
