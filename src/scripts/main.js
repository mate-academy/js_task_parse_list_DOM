'use strict';

const elements = document.querySelectorAll('li');

const list = [...elements];

function getNumber(item) {
  const x = item.slice(1).split(',').join('');

  return +x;
}

function sortList(a, b) {
  return getNumber(b.dataset.salary) - getNumber(a.dataset.salary);
};

const box = document.querySelector('li').parentNode;

return list.sort(sortList).forEach(item =>
  box.appendChild(item));
