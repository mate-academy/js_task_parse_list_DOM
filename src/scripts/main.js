'use strict';

const list = [...document.querySelectorAll('li')];
const ul = document.querySelector('ul');

function sort(li) {
  const listSorted = li.sort((a, b) => +b.dataset.salary.replace(/[$,]/g, '')
    - +a.dataset.salary.replace(/[$,]/g, ''));

  ul.append(...listSorted);
}

function employees(li) {
  return li.map(value => ({
    name: value.innerText,
    position: value.dataset.position,
    salary: value.dataset.salary,
    age: value.dataset.age,
  }));
}

sort(list);
employees(list);
