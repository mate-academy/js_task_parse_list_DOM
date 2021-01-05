'use strict';

// write code here
const items = document.querySelector('ul').children;

const arr = [...items];

arr.sort((a, b) => {
  const first = +a.dataset.salary.slice(1).split(',').join('');
  const second = +b.dataset.salary.slice(1).split(',').join('');

  return first <= second ? 1 : -1;
});

arr.forEach(i => document.querySelector('ul').append(i));
