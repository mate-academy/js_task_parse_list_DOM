'use strict';

const people = document.querySelector('ul');
const peopleArray = [...people.children];

const sortList = () => peopleArray
  .sort((a, b) =>
    (+b.dataset.salary.replace(/\D/g, ''))
    - (+a.dataset.salary.replace(/\D/g, '')))
  .map(person => people.append(person));

const getEmployees = () =>
  peopleArray.map(object =>
    Object.assign({ name: object.innerText }, object.dataset));

sortList();
getEmployees();
