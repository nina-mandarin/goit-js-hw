'use strict';
import { users } from './users.js';

const getUserNames = users => {
  const result = users.map(user => user.name);
  return result;
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
