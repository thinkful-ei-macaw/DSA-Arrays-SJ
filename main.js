'use strict';
const Array = require('./array');

function main() {
  Array.SIZE_RATIO = 3;
  let arr = new Array();
  
  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  arr.pop();
  arr.pop();
  arr.pop();
  
  console.log(arr.get(0));
}
  
main();

//question 2 part 1
//The length is 1, capacity:3, and ptr: 0

//question 2 part 2
//The length is 6, capacity: 12, and ptr: 3. There are 6 values, it is holding 12 spots in memory, and the memory address has moved from 0 to 3.

//question 3
//The length is 3, capacity: 12, and ptr: 3. There are now 3 values, the capacity is still 12 because the 12 spots are being reserved for whatever case,
//and the memory address remains the same because we didn't do any resizing.

//question 4 part 1
//The result is NaN because the value we pushed is a String and not a Integer.

//question 4 part 2
//The purpose of the _resize() function in our Array class is to
//find a new spot in memory for whatever you're trying to store based on the size of your array
//when you run out of space and have to find a new space to store the larger array.