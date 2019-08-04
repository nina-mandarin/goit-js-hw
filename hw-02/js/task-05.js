'use strict';

function formatString(string) {
  if ( string.length < 40) {
    return string;
  } else {
    const words = string.split(' ');
    let length = 40;
    let newString = [];
    for (let i = 0; i < words.length; i +=1) {
      if (words[i].length < length) {
        newString.push(words[i]);
      } else {
        let formatWord = words[i].split('').slice(0, length).join('');
        formatWord = formatWord + '...';
        newString.push(formatWord);
        newString = newString.join(' ');
        return newString;
      }
      length -= (words[i].length + 1);
    }
  }
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка