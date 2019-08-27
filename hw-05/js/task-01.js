'use strict';

const Account = function(login, email) {
  this.login = login;
  this.email = email;
};
Account.prototype.getInfo = function() {
  console.log(`Login: ${this.login}, Email: ${this.email}`);
};

console.log(Account.prototype.getInfo); // function

const mango = new Account('Mangozedog', 'mango@dog.woof');
mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account('Poly', 'poly@mail.com');
poly.getInfo(); // Login: Poly, Email: poly@mail.com
