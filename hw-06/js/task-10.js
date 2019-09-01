'use strict';
import { users } from './users.js';

const getSortedUniqueSkills = users => {
  const result = users
    .reduce((skills, item) => {
      skills.push(...item.skills);
      return skills;
    }, [])
    .sort()
    .filter((skill, i, arr) => {
      if (skill !== arr[i + 1]) {
        return skill;
      }
    });
  return result;
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
