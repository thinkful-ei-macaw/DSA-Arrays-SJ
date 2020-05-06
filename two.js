'use strict';
function two(arr) {
  let isCol = false;
  let R = arr.length;
  let C = arr[0].length;

  for (let i = 0; i < R; i++) {

    if (arr[i][0] === 0) {
      isCol = true;
    }

    for (let j = 1; j < C; j++) {

      if (arr[i][j] === 0) {
        arr[0][j] = 0;
        arr[i][0] = 0;
      }
    }
  }

  for (let i = 1; i < R; i++) {
    for (let j = 1; j < C; j++) {
      if (arr[i][0] === 0 || arr[0][j] === 0) {
        arr[i][j] = 0;
      }
    }
  }

  if (arr[0][0] === 0) {
    for (let j = 0; j < C; j++) {
      arr[0][j] = 0;
    }
  }

  if (isCol) {
    for (let i = 0; i < R; i++) {
      arr[i][0] = 0;
    }
  }

  console.log(arr);
}

let arr = [
  [1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]];

two(arr);