'use strict';

const list = [...document.querySelectorAll('li')];
const newlist = document.querySelector('ul');

const getEmployees = (listEmployees) =>
  listEmployees.map((person) => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: +person.dataset.salary.slice(1).split(',').join(''),
    age: +person.dataset.age,
  }));

const createSortList = (listEmployees) =>
  [...listEmployees]
    .sort(
      (a, b) =>
        a.dataset.salary.slice(1).split(',').join('') -
        b.dataset.salary.slice(1).split(',').join(''),
    )
    .forEach((person) => newlist.insertAdjacentElement('afterbegin', person));

getEmployees(list);
createSortList(list);
