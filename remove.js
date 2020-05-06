'use strict';

//two parameters (string, and the letters)
function remove(str, word) {
  let results = '';

  for (let i = 0; i < str.length; i++) {
    let letter = check(str.charAt(i), word);

    results += letter;
  }

  console.log(results);
}

//character at position i of the string, and the array of letters you don't want
function check(num, word) {
  for(let i = 0; i < word.length; i++) {
    if (num === word.charAt(i)) {
      return '';
    }
  }
  return num;
}

let str = 'Battle of the Vowels: Hawaii vs. Grozny';
let word = 'aeiou';

remove(str, word);

