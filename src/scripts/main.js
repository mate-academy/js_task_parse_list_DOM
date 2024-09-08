'use strict';

const list = document.querySelector('ul');
const arr = Array.from(document.querySelectorAll('li')).sort(
  (a, b) =>
    parseInt(b.dataset.salary.slice(1).split(',').join('')) -
    parseInt(a.dataset.salary.slice(1).split(',').join('')),
);

list.innerHTML = '';

arr.forEach((item) => list.appendChild(item));
