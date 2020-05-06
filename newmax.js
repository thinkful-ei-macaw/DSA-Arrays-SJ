'use strict';
// Kadane's algorithm 
function maxSum(arr){

  let curr_max = 0, max_so_far = 0;

  for(let i = 0; i < arr.length; i++){  
    curr_max = Math.max(0, curr_max + arr[i]);
    max_so_far = Math.max(curr_max, max_so_far);
  } 
  console.log(max_so_far);
  return max_so_far;
}
let arr = [4, 6, -3, 5, -2, 1];

maxSum(arr)