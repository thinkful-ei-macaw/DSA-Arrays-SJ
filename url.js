'use strict';

function url(str) {
  let results = str.split(' ').join('%20');
  console.log(results);
}

url('tauhida parveen');
url('www.thinkful.com /tauh ida parv een');