'use strict';

const inventory = {
  items: ['Монорельса', 'Фильтр'],
  add(itemName) {
    this.items.push(itemName);
  },
  remove(itemName) {
    this.items = this.items.filter(item => item !== itemName);
  },
};

const invokeInventoryOperation = function(itemName, inventoryAction) {
  console.log(`Invoking ${inventoryAction.name} opeartion on ${itemName}`);
  inventoryAction.call(inventory, itemName);
};

// alternative function
// const invokeInventoryOperation = function(obj, itemName, inventoryAction) {
//   console.log(`Invoking ${inventoryAction.name} opeartion on ${itemName}`);
//   inventoryAction.call(obj, itemName);
// };
// invokeInventoryOperation(inventory,'Аптечка', inventory.add);
// invokeInventoryOperation(inventory, 'Фильтр', inventory.remove);

invokeInventoryOperation('Аптечка', inventory.add);
// Invoking add opeartion on Аптечка

console.log(inventory.items); // ['Монорельса', 'Фильтр', 'Аптечка']

invokeInventoryOperation('Фильтр', inventory.remove);
// Invoking remove opeartion on Фильтр

console.log(inventory.items); // ['Монорельса', 'Аптечка']
