'use strict';

function rotation(str1, str2) {

  let double = str2 += str2;
  if (double.includes(str1)) {
    console.log(true);
    return true;
  }

  console.log(false);
  return false;
}

rotation('amazon', 'azonma'); //false
rotation('amazon', 'azonam'); //true
