'use strict';

class Storage {
  constructor(items) {
    this.items = items;
  }

  //возвращает массив текущих товаров
  getItems() {
    return this.items;
  }

  //получает новый товар и добавляет его к текущим
  addItem(item) {
    return this.items.push(item);
  }

  //получет товар и, если он есть, удаляет его из текущих
  removeItem(item) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i] === item) {
        const indexItem = this.items.indexOf(item);
        this.items.splice(indexItem, 1);
        return this.items;
      }
    }
  }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.log(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.log(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
