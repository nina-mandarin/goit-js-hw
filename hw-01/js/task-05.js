'use strict';

const country = prompt('Введите страну');
const selectedCountry = country.toLowerCase();
let countryName;
let price;

switch (selectedCountry) {
  case 'китай':
    countryName = 'Китай';
    price = 100;
    alert(`Доставка в ${countryName} будет стоить ${price} кредитов`);
    break;
  case 'чили':
    countryName = 'Чили';
    price = 250;
    alert(`Доставка в ${countryName} будет стоить ${price} кредитов`);
    break;
  case 'австралия':
    countryName = 'Австралия';
    price = 170;
    alert(`Доставка в ${countryName} будет стоить ${price} кредитов`);
    break;  
  case 'индия':
    countryName = 'Индию';
    price = 80;
    alert(`Доставка в ${countryName} будет стоить ${price} кредитов`);
    break;
  case 'ямайка':
    countryName = 'Ямайку';
    price = 120;
    alert(`Доставка в ${countryName} будет стоить ${price} кредитов`);
    break;
  default:
    alert('В вашей стране доставка не доступна');
}