'use strict';

const list = document.querySelectorAll('li');

console.log(list);

const sorted = [...list].sort((a, b) => +a.attributes['data-salary'].nodeValue.slice(1).replace(',', '') - +b.attributes['data-salary'].nodeValue.slice(1).replace(',', ''));

console.log(sorted);

const ul = document.querySelector('ul');

sorted.forEach((el) => ul.append(el));