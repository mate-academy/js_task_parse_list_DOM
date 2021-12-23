'use strict';

const listItems = document.querySelectorAll('[data-position]');
const arrayFromList = [...listItems];

arrayFromList.sort((a, b) => {
  const first = +a.dataset.salary.replace(/[.,#!$?%^&*;:{}=\-_`~()]/g, '');
  const second = +b.dataset.salary.replace(/[.,#!$?%^&*;:{}=\-_`~()]/g, '');

  return second - first;
});

const list = document.querySelector('ul');

for (const person of arrayFromList) {
  list.append(person);
}
