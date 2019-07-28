'use strict';

const country = prompt('Введите страну');
const selectedCountry = country.toLowerCase();
const countries = ['Китай', 'Чили', 'Австралия', 'Индию', 'Ямайку'];
const prices = ['100', '250', '170', '80', '120'];

switch (selectedCountry) {
  case 'китай':
    alert(`Доставка в ${countries[0]} будет стоить ${prices[0]} кредитов`);
    break;
  case 'чили':
    alert(`Доставка в ${countries[1]} будет стоить ${prices[1]} кредитов`);
    break;
  case 'австралия':
    alert(`Доставка в ${countries[2]} будет стоить ${prices[2]} кредитов`);
    break;  
  case 'индия':
    alert(`Доставка в ${countries[3]} будет стоить ${prices[3]} кредитов`);
    break;
  case 'ямайка':
    alert(`Доставка в ${countries[4]} будет стоить ${prices[4]} кредитов`);
    break;
  default:
    alert('В вашей стране доставка не доступна');
}