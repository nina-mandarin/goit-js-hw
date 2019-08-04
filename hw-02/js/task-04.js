'use strict';

const findLongestWord = function(string) {
  const words = string.split(' ');
  let  longestWord = words[0];
  for (let i = 1; i < words.length; i += 1) {
    if (words[i].length >  longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'