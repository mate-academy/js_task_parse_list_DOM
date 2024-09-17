'use strict';

const list = document.querySelectorAll('li');

function getNumber(el) {
  return +el.dataset.salary.slice(1, el.length).split(',').join('.');
}

function sortList([...array], callback) {
  return array.sort((a, b) => callback(b) - callback(a));
}

const sortedList = sortList(list, getNumber);

document.querySelector('ul').append(...sortedList);
