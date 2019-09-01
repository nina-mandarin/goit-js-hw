'use strict';
import { users } from './users.js';

const getUsersWithGender = (users, gender) => {
  const result = users
    .filter(user => user.gender === gender)
    .map(user => user.name);
  return result;
};

console.log(getUsersWithGender(users, 'male'));
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
