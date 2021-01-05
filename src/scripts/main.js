'use strict';

// write code here
const items = document.querySelector('ul').children;
let arr = [];

const sortList = function(list) {
  arr = [...list];

  arr.sort((a, b) => {
    const first = +a.dataset.salary.slice(1).split(',').join('');
    const second = +b.dataset.salary.slice(1).split(',').join('');

    return first <= second ? 1 : -1;
  });
};

const getEmployees = function(list) {
  list.forEach(i => document.querySelector('ul').append(i));
};

sortList(items);
getEmployees(arr);
