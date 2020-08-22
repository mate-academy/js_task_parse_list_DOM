'use strict';

function sortList(list, fatherSelector) {
  list.sort((a, b) => b.dataset.salary.slice(1).split(',').join('')
    - a.dataset.salary.slice(1).split(',').join(''));

  for (const person of list) {
    document.querySelector(fatherSelector).append(person);
  }
}

const listSelector = 'ul';
const people = [...document.querySelector(listSelector).children];

sortList(people, listSelector);
