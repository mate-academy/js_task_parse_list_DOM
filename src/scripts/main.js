'use strict';

const listUl = document.querySelector('ul');

const sortList = (list) => {
  const people = [...list.querySelectorAll('li')];
  const arr = people.sort(
    (a, b) => +b.dataset.salary.slice(1).split(',').join('')
    - +a.dataset.salary.slice(1).split(',').join(''));

  list.append(...arr);
};

const getEmployees = (list) => {
  const obj = [...list.querySelectorAll('li')];

  return obj.map(el => ({
    name: el.innerText,
    position: el.dataset.position,
    salary: el.dataset.salary,
    age: el.dataset.age,
  }));
};

sortList(listUl);
getEmployees(listUl);
