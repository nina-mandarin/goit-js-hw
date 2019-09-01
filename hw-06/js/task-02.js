'use strict';
import { users } from './users.js';

const getUsersWithEyeColor = (users, color) => {
  const result = users.filter(user => user.eyeColor === color);
  return result;
};

console.log(getUsersWithEyeColor(users, 'blue'));
// [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
