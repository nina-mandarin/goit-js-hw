'use strict';

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

let idCounter = 0;

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод отвечающий за добавление суммы к балансу
   * Создает объект транзакции и вызывает addTransaction
   */
  deposit(amount) {
    const transaction = {
      id: idCounter++,
      type: Transaction.DEPOSIT,
    };
    transaction.amount = amount;
    this.addTransaction(transaction);
    return (this.balance += amount);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Создает объект транзакции и вызывает addTransaction
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    const transaction = {
      id: idCounter++,
      type: Transaction.WITHDRAW,
    };
    transaction.amount = amount;
    if (amount <= this.balance) {
      this.addTransaction(transaction);
      this.balance -= amount;
      return this.balance;
    } else {
      console.log(
        'Снятие такой суммы не возможно, недостаточно средств на балансе!',
      );
    }
  },

  /*
   * Метод добавляющий транзацию в свойство transactions
   * Принимает объект трназкции
   */
  addTransaction(transaction) {
    return this.transactions.push(transaction);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const singleTransaction of this.transactions) {
      if (id === singleTransaction.id) {
        return singleTransaction;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let totalFunds = 0;
    for (const obj of this.transactions) {
      if (type === obj.type) {
        totalFunds += obj.amount;
      }
    }
    return totalFunds;
  },
};
