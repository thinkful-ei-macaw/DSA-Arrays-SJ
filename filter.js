'use strict';

function filter(arr, n) {
  let results = [];
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > n) {
      results.push(arr[i]);
    }
  }
  console.log(results);
}

let arr = [3, 8, 4, 6];

filter(arr, 5);