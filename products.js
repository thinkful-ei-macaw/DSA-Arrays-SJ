'use strict';

function products(arr) {

  let results = [];
  for(let i = 0; i < arr.length; i++) {
    let num = 1;
    for(let j = 0; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        num *= arr[j];
      }
    }
    results.push(num);
  }
  console.log(results);
}

let arr = [1, 3, 9, 4];

products(arr);