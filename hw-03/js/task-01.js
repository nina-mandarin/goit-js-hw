'use strict';

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
console.log(user);

user.hobby = 'javascript';
console.log(user);

user.premium = false;
console.log(user);

for (let key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}
