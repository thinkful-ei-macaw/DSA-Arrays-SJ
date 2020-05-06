'use strict';

function merge(arr1, arr2) {
  let results = arr1;

  for (let i = 0; i < arr2.length; i++) {
    results.push(arr2[i]);
  }

  results.sort(function(a, b) {
    return a - b;
  });

  console.log(results);
}
let arr1 = [1, 3, 6, 8, 11];
let arr2 = [2, 3, 5, 8, 9, 10];

merge(arr1, arr2);