'use strict';
import { users } from './users.js';

const getUsersWithAge = (users, min, max) => {
  const result = users.filter(user => user.age >= min && user.age <= max);
  return result;
};

console.log(getUsersWithAge(users, 20, 30));
// [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
