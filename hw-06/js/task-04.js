'use strict';
import { users } from './users.js';

const getInactiveUsers = users => {
  const result = users.filter(user => !user.isActive);
  return result;
};

console.log(getInactiveUsers(users));
// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
