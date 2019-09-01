'use strict';
import { users } from './users.js';

const getNamesSortedByFriendsCount = users => {
  const result = [...users]
    .sort((prevUser, nextUser) => {
      return prevUser.friends.length - nextUser.friends.length;
    })
    .map(user => user.name);
  return result;
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
