'use strict';
import { users } from './users.js';

const getUsersWithFriend = (users, friendName) => {
  const result = users
    .filter(user => user.friends.find(friend => friend === friendName))
    .map(user => user.name);
  return result;
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
